// ============================================================
// src/features/auth/pages/ChangePasswordPage/styles.js
// ============================================================
import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.surface.page};
`;

export const Card = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 32px;
  background: ${({ theme }) => theme.surface.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const IconBadge = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h1`
  font-size: 22px;
  text-align: center;
  margin-bottom: 8px;
`;

export const CardSubtitle = styled.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.text.secondary};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 13px;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: red;
  margin-top: 4px;
`;

export const Button = styled.button`
  height: 42px;
  background: ${({ theme }) => theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
`;