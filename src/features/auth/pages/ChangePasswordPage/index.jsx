// ============================================================
// src/features/auth/pages/LoginPage/index.jsx
// Lógica e estrutura — sem estilos (ver styles.js)
// ============================================================
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Eye, EyeOff, LogIn, AlertCircle, X, ArrowRight } from 'lucide-react';

import { useAuth } from '../../../../contexts/AuthContext';
import {
  PageWrapper,
  BrandPanel,
  BrandContent,
  BrandTop,
  LogoMark,
  LogoName,
  BrandHeadline,
  BrandBody,
  StatRow,
  Stat,
  StatValue,
  StatLabel,
  BrandFooter,
  MobileLoginButton,
  FormPanel,
  FormInner,
  FormCloseButton,
  FormHeader,
  FormEyebrow,
  FormTitle,
  FormSubtitle,
  FieldGroup,
  Field,
  Label,
  InputWrapper,
  StyledInput,
  ToggleButton,
  FieldError,
  SubmitButton,
  Spinner,
  FormDivider,
  FormFooter,
  MobileOverlay,
  SheetHandle,
} from './styles';

// ── Componente ────────────────────────────────────────────────────────────────
export default function LoginPage() {
  const { login }  = useAuth();
  const navigate   = useNavigate();

  // Estado do painel mobile (drawer/sheet)
  const [formOpen, setFormOpen]       = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading]     = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: '', password: '' } });

  // Bloqueia scroll do body quando o sheet mobile está aberto
  const openForm = () => {
    setFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeForm = () => {
    setFormOpen(false);
    document.body.style.overflow = '';
  };

  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const { mustChangePassword } = await login(email, password);

      document.body.style.overflow = '';

      if (mustChangePassword) {
        navigate('/alterar-senha', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
    } catch (error) {
      toast.error(error.message, { toastId: 'login-error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>

      {/* ── LADO A: Painel de marca / landing ── */}
      <BrandPanel>
        <BrandContent>
          {/* Logo */}
          <BrandTop>
            <LogoMark>BG</LogoMark>
            <LogoName>BG Representações</LogoName>
          </BrandTop>

          {/* Headline de impacto */}
          <BrandHeadline>
            Gestão de <em>benefícios</em> com{' '}
            precisão corporativa.
          </BrandHeadline>

          <BrandBody>
            Plataforma integrada para gerenciamento de clientes,
            vendas e cartões de vale alimentação — com rastreabilidade
            completa e auditoria em cada etapa.
          </BrandBody>

          {/* Métricas de credibilidade */}
          <StatRow>
            <Stat>
              <StatValue>100%</StatValue>
              <StatLabel>Auditado</StatLabel>
            </Stat>
            <Stat>
              <StatValue>JWT</StatValue>
              <StatLabel>Segurança</StatLabel>
            </Stat>
            <Stat>
              <StatValue>3 níveis</StatValue>
              <StatLabel>de acesso</StatLabel>
            </Stat>
          </StatRow>

          {/* Botão de acesso — VISÍVEL APENAS EM MOBILE */}
          <MobileLoginButton type="button" onClick={openForm}>
            Acessar o sistema
            <ArrowRight size={17} />
          </MobileLoginButton>
        </BrandContent>

        <BrandFooter>
          © {new Date().getFullYear()} BG Representações — Uso interno exclusivo.
        </BrandFooter>
      </BrandPanel>

      {/* ── Overlay mobile (fundo escuro atrás do sheet) ── */}
      <MobileOverlay $open={formOpen} onClick={closeForm} />

      {/* ── LADO B: Formulário (desktop fixo | mobile = sheet deslizante) ── */}
      <FormPanel $open={formOpen}>
        {/* Handle visual do sheet (mobile) */}
        <SheetHandle />

        {/* Botão fechar (mobile only) */}
        <FormCloseButton type="button" onClick={closeForm} aria-label="Fechar">
          <X size={18} />
        </FormCloseButton>

        <FormInner>
          <FormHeader>
            <FormEyebrow>Área restrita</FormEyebrow>
            <FormTitle>Bem-vindo de volta</FormTitle>
            <FormSubtitle>
              Use as credenciais fornecidas pelo administrador para acessar sua conta.
            </FormSubtitle>
          </FormHeader>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FieldGroup>

              {/* E-mail */}
              <Field>
                <Label htmlFor="email">E-mail</Label>
                <InputWrapper>
                  <StyledInput
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    autoComplete="email"
                    $hasError={!!errors.email}
                    disabled={isLoading}
                    {...register('email', {
                      required: 'O e-mail é obrigatório.',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Informe um e-mail válido.',
                      },
                    })}
                  />
                </InputWrapper>
                {errors.email && (
                  <FieldError>
                    <AlertCircle size={12} />
                    {errors.email.message}
                  </FieldError>
                )}
              </Field>

              {/* Senha */}
              <Field>
                <Label htmlFor="password">Senha</Label>
                <InputWrapper>
                  <StyledInput
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    $hasError={!!errors.password}
                    $hasToggle
                    disabled={isLoading}
                    {...register('password', {
                      required: 'A senha é obrigatória.',
                      minLength: {
                        value: 6,
                        message: 'Mínimo 6 caracteres.',
                      },
                    })}
                  />
                  <ToggleButton
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </ToggleButton>
                </InputWrapper>
                {errors.password && (
                  <FieldError>
                    <AlertCircle size={12} />
                    {errors.password.message}
                  </FieldError>
                )}
              </Field>

            </FieldGroup>

            <SubmitButton
              type="submit"
              disabled={isLoading}
              $isLoading={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner />
                  Carregando…
                </>
              ) : (
                <>
                  <LogIn size={17} />
                  Entrar
                </>
              )}
            </SubmitButton>
          </form>

          <FormDivider />

          <FormFooter>
            Problemas com o acesso? Fale com o administrador do sistema.
          </FormFooter>
        </FormInner>
      </FormPanel>

    </PageWrapper>
  );
}
