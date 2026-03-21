// ============================================================
// src/features/users/pages/UsersPage/index.jsx
//
// Regras de acesso (espelhando o backend):
//   • Apenas admin pode acessar esta página
//   • Apenas admin pode criar, desativar e reativar usuários
//
// Padrões mantidos do projeto:
//   • Debounce 400ms na busca (igual ClientsPage)
//   • Paginação com ellipsis (igual ClientsPage)
//   • Skeleton de carregamento
//   • Feedback com react-toastify
//   • api.js sem .data duplicado (interceptor já retorna response)
// ============================================================
import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Search, UserPlus, Users, ChevronLeft, ChevronRight,
  ShieldCheck, User, Handshake, CheckCircle2, XCircle,
  X, AlertCircle, Eye, EyeOff,
} from 'lucide-react';

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
  // Modal
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
  admin:   <ShieldCheck size={12} />,
  user:    <User size={12} />,
  partner: <Handshake size={12} />,
};

// ── Modal de criação de usuário ───────────────────────────────────────────────
// Campos: name, email, role
// O backend gera a senha temporária e a retorna em `temporaryPassword`
function CreateUserModal({ onClose, onCreated }) {
  const [form, setForm]           = useState({ name: '', email: '', role: 'user' });
  const [errors, setErrors]       = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // Senha temporária retornada pelo backend após criação
  const [tempPassword, setTempPassword] = useState(null);
  const [copied, setCopied]       = useState(false);

  // Impede scroll do body enquanto o modal está aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Fecha ao pressionar Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim())                    errs.name  = 'Nome é obrigatório.';
    else if (form.name.trim().length > 150)   errs.name  = 'Nome deve ter no máximo 150 caracteres.';
    if (!form.email.trim())                   errs.email = 'E-mail é obrigatório.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                              errs.email = 'Informe um e-mail válido.';
    if (!['admin', 'user', 'partner'].includes(form.role))
                                              errs.role  = 'Selecione um papel válido.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpa erro do campo editado
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setIsSubmitting(true);
    try {
      const { data } = await api.post('/users', {
        name:  form.name.trim(),
        email: form.email.toLowerCase().trim(),
        role:  form.role,
      });
      // data.data.temporaryPassword — retornado apenas uma vez pelo backend
      setTempPassword(data.data?.temporaryPassword ?? null);
      toast.success('Usuário criado com sucesso!');
      onCreated(); // dispara refetch na lista
    } catch (error) {
      toast.error(getApiErrorMessage(error, 'Erro ao criar usuário.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = () => {
    if (!tempPassword) return;
    navigator.clipboard.writeText(tempPassword).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title">

        <ModalHeader>
          <ModalTitle id="modal-title">Novo Usuário</ModalTitle>
          <ModalCloseButton type="button" onClick={onClose} aria-label="Fechar">
            <X size={18} />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          {/* Senha temporária gerada — exibe APÓS a criação */}
          {tempPassword && (
            <TempPasswordBox>
              <TempPasswordLabel>
                ⚠️ Senha temporária gerada — anote e repasse ao usuário. Ela não será exibida novamente.
              </TempPasswordLabel>
              <PasswordWrapper>
                <TempPasswordValue type={showPassword ? 'text' : 'password'} value={tempPassword} readOnly />
                <TogglePasswordButton
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Ocultar' : 'Mostrar'}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </TogglePasswordButton>
              </PasswordWrapper>
              <CopyButton type="button" onClick={handleCopy}>
                {copied ? '✓ Copiado!' : 'Copiar senha'}
              </CopyButton>
            </TempPasswordBox>
          )}

          {/* Formulário — oculto depois da criação bem-sucedida */}
          {!tempPassword && (
            <>
              <Field>
                <Label htmlFor="user-name">Nome *</Label>
                <Input
                  id="user-name"
                  name="name"
                  type="text"
                  placeholder="Nome completo"
                  value={form.name}
                  onChange={handleChange}
                  $hasError={!!errors.name}
                  disabled={isSubmitting}
                  autoFocus
                />
                {errors.name && (
                  <FieldError><AlertCircle size={11} />{errors.name}</FieldError>
                )}
              </Field>

              <Field>
                <Label htmlFor="user-email">E-mail *</Label>
                <Input
                  id="user-email"
                  name="email"
                  type="email"
                  placeholder="usuario@empresa.com"
                  value={form.email}
                  onChange={handleChange}
                  $hasError={!!errors.email}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <FieldError><AlertCircle size={11} />{errors.email}</FieldError>
                )}
              </Field>

              <Field>
                <Label htmlFor="user-role">Papel *</Label>
                <Select
                  id="user-role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  $hasError={!!errors.role}
                  disabled={isSubmitting}
                >
                  <option value="user">Usuário</option>
                  <option value="admin">Administrador</option>
                  <option value="partner">Parceiro</option>
                </Select>
                {errors.role && (
                  <FieldError><AlertCircle size={11} />{errors.role}</FieldError>
                )}
              </Field>
            </>
          )}
        </ModalBody>

        <ModalFooter>
          <CancelButton type="button" onClick={onClose} disabled={isSubmitting}>
            {tempPassword ? 'Fechar' : 'Cancelar'}
          </CancelButton>

          {!tempPassword && (
            <SubmitButton type="button" onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? <><Spinner />Criando…</> : <><UserPlus size={15} />Criar Usuário</>}
            </SubmitButton>
          )}
        </ModalFooter>

      </ModalBox>
    </Overlay>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function UsersPage() {
  const navigate     = useNavigate();
  const { isAdmin }  = useAuth();

  // Redireciona imediatamente se não for admin
  // (proteção dupla — a rota já deve estar protegida no AppRouter)
  useEffect(() => {
    if (!isAdmin) navigate('/clientes', { replace: true });
  }, [isAdmin, navigate]);

  // ── Estado ────────────────────────────────────────────────
  const [users,      setUsers]      = useState([]);
  const [pagination, setPagination] = useState({ total: 0, totalPages: 1, currentPage: 1 });
  const [isLoading,  setIsLoading]  = useState(true);
  const [page,       setPage]       = useState(1);
  const [role,       setRole]       = useState('');
  const [isActive,   setIsActive]   = useState('');
  const [search,     setSearch]     = useState('');
  const [apiSearch,  setApiSearch]  = useState('');
  const [showModal,  setShowModal]  = useState(false);

  const debounceRef = useRef(null);

  // ── Busca na API ──────────────────────────────────────────
  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({ page, limit: PER_PAGE });
      if (apiSearch) params.set('search',    apiSearch);
      if (role)      params.set('role',      role);
      if (isActive !== '') params.set('is_active', isActive);

      const { data } = await api.get(`/users?${params.toString()}`);

      setUsers(data.data ?? []);
      setPagination({
        total:       data.pagination?.total       ?? 0,
        totalPages:  data.pagination?.totalPages  ?? 1,
        currentPage: data.pagination?.currentPage ?? 1,
      });
    } catch (error) {
      toast.error(getApiErrorMessage(error, 'Erro ao carregar usuários.'));
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  }, [page, apiSearch, role, isActive]);

  useEffect(() => { fetchUsers(); }, [fetchUsers]);

  // ── Handlers de filtro ────────────────────────────────────

  // Debounce 400ms — mesmo padrão da ClientsPage
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setApiSearch(value.trim());
      setPage(1);
    }, 400);
  };

  const handleRoleFilter = (e) => {
    setRole(e.target.value);
    setPage(1);
  };

  const handleStatusFilter = (e) => {
    setIsActive(e.target.value);
    setPage(1);
  };

  // ── Ações ─────────────────────────────────────────────────

  const handleDeactivate = async (user) => {
    if (!window.confirm(`Desativar o usuário "${user.name}"?`)) return;
    try {
      await api.patch(`/users/${user.id}/deactivate`);
      toast.success(`Usuário "${user.name}" desativado.`);
      fetchUsers();
    } catch (error) {
      toast.error(getApiErrorMessage(error, 'Erro ao desativar usuário.'));
    }
  };

  const handleReactivate = async (user) => {
    if (!window.confirm(`Reativar o usuário "${user.name}"?`)) return;
    try {
      await api.patch(`/users/${user.id}/reactivate`);
      toast.success(`Usuário "${user.name}" reativado.`);
      fetchUsers();
    } catch (error) {
      toast.error(getApiErrorMessage(error, 'Erro ao reativar usuário.'));
    }
  };

  // ── Renderização ──────────────────────────────────────────
  if (!isAdmin) return null;

  return (
    <>
      {/* Cabeçalho */}
      <PageHeader>
        <PageTitleGroup>
          <PageTitle>Usuários</PageTitle>
          <PageSubtitle>
            {pagination.total > 0
              ? `${pagination.total} usuário${pagination.total !== 1 ? 's' : ''} cadastrado${pagination.total !== 1 ? 's' : ''}`
              : 'Nenhum usuário cadastrado ainda'}
          </PageSubtitle>
        </PageTitleGroup>

        <PrimaryButton type="button" onClick={() => setShowModal(true)}>
          <UserPlus size={16} />
          Novo Usuário
        </PrimaryButton>
      </PageHeader>

      {/* Filtros */}
      <FilterBar>
        <SearchWrapper>
          <SearchIcon><Search size={15} /></SearchIcon>
          <SearchInput
            type="text"
            placeholder="Buscar por nome ou e-mail…"
            value={search}
            onChange={handleSearch}
          />
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

      {/* Tabela */}
      <TableWrapper>
        <Table>
          <Thead>
            <tr>
              <Th>Nome</Th>
              <Th>E-mail</Th>
              <Th>Papel</Th>
              <Th>Status</Th>
              <Th>Último acesso</Th>
              <Th>Ações</Th>
            </tr>
          </Thead>

          <Tbody>
            {isLoading && <TableSkeleton />}

            {!isLoading && users.map((u) => (
              <Tr key={u.id}>
                <Td>{u.name}</Td>
                <TdMuted>{u.email}</TdMuted>

                <Td>
                  <RoleBadge $role={u.role}>
                    {ROLE_ICONS[u.role]}
                    {ROLE_LABELS[u.role] ?? u.role}
                  </RoleBadge>
                </Td>

                <Td>
                  <StatusDot $active={u.is_active}>
                    {u.is_active
                      ? <><CheckCircle2 size={13} />Ativo</>
                      : <><XCircle      size={13} />Inativo</>}
                  </StatusDot>
                </Td>

                <TdMuted>
                  {u.last_login_at ? formatDate(u.last_login_at) : 'Nunca acessou'}
                </TdMuted>

                <TdActions>
                  {u.is_active ? (
                    <ActionButton
                      type="button"
                      $variant="danger"
                      onClick={() => handleDeactivate(u)}
                      title="Desativar usuário"
                    >
                      Desativar
                    </ActionButton>
                  ) : (
                    <ActionButton
                      type="button"
                      $variant="success"
                      onClick={() => handleReactivate(u)}
                      title="Reativar usuário"
                    >
                      Reativar
                    </ActionButton>
                  )}
                </TdActions>
              </Tr>
            ))}

            {!isLoading && users.length === 0 && (
              <tr>
                <td colSpan={6}>
                  <EmptyState>
                    <EmptyIcon><Users size={40} /></EmptyIcon>
                    <EmptyTitle>Nenhum usuário encontrado</EmptyTitle>
                    <EmptySubtitle>
                      {search || role || isActive
                        ? 'Tente ajustar os filtros para ver mais resultados.'
                        : 'Clique em "Novo Usuário" para criar o primeiro.'}
                    </EmptySubtitle>
                  </EmptyState>
                </td>
              </tr>
            )}
          </Tbody>
        </Table>

        {/* Paginação */}
        {!isLoading && pagination.totalPages > 1 && (
          <Pagination>
            <PaginationInfo>
              Página {pagination.currentPage} de {pagination.totalPages}
              {' '}· {pagination.total} registros
            </PaginationInfo>

            <PaginationButtons>
              <PageButton
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                aria-label="Página anterior"
              >
                <ChevronLeft size={15} />
              </PageButton>

              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                .filter((p) =>
                  p === 1 ||
                  p === pagination.totalPages ||
                  Math.abs(p - page) <= 2
                )
                .reduce((acc, p, idx, arr) => {
                  if (idx > 0 && p - arr[idx - 1] > 1) acc.push('…');
                  acc.push(p);
                  return acc;
                }, [])
                .map((p, i) =>
                  p === '…' ? (
                    <PageButton key={`ellipsis-${i}`} disabled as="span">…</PageButton>
                  ) : (
                    <PageButton
                      key={p}
                      type="button"
                      $active={p === page}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </PageButton>
                  )
                )}

              <PageButton
                type="button"
                onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
                disabled={page >= pagination.totalPages}
                aria-label="Próxima página"
              >
                <ChevronRight size={15} />
              </PageButton>
            </PaginationButtons>
          </Pagination>
        )}
      </TableWrapper>

      {/* Modal de criação */}
      {showModal && (
        <CreateUserModal
          onClose={() => setShowModal(false)}
          onCreated={() => {
            // Não fecha o modal automaticamente — o admin precisa copiar a senha
            fetchUsers();
          }}
        />
      )}
    </>
  );
}