// ============================================================
// src/features/auth/pages/ChangePasswordPage/index.jsx
// ============================================================
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShieldCheck } from 'lucide-react';

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

export default function ChangePasswordPage() {
  const { changePassword, user } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const newPassword = watch('newPassword');

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await changePassword(
        data.currentPassword,
        data.newPassword,
        data.confirmPassword
      );

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

          <Field>
            <Label>Senha atual</Label>
            <Input
              type="password"
              {...register('currentPassword', { required: true })}
            />
            {errors.currentPassword && <ErrorText>Obrigatório</ErrorText>}
          </Field>

          <Field>
            <Label>Nova senha</Label>
            <Input
              type="password"
              {...register('newPassword', { required: true })}
            />
            {errors.newPassword && <ErrorText>Obrigatório</ErrorText>}
          </Field>

          <Field>
            <Label>Confirmar senha</Label>
            <Input
              type="password"
              {...register('confirmPassword', {
                required: true,
                validate: (v) => v === newPassword || 'Senhas não coincidem',
              })}
            />
            {errors.confirmPassword && (
              <ErrorText>{errors.confirmPassword.message}</ErrorText>
            )}
          </Field>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Salvando...' : 'Alterar senha'}
          </Button>

        </Form>
      </Card>
    </PageWrapper>
  );
}