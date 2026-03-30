import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Search, UserPlus, Users, ChevronLeft, ChevronRight,
  ShieldCheck, User, Handshake, CheckCircle2, XCircle,
  X, AlertCircle, Eye, EyeOff, Edit,
} from 'lucide-react';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api, { getApiErrorMessage } from '../../../../lib/api';
import { useAuth } from '../../../../contexts/AuthContext';

import {
  PageHeader, PageTitleGroup, PageTitle, PageSubtitle, PrimaryButton,
  FilterBar, SearchWrapper, SearchIcon, SearchInput, FilterSelect,
  TableWrapper, Table, Thead, Th, Tbody, Tr, Td, TdMuted, TdActions,
  ActionButton,
  RoleBadge, ROLE_LABELS,
  StatusDot,
  EmptyState, EmptyIcon, EmptyTitle, EmptySubtitle,
  SkeletonRow, SkeletonCell, SkeletonBar,
  Pagination, PaginationInfo, PaginationButtons, PageButton,
  Overlay, ModalBox, ModalHeader, ModalTitle, ModalCloseButton,
  ModalBody, ModalFooter, CancelButton, SubmitButton, Spinner,
  Field, Label, Input, Select, FieldError, PasswordWrapper, TogglePasswordButton,
  TempPasswordBox, TempPasswordLabel, TempPasswordValue, CopyButton,
} from './styles';

// ── Configurações ─────────────────────────────────────────────────────────────
const PER_PAGE = 15;

// ── Skeleton ──────────────────────────────────────────────────────────────────
function TableSkeleton() {
  return Array.from({ length: 6 }).map((_, i) => (
    <SkeletonRow key={i}>
      <SkeletonCell><SkeletonBar $w="55%" /></SkeletonCell>
      <SkeletonCell><SkeletonBar $w="70%" /></SkeletonCell>
      <SkeletonCell><SkeletonBar $w="40%" /></SkeletonCell>
      <SkeletonCell><SkeletonBar $w="30%" /></SkeletonCell>
      <SkeletonCell><SkeletonBar $w="50%" /></SkeletonCell>
      <SkeletonCell><SkeletonBar $w="60px" /></SkeletonCell>
    </SkeletonRow>
  ));
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const formatDate = (iso) => {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
  });
};

const ROLE_ICONS = {
  admin: <ShieldCheck size={12} />,
  user: <User size={12} />,
  partner: <Handshake size={12} />,
};

// ── Modal de criação de usuário ──────────────────────────────────────────────
function CreateUserModal({ onClose, onCreated }) {
  const [form, setForm] = useState({ name: '', email: '', role: 'user' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [tempPassword, setTempPassword] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Nome é obrigatório.';
    if (!form.email.trim()) errs.email = 'E-mail é obrigatório.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Informe um e-mail válido.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setIsSubmitting(true);
    try {
      const { data } = await api.post('/users', {
        name: form.name.trim(),
        email: form.email.toLowerCase().trim(),
        role: form.role,
      });
      setTempPassword(data.data?.temporaryPassword ?? null);
      toast.success('Usuário criado com sucesso!');
      onCreated();
    } catch (error) {
      toast.error(getApiErrorMessage(error, 'Erro ao criar usuário.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Novo Usuário</ModalTitle>
          <ModalCloseButton onClick={onClose}><X size={18} /></ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          {tempPassword ? (
            <TempPasswordBox>
              <TempPasswordLabel>⚠️ Senha temporária (copie agora):</TempPasswordLabel>
              <PasswordWrapper>
                <TempPasswordValue type={showPassword ? 'text' : 'password'} value={tempPassword} readOnly />
                <TogglePasswordButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </TogglePasswordButton>
              </PasswordWrapper>
              <CopyButton onClick={() => {
                navigator.clipboard.writeText(tempPassword);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}>
                {copied ? '✓ Copiado!' : 'Copiar senha'}
              </CopyButton>
            </TempPasswordBox>
          ) : (
            <>
              <Field>
                <Label>Nome *</Label>
                <Input name="name" value={form.name} onChange={handleChange} $hasError={!!errors.name} />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </Field>
              <Field>
                <Label>E-mail *</Label>
                <Input name="email" value={form.email} onChange={handleChange} $hasError={!!errors.email} />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </Field>
              <Field>
                <Label>Papel *</Label>
                <Select name="role" value={form.role} onChange={handleChange}>
                  <option value="user">Usuário</option>
                  <option value="admin">Administrador</option>
                  <option value="partner">Parceiro</option>
                </Select>
              </Field>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <CancelButton onClick={onClose}>{tempPassword ? 'Fechar' : 'Cancelar'}</CancelButton>
          {!tempPassword && (
            <SubmitButton onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? <Spinner /> : 'Criar Usuário'}
            </SubmitButton>
          )}
        </ModalFooter>
      </ModalBox>
    </Overlay>
  );
}

// ── Modal de edição de usuário ──────────────────────────────────────────────
function EditUserModal({ user, onClose, onUpdated }) {
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
    is_active: user.is_active,
  });
  const [newPassword, setNewPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const payload = { ...form, name: form.name.trim() };
      if (newPassword) payload.password = newPassword;

      await api.patch(`/users/${user.id}`, payload);
      toast.success('Usuário atualizado!');
      onUpdated();
      onClose();
    } catch (error) {
      toast.error(getApiErrorMessage(error, 'Erro ao atualizar.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Editar Usuário</ModalTitle>
          <ModalCloseButton onClick={onClose}><X size={18} /></ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Field>
            <Label>Nome *</Label>
            <Input name="name" value={form.name} onChange={handleChange} />
          </Field>
          <Field>
            <Label>E-mail (Não editável)</Label>
            <Input value={form.email} disabled />
          </Field>
          <Field>
            <Label>Papel</Label>
            <Select name="role" value={form.role} onChange={handleChange}>
              <option value="user">Usuário</option>
              <option value="admin">Administrador</option>
              <option value="partner">Parceiro</option>
            </Select>
          </Field>
          <Field>
            <Label>
              <input type="checkbox" name="is_active" checked={form.is_active} onChange={handleChange} /> Ativo
            </Label>
          </Field>
          <Field>
            <Label>Nova senha (opcional)</Label>
            <PasswordWrapper>
              <Input type={showPassword ? 'text' : 'password'} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              <TogglePasswordButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </TogglePasswordButton>
            </PasswordWrapper>
          </Field>
        </ModalBody>
        <ModalFooter>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <SubmitButton onClick={handleSubmit} disabled={isSubmitting}>Salvar</SubmitButton>
        </ModalFooter>
      </ModalBox>
    </Overlay>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function UsersPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user: currentUser, isAdmin } = useAuth();

  const [page, setPage] = useState(1);
  const [role, setRole] = useState('');
  const [isActive, setIsActive] = useState('');
  const [search, setSearch] = useState('');
  const [apiSearch, setApiSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const debounceRef = useRef(null);

  useEffect(() => {
    if (!isAdmin) navigate('/clientes', { replace: true });
  }, [isAdmin, navigate]);

  // Handlers de Filtro
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setApiSearch(value);
      setPage(1);
    }, 500);
  };

  const handleRoleFilter = (e) => {
    setRole(e.target.value);
    setPage(1);
  };

  const handleStatusFilter = (e) => {
    setIsActive(e.target.value);
    setPage(1);
  };

  // Fetch de dados
  const { data, isLoading } = useQuery({
    queryKey: ['users', page, apiSearch, role, isActive],
    queryFn: async () => {
      const params = new URLSearchParams({ page, limit: PER_PAGE });
      if (apiSearch) params.set('search', apiSearch);
      if (role) params.set('role', role);
      if (isActive !== '') params.set('is_active', isActive === 'true' ? 1 : 0);
      const { data } = await api.get(`/users?${params.toString()}`);
      return data;
    },
    keepPreviousData: true,
  });

  const users = data?.data ?? [];
  const pagination = data?.pagination ?? { total: 0, totalPages: 1, currentPage: 1 };

  // Mutation para Status
  const { mutate: mutateStatus } = useMutation({
    mutationFn: ({ id, action }) => api.patch(`/users/${id}/${action}`),
    onSuccess: (_, vars) => {
      toast.success(`Usuário ${vars.action === 'deactivate' ? 'desativado' : 'reativado'}.`);
      queryClient.invalidateQueries(['users']);
    },
    onError: (err) => toast.error(getApiErrorMessage(err))
  });

  const handleDeactivate = (u) => {
    if (u.id === currentUser?.id) return toast.warning('Não pode desativar a si mesmo.');
    if (window.confirm(`Desativar ${u.name}?`)) mutateStatus({ id: u.id, action: 'deactivate' });
  };

  const handleReactivate = (u) => {
    if (window.confirm(`Reativar ${u.name}?`)) mutateStatus({ id: u.id, action: 'reactivate' });
  };

  if (!isAdmin) return null;

  return (
    <>
      <PageHeader>
        <PageTitleGroup>
          <PageTitle>Usuários</PageTitle>
          <PageSubtitle>{pagination.total} usuários cadastrados</PageSubtitle>
        </PageTitleGroup>
        <PrimaryButton onClick={() => setShowModal(true)}>
          <UserPlus size={16} /> Novo Usuário
        </PrimaryButton>
      </PageHeader>

      <FilterBar>
        <SearchWrapper>
          <SearchIcon><Search size={15} /></SearchIcon>
          <SearchInput placeholder="Buscar..." value={search} onChange={handleSearch} />
        </SearchWrapper>
        <FilterSelect value={role} onChange={handleRoleFilter}>
          <option value="">Todos os papéis</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuário</option>
          <option value="partner">Parceiro</option>
        </FilterSelect>
        <FilterSelect value={isActive} onChange={handleStatusFilter}>
          <option value="">Todos os status</option>
          <option value="true">Ativos</option>
          <option value="false">Inativos</option>
        </FilterSelect>
      </FilterBar>

      <TableWrapper>
        <Table>
          <Thead>
            <tr>
              <Th>Nome</Th><Th>E-mail</Th><Th>Papel</Th><Th>Status</Th><Th>Acesso</Th><Th>Ações</Th>
            </tr>
          </Thead>
          <Tbody>
            {isLoading ? <TableSkeleton /> : users.map((u) => (
              <Tr key={u.id}>
                <Td>{u.name}</Td>
                <TdMuted>{u.email}</TdMuted>
                <Td>
                  <RoleBadge $role={u.role}>{ROLE_ICONS[u.role]} {ROLE_LABELS[u.role]}</RoleBadge>
                </Td>
                <Td>
                  <StatusDot $active={u.is_active}>
                    {u.is_active ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                    {u.is_active ? 'Ativo' : 'Inativo'}
                  </StatusDot>
                </Td>
                <TdMuted>{u.last_login_at ? formatDate(u.last_login_at) : '—'}</TdMuted>
                <TdActions>
                  <ActionButton $variant="edit" onClick={() => setEditingUser(u)}><Edit size={14} /></ActionButton>
                  <ActionButton 
                    $variant={u.is_active ? "danger" : "success"} 
                    onClick={() => u.is_active ? handleDeactivate(u) : handleReactivate(u)}
                  >
                    {u.is_active ? 'Desativar' : 'Reativar'}
                  </ActionButton>
                </TdActions>
              </Tr>
            ))}
          </Tbody>
        </Table>

        {pagination.totalPages > 1 && (
          <Pagination>
            <PaginationInfo>Página {page} de {pagination.totalPages}</PaginationInfo>
            <PaginationButtons>
              <PageButton disabled={page === 1} onClick={() => setPage(page - 1)}><ChevronLeft size={15} /></PageButton>
              <PageButton disabled={page === pagination.totalPages} onClick={() => setPage(page + 1)}><ChevronRight size={15} /></PageButton>
            </PaginationButtons>
          </Pagination>
        )}
      </TableWrapper>

      {showModal && <CreateUserModal onClose={() => setShowModal(false)} onCreated={() => queryClient.invalidateQueries(['users'])} />}
      {editingUser && <EditUserModal user={editingUser} onClose={() => setEditingUser(null)} onUpdated={() => queryClient.invalidateQueries(['users'])} />}
    </>
  );
}