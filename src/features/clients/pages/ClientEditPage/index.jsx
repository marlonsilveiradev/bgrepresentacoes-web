// ============================================================
// src/features/clients/pages/ClientEditPage/index.jsx
// Edição completa de cliente — Dados, Endereço e Conta Bancária
// Endpoint: PATCH /clients/:id  (application/json)
// ============================================================
import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  ArrowLeft, Building2, MapPin, Landmark,
  Save, X, AlertCircle, StickyNote,
} from 'lucide-react';

import api, { getApiErrorMessage } from '../../../../lib/api';
import {
  Container, PageHeader, BackButton, TitleGroup,
  PageTitle, PageSubtitle,
  Card, CardHeader, CardIconWrapper, CardTitle,
  FormGrid, FullSpan,
  Field, Label, Input, Select, Textarea, FieldError, FieldHint,
  BankSection, BankSectionTitle,
  FormFooter, CancelButton, SaveButton, Spinner,
  SkeletonBar, SkeletonCard,
  Divider,
} from './styles';

// ── Opções de Select ──────────────────────────────────────────────────────────

const BENEFIT_OPTIONS = [
  { value: 'food', label: 'Vale Alimentação' },
  { value: 'meal', label: 'Vale Refeição' },
  { value: 'both', label: 'Alimentação + Refeição' },
];

const ACCOUNT_TYPE_OPTIONS = [
  { value: 'checking', label: 'Conta Corrente' },
  { value: 'savings',  label: 'Conta Poupança' },
];

const UF_OPTIONS = [
  'AC','AL','AM','AP','BA','CE','DF','ES','GO','MA',
  'MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN',
  'RO','RR','RS','SC','SE','SP','TO',
];

// ── Formatadores de exibição (apenas visual, não altera o valor enviado) ──────

const maskCNPJ = (v = '') => {
  const d = v.replace(/\D/g, '').slice(0, 14);
  if (d.length <= 2)  return d;
  if (d.length <= 5)  return `${d.slice(0,2)}.${d.slice(2)}`;
  if (d.length <= 8)  return `${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5)}`;
  if (d.length <= 12) return `${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5,8)}/${d.slice(8)}`;
  return `${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5,8)}/${d.slice(8,12)}-${d.slice(12)}`;
};

const maskPhone = (v = '') => {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2)  return `(${d}`;
  if (d.length <= 6)  return `(${d.slice(0,2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`;
  return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
};

const maskCEP = (v = '') => {
  const d = v.replace(/\D/g, '').slice(0, 8);
  if (d.length <= 5) return d;
  return `${d.slice(0,5)}-${d.slice(5)}`;
};

// ── Helpers de normalização (remove máscaras antes de enviar) ─────────────────

const onlyDigits = (v = '') => v.replace(/\D/g, '');

// ── Skeleton de carregamento ──────────────────────────────────────────────────

function EditSkeleton() {
  const fakeFields = (n) =>
    Array.from({ length: n }).map((_, i) => (
      <Field key={i}>
        <SkeletonBar $w="45%" $h="11px" />
        <SkeletonBar $h="44px" style={{ borderRadius: '8px', marginTop: '2px' }} />
      </Field>
    ));

  return (
    <Container>
      <PageHeader>
        <SkeletonBar $w="80px" $h="36px" style={{ borderRadius: '6px' }} />
        <TitleGroup>
          <SkeletonBar $w="200px" $h="28px" />
          <SkeletonBar $w="140px" $h="14px" style={{ marginTop: '4px' }} />
        </TitleGroup>
      </PageHeader>

      <SkeletonCard>
        <SkeletonBar $w="35%" $h="20px" />
        <Divider />
        <FormGrid>{fakeFields(6)}</FormGrid>
      </SkeletonCard>

      <SkeletonCard>
        <SkeletonBar $w="30%" $h="20px" />
        <Divider />
        <FormGrid>{fakeFields(4)}</FormGrid>
      </SkeletonCard>
    </Container>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────

export default function ClientEditPage() {
  const { id }   = useParams();
  const navigate = useNavigate();

  const [isLoading,    setIsLoading]    = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clientName,   setClientName]   = useState('');

  // ── react-hook-form ───────────────────────────────────────────────────────
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      // Dados da empresa
      corporate_name:      '',
      trade_name:          '',
      cnpj:                '',
      state_registration:  '',
      phone:               '',
      email:               '',
      benefit_type:        'food',
      notes:               '',
      // Endereço
      address_street:      '',
      address_number:      '',
      address_complement:  '',
      address_neighborhood:'',
      address_city:        '',
      address_state:       '',
      address_zip:         '',
      // Conta bancária (primeiro registro, se existir)
      bank_bank_name:      '',
      bank_bank_code:      '',
      bank_agency:         '',
      bank_agency_digit:   '',
      bank_account:        '',
      bank_account_digit:  '',
      bank_account_type:   'checking',
    },
  });

  // ── Carrega dados do cliente e popula o formulário ────────────────────────
  const fetchClient = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`/clients/${id}`);
      const c = data.data;

      setClientName(c.trade_name || c.corporate_name || '');

      // Conta bancária (usa o primeiro registro se existir)
      const bank = c.bankAccounts?.[0];

      // reset() popula todos os campos registrados de uma vez
      reset({
        corporate_name:      c.corporate_name       ?? '',
        trade_name:          c.trade_name            ?? '',
        cnpj:                maskCNPJ(c.cnpj         ?? ''),
        state_registration:  c.state_registration    ?? '',
        phone:               maskPhone(c.phone        ?? ''),
        email:               c.email                 ?? '',
        benefit_type:        c.benefit_type          ?? 'food',
        notes:               c.notes                 ?? '',
        address_street:      c.address_street        ?? '',
        address_number:      c.address_number        ?? '',
        address_complement:  c.address_complement    ?? '',
        address_neighborhood:c.address_neighborhood  ?? '',
        address_city:        c.address_city          ?? '',
        address_state:       c.address_state         ?? '',
        address_zip:         maskCEP(c.address_zip   ?? ''),
        bank_bank_name:      bank?.bank_name         ?? '',
        bank_bank_code:      bank?.bank_code         ?? '',
        bank_agency:         bank?.agency            ?? '',
        bank_agency_digit:   bank?.agency_digit      ?? '',
        bank_account:        bank?.account           ?? '',
        bank_account_digit:  bank?.account_digit     ?? '',
        bank_account_type:   bank?.account_type      ?? 'checking',
      });
    } catch (error) {
      toast.error(getApiErrorMessage(error, 'Erro ao carregar dados do cliente.'));
      navigate(`/clientes/${id}`, { replace: true });
    } finally {
      setIsLoading(false);
    }
  }, [id, navigate, reset]);

  useEffect(() => { fetchClient(); }, [fetchClient]);

  // ── Submit ────────────────────────────────────────────────────────────────
  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      // Remove máscaras dos campos numéricos antes de enviar
      const payload = {
        corporate_name:       formData.corporate_name       || undefined,
        trade_name:           formData.trade_name           || undefined,
        cnpj:                 onlyDigits(formData.cnpj)     || undefined,
        state_registration:   formData.state_registration   || undefined,
        phone:                onlyDigits(formData.phone)    || undefined,
        email:                formData.email                || undefined,
        benefit_type:         formData.benefit_type,
        notes:                formData.notes                || undefined,
        address_street:       formData.address_street       || undefined,
        address_number:       formData.address_number       || undefined,
        address_complement:   formData.address_complement   || undefined,
        address_neighborhood: formData.address_neighborhood || undefined,
        address_city:         formData.address_city         || undefined,
        address_state:        formData.address_state        || undefined,
        address_zip:          onlyDigits(formData.address_zip) || undefined,
        // Conta bancária: só envia se os campos obrigatórios estiverem preenchidos
        ...(formData.bank_bank_name && formData.bank_agency && formData.bank_account
          ? {
              bankAccount: {
                bank_name:     formData.bank_bank_name,
                bank_code:     formData.bank_bank_code     || undefined,
                agency:        formData.bank_agency,
                agency_digit:  formData.bank_agency_digit  || undefined,
                account:       formData.bank_account,
                account_digit: formData.bank_account_digit,
                account_type:  formData.bank_account_type,
              },
            }
          : {}),
      };

      // Remove chaves undefined para não poluir o payload
      Object.keys(payload).forEach(
        (k) => payload[k] === undefined && delete payload[k]
      );

      await api.patch(`/clients/${id}`, payload);

      toast.success('Cliente atualizado com sucesso!', { toastId: 'client-updated' });
      navigate(`/clientes/${id}`, { replace: true });

    } catch (error) {
      toast.error(getApiErrorMessage(error, 'Erro ao salvar alterações.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Renderização ──────────────────────────────────────────────────────────

  if (isLoading) return <EditSkeleton />;

  return (
    <>
      <Container>

        {/* ── Header ──────────────────────────────────────────── */}
        <PageHeader>
          <BackButton type="button" onClick={() => navigate(`/clientes/${id}`)}>
            <ArrowLeft size={15} />
            Voltar
          </BackButton>

          <TitleGroup>
            <PageTitle>Editar Cliente</PageTitle>
            <PageSubtitle>{clientName}</PageSubtitle>
          </TitleGroup>
        </PageHeader>

        <form id="edit-client-form" onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* ── Card: Dados da Empresa ───────────────────────── */}
          <Card style={{ marginBottom: '24px' }}>
            <CardHeader>
              <CardIconWrapper><Building2 size={18} /></CardIconWrapper>
              <CardTitle>Dados da Empresa</CardTitle>
            </CardHeader>

            <FormGrid>

              <Field>
                <Label htmlFor="corporate_name">Razão Social *</Label>
                <Input
                  id="corporate_name"
                  type="text"
                  placeholder="Razão social completa"
                  $hasError={!!errors.corporate_name}
                  disabled={isSubmitting}
                  {...register('corporate_name', {
                    required: 'A razão social é obrigatória.',
                    minLength: { value: 3, message: 'Mínimo 3 caracteres.' },
                  })}
                />
                {errors.corporate_name && (
                  <FieldError>
                    <AlertCircle size={11} />
                    {errors.corporate_name.message}
                  </FieldError>
                )}
              </Field>

              <Field>
                <Label htmlFor="trade_name">Nome Fantasia</Label>
                <Input
                  id="trade_name"
                  type="text"
                  placeholder="Nome fantasia (opcional)"
                  disabled={isSubmitting}
                  {...register('trade_name')}
                />
              </Field>

              <Field>
                <Label htmlFor="cnpj">CNPJ *</Label>
                <Input
                  id="cnpj"
                  type="text"
                  placeholder="00.000.000/0001-00"
                  $hasError={!!errors.cnpj}
                  disabled={isSubmitting}
                  {...register('cnpj', {
                    required: 'O CNPJ é obrigatório.',
                    validate: (v) =>
                      onlyDigits(v).length === 14 || 'CNPJ deve ter 14 dígitos.',
                    onChange: (e) => setValue('cnpj', maskCNPJ(e.target.value)),
                  })}
                />
                {errors.cnpj && (
                  <FieldError><AlertCircle size={11} />{errors.cnpj.message}</FieldError>
                )}
              </Field>

              <Field>
                <Label htmlFor="state_registration">Inscrição Estadual</Label>
                <Input
                  id="state_registration"
                  type="text"
                  placeholder="Inscrição estadual (opcional)"
                  disabled={isSubmitting}
                  {...register('state_registration')}
                />
              </Field>

              <Field>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  disabled={isSubmitting}
                  {...register('phone', {
                    onChange: (e) => setValue('phone', maskPhone(e.target.value)),
                  })}
                />
              </Field>

              <Field>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contato@empresa.com.br"
                  $hasError={!!errors.email}
                  disabled={isSubmitting}
                  {...register('email', {
                    pattern: {
                      value:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Informe um e-mail válido.',
                    },
                  })}
                />
                {errors.email && (
                  <FieldError><AlertCircle size={11} />{errors.email.message}</FieldError>
                )}
              </Field>

              <Field>
                <Label htmlFor="benefit_type">Tipo de Benefício *</Label>
                <Select
                  id="benefit_type"
                  $hasError={!!errors.benefit_type}
                  disabled={isSubmitting}
                  {...register('benefit_type', { required: 'Selecione o tipo.' })}
                >
                  {BENEFIT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </Select>
                {errors.benefit_type && (
                  <FieldError><AlertCircle size={11} />{errors.benefit_type.message}</FieldError>
                )}
              </Field>

              <FullSpan>
                <Field>
                  <Label htmlFor="notes">Observações</Label>
                  <Textarea
                    id="notes"
                    placeholder="Observações internas sobre o cliente…"
                    disabled={isSubmitting}
                    {...register('notes')}
                  />
                  <FieldHint>Visível apenas para a equipe interna.</FieldHint>
                </Field>
              </FullSpan>

            </FormGrid>
          </Card>

          {/* ── Card: Endereço ───────────────────────────────── */}
          <Card style={{ marginBottom: '24px' }}>
            <CardHeader>
              <CardIconWrapper><MapPin size={18} /></CardIconWrapper>
              <CardTitle>Endereço</CardTitle>
            </CardHeader>

            <FormGrid>

              <FullSpan>
                <Field>
                  <Label htmlFor="address_street">Logradouro</Label>
                  <Input
                    id="address_street"
                    type="text"
                    placeholder="Rua, Avenida, etc."
                    disabled={isSubmitting}
                    {...register('address_street')}
                  />
                </Field>
              </FullSpan>

              <Field>
                <Label htmlFor="address_number">Número</Label>
                <Input
                  id="address_number"
                  type="text"
                  placeholder="Nº"
                  disabled={isSubmitting}
                  {...register('address_number')}
                />
              </Field>

              <Field>
                <Label htmlFor="address_complement">Complemento</Label>
                <Input
                  id="address_complement"
                  type="text"
                  placeholder="Sala, Andar, Bloco…"
                  disabled={isSubmitting}
                  {...register('address_complement')}
                />
              </Field>

              <Field>
                <Label htmlFor="address_neighborhood">Bairro</Label>
                <Input
                  id="address_neighborhood"
                  type="text"
                  placeholder="Bairro"
                  disabled={isSubmitting}
                  {...register('address_neighborhood')}
                />
              </Field>

              <Field>
                <Label htmlFor="address_city">Cidade</Label>
                <Input
                  id="address_city"
                  type="text"
                  placeholder="Cidade"
                  disabled={isSubmitting}
                  {...register('address_city')}
                />
              </Field>

              <Field>
                <Label htmlFor="address_state">UF</Label>
                <Select
                  id="address_state"
                  disabled={isSubmitting}
                  {...register('address_state')}
                >
                  <option value="">Selecione</option>
                  {UF_OPTIONS.map((uf) => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </Select>
              </Field>

              <Field>
                <Label htmlFor="address_zip">CEP</Label>
                <Input
                  id="address_zip"
                  type="text"
                  placeholder="00000-000"
                  disabled={isSubmitting}
                  {...register('address_zip', {
                    onChange: (e) => setValue('address_zip', maskCEP(e.target.value)),
                  })}
                />
              </Field>

            </FormGrid>
          </Card>

          {/* ── Card: Conta Bancária ─────────────────────────── */}
          <Card style={{ marginBottom: '24px' }}>
            <CardHeader>
              <CardIconWrapper><Landmark size={18} /></CardIconWrapper>
              <CardTitle>Conta Bancária</CardTitle>
            </CardHeader>

            <BankSection>
              <BankSectionTitle>
                Dados Bancários Principais
              </BankSectionTitle>

              <FormGrid>

                <Field>
                  <Label htmlFor="bank_bank_name">Nome do Banco</Label>
                  <Input
                    id="bank_bank_name"
                    type="text"
                    placeholder="Ex: Bradesco, Itaú, Nubank…"
                    disabled={isSubmitting}
                    {...register('bank_bank_name')}
                  />
                </Field>

                <Field>
                  <Label htmlFor="bank_bank_code">Código do Banco</Label>
                  <Input
                    id="bank_bank_code"
                    type="text"
                    placeholder="Ex: 237"
                    disabled={isSubmitting}
                    {...register('bank_bank_code')}
                  />
                  <FieldHint>Código COMPE de 3 dígitos (opcional).</FieldHint>
                </Field>

                <Field>
                  <Label htmlFor="bank_agency">Agência *</Label>
                  <Input
                    id="bank_agency"
                    type="text"
                    placeholder="0000"
                    disabled={isSubmitting}
                    {...register('bank_agency')}
                  />
                </Field>

                <Field>
                  <Label htmlFor="bank_agency_digit">Dígito da Agência</Label>
                  <Input
                    id="bank_agency_digit"
                    type="text"
                    placeholder="X"
                    maxLength={2}
                    disabled={isSubmitting}
                    {...register('bank_agency_digit')}
                  />
                </Field>

                <Field>
                  <Label htmlFor="bank_account">Conta *</Label>
                  <Input
                    id="bank_account"
                    type="text"
                    placeholder="000000"
                    disabled={isSubmitting}
                    {...register('bank_account')}
                  />
                </Field>

                <Field>
                  <Label htmlFor="bank_account_digit">Dígito da Conta *</Label>
                  <Input
                    id="bank_account_digit"
                    type="text"
                    placeholder="0"
                    maxLength={2}
                    disabled={isSubmitting}
                    {...register('bank_account_digit')}
                  />
                </Field>

                <Field>
                  <Label htmlFor="bank_account_type">Tipo de Conta</Label>
                  <Select
                    id="bank_account_type"
                    disabled={isSubmitting}
                    {...register('bank_account_type')}
                  >
                    {ACCOUNT_TYPE_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </Select>
                </Field>

              </FormGrid>
            </BankSection>
          </Card>

        </form>
      </Container>

      {/* ── Footer fixo com botões ───────────────────────────── */}
      <FormFooter>
        <CancelButton
          type="button"
          disabled={isSubmitting}
          onClick={() => navigate(`/clientes/${id}`)}
        >
          <X size={15} />
          Cancelar
        </CancelButton>

        <SaveButton
          type="submit"
          form="edit-client-form"
          disabled={isSubmitting || !isDirty}
          $isSubmitting={isSubmitting}
          title={!isDirty ? 'Nenhuma alteração detectada' : undefined}
        >
          {isSubmitting ? (
            <>
              <Spinner />
              Salvando…
            </>
          ) : (
            <>
              <Save size={15} />
              Salvar Alterações
            </>
          )}
        </SaveButton>
      </FormFooter>
    </>
  );
}