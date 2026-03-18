// ============================================================
// src/features/auth/pages/LoginPage/index.jsx
// Lógica e estrutura — estilos em ./styles.js
// ============================================================
import { useEffect, useState } from 'react';
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
  MobileAccessButton,
  FormPanel,
  FormInner,
  MobileOverlay,
  OverlayHeader,
  OverlayBrand,
  OverlayLogoMark,
  OverlayLogoName,
  CloseButton,
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
} from './styles';

// ── FormContent: formulário compartilhado entre desktop e overlay mobile ──────
// Extraído como componente interno para não duplicar JSX
function FormContent({ onSubmitSuccess }) {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading]       = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: '', password: '' } });

  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const { mustChangePassword } = await login(email, password);
      // Delega o redirecionamento ao componente pai (que controla o overlay)
      onSubmitSuccess(mustChangePassword);
    } catch (error) {
      toast.error(error.message, { toastId: 'login-error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <FormHeader>
        <FormEyebrow>Área restrita</FormEyebrow>
        <FormTitle>Bem-vindo de volta</FormTitle>
        <FormSubtitle>
          Use as credenciais fornecidas pelo administrador para acessar sua conta.
        </FormSubtitle>
      </FormHeader>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FieldGroup>

          {/* Campo: E-mail */}
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

          {/* Campo: Senha */}
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
    </>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function LoginPage() {
  const navigate = useNavigate();

  // Controla visibilidade do overlay fullscreen (mobile)
  const [overlayOpen, setOverlayOpen] = useState(false);

  // Bloqueia scroll do body enquanto o overlay estiver aberto
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [overlayOpen]);

  // Teclado: ESC fecha o overlay
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOverlayOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Callback chamado pelo FormContent após login bem-sucedido
  const handleLoginSuccess = (mustChangePassword) => {
    if (mustChangePassword) {
      // Fecha o overlay antes de navegar (evita flash da tela de fundo)
      setOverlayOpen(false);
      // Pequeno delay para a transição do overlay completar antes do navigate
      setTimeout(() => navigate('/alterar-senha', { replace: true }), 180);
    } else {
      navigate('/dashboard', { replace: true });
    }
  };

  return (
    <PageWrapper>

      {/* ── LADO A: Landing / Marca ── */}
      <BrandPanel>
        <BrandContent>
          <BrandTop>
            <LogoMark>BG</LogoMark>
            <LogoName>BG Representações</LogoName>
          </BrandTop>

          <BrandHeadline>
            Gestão de <em>benefícios</em> com{' '}
            precisão corporativa.
          </BrandHeadline>

          <BrandBody>
            Plataforma integrada para gerenciamento de clientes,
            vendas e cartões de vale alimentação — com rastreabilidade
            completa e auditoria em cada etapa.
          </BrandBody>

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

          {/*
            Botão "Acessar Sistema" — VISÍVEL APENAS EM MOBILE
            No desktop este botão fica oculto (display: none via CSS)
          */}
          <MobileAccessButton
            type="button"
            onClick={() => setOverlayOpen(true)}
            aria-label="Abrir formulário de login"
          >
            Acessar Sistema
            <ArrowRight size={17} />
          </MobileAccessButton>
        </BrandContent>

        <BrandFooter>
          © {new Date().getFullYear()} BG Representações — Uso interno exclusivo.
        </BrandFooter>
      </BrandPanel>

      {/* ── LADO B: Formulário (desktop — coluna fixa) ── */}
      <FormPanel>
        <FormInner>
          <FormContent onSubmitSuccess={handleLoginSuccess} />
        </FormInner>
      </FormPanel>

      {/*
        ── Overlay fullscreen (mobile apenas) ──
        Ativado pelo clique em MobileAccessButton.
        Cobre 100% da viewport com fundo neutral[50].
        $open controla opacity + visibility via CSS no styles.js.
      */}
      <MobileOverlay
        $open={overlayOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Formulário de login"
      >
        {/* Cabeçalho: logo + botão X */}
        <OverlayHeader>
          <OverlayBrand>
            <OverlayLogoMark>BG</OverlayLogoMark>
            <OverlayLogoName>BG Representações</OverlayLogoName>
          </OverlayBrand>

          <CloseButton
            type="button"
            onClick={() => setOverlayOpen(false)}
            aria-label="Fechar formulário"
          >
            <X size={18} />
          </CloseButton>
        </OverlayHeader>

        {/* Formulário idêntico ao do desktop */}
        <FormContent onSubmitSuccess={handleLoginSuccess} />
      </MobileOverlay>

    </PageWrapper>
  );
}
