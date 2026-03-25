// ============================================================
// src/features/auth/pages/ChangePasswordPage/index.jsx
// ============================================================
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShieldCheck, Eye, EyeOff } from 'lucide-react';

import { useAuth } from '../../../../contexts/AuthContext';
import {
  PageWrapper,
  Card,
  IconBadge,
  CardTitle,
  CardSubtitle,
  Form,
  Field,
  Label,
  Input,
  ErrorText,
  Button,
} from './styles';

// ── Regras de senha — idênticas ao backend (authValidators.js) ─────────────────
// Backend exige: mínimo 8 chars, maiúscula, minúscula, número e caractere especial
const PASSWORD_POLICY = yup
  .string()
  .required('Campo obrigatório.')
  .min(8, 'A senha deve ter pelo menos 8 caracteres.')
  .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.')
  .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula.')
  .matches(/[0-9]/, 'A senha deve conter pelo menos um número.')
  .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, 'A senha deve conter pelo menos um caractere especial.');

const schema = yup.object({
  currentPassword: yup.string().required('Informe a senha atual.'),
  newPassword:     PASSWORD_POLICY,
  confirmPassword: yup
    .string()
    .required('Confirme a nova senha.')
    .oneOf([yup.ref('newPassword')], 'As senhas não coincidem.'),
});

// ── Requisitos visuais de senha ────────────────────────────────────────────────
const REQUIREMENTS = [
  { label: 'Mínimo 8 caracteres',        test: (v) => v.length >= 8 },
  { label: 'Letra maiúscula (A–Z)',        test: (v) => /[A-Z]/.test(v) },
  { label: 'Letra minúscula (a–z)',        test: (v) => /[a-z]/.test(v) },
  { label: 'Número (0–9)',                 test: (v) => /[0-9]/.test(v) },
  { label: 'Caractere especial (!@#$...)', test: (v) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(v) },
];

// ── Componente de checklist de requisitos ─────────────────────────────────────
function PasswordChecklist({ password }) {
  if (!password) return null;
  return (
    <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {REQUIREMENTS.map((req) => {
        const ok = req.test(password);
        return (
          <span
            key={req.label}
            style={{
              fontSize: '12px',
              color: ok ? '#059669' : '#b45309',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {ok ? '✓' : '○'} {req.label}
          </span>
        );
      })}
    </div>
  );
}

// ── Componente principal ───────────────────────────────────────────────────────
export default function ChangePasswordPage() {
  const { changePassword, user } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading]             = useState(false);
  const [showCurrent, setShowCurrent]         = useState(false);
  const [showNew, setShowNew]                 = useState(false);
  const [showConfirm, setShowConfirm]         = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Observa o campo da nova senha para o checklist em tempo real
  const newPasswordValue = watch('newPassword') ?? '';

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await changePassword(data.currentPassword, data.newPassword, data.confirmPassword);
      navigate('/dashboard', { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Card>
        <IconBadge>
          <ShieldCheck size={28} />
        </IconBadge>

        <CardTitle>Alterar senha</CardTitle>

        <CardSubtitle>
          {user?.name ? `Olá, ${user.name.split(' ')[0]}. ` : ''}
          Você precisa definir uma nova senha para continuar.
        </CardSubtitle>

        <Form onSubmit={handleSubmit(onSubmit)}>

          {/* ── Senha atual ── */}
          <Field>
            <Label>Senha atual</Label>
            <div style={{ position: 'relative' }}>
              <Input
                type={showCurrent ? 'text' : 'password'}
                autoComplete="current-password"
                {...register('currentPassword')}
                style={{ paddingRight: '40px' }}
              />
              <button
                type="button"
                onClick={() => setShowCurrent((v) => !v)}
                aria-label={showCurrent ? 'Ocultar senha' : 'Mostrar senha'}
                style={{
                  position: 'absolute', right: '10px', top: '50%',
                  transform: 'translateY(-50%)', background: 'none',
                  border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 0,
                }}
              >
                {showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.currentPassword && <ErrorText>{errors.currentPassword.message}</ErrorText>}
          </Field>

          {/* ── Nova senha ── */}
          <Field>
            <Label>Nova senha</Label>
            <div style={{ position: 'relative' }}>
              <Input
                type={showNew ? 'text' : 'password'}
                autoComplete="new-password"
                {...register('newPassword')}
                style={{ paddingRight: '40px' }}
              />
              <button
                type="button"
                onClick={() => setShowNew((v) => !v)}
                aria-label={showNew ? 'Ocultar senha' : 'Mostrar senha'}
                style={{
                  position: 'absolute', right: '10px', top: '50%',
                  transform: 'translateY(-50%)', background: 'none',
                  border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 0,
                }}
              >
                {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.newPassword && <ErrorText>{errors.newPassword.message}</ErrorText>}
            {/* Checklist visual — aparece enquanto o usuário digita */}
            <PasswordChecklist password={newPasswordValue} />
          </Field>

          {/* ── Confirmar nova senha ── */}
          <Field>
            <Label>Confirmar nova senha</Label>
            <div style={{ position: 'relative' }}>
              <Input
                type={showConfirm ? 'text' : 'password'}
                autoComplete="new-password"
                {...register('confirmPassword')}
                style={{ paddingRight: '40px' }}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                aria-label={showConfirm ? 'Ocultar senha' : 'Mostrar senha'}
                style={{
                  position: 'absolute', right: '10px', top: '50%',
                  transform: 'translateY(-50%)', background: 'none',
                  border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 0,
                }}
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
          </Field>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Salvando...' : 'Alterar senha'}
          </Button>

        </Form>
      </Card>
    </PageWrapper>
  );
}