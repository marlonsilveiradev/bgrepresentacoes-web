import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import * as S from './styles';

const ForbiddenPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Redireciona para o dashboard ou para a home
    navigate('/dashboard');
  };

  return (
    <S.Container>
      <S.ContentCard>
        <S.IconContainer>
          <ShieldAlert size={44} />
        </S.IconContainer>

        <S.Title>Acesso Negado</S.Title>

        <S.Message>
          Você não possui as permissões necessárias para visualizar esta página. 
          Se você acredita que isso é um erro, entre em contato com o suporte técnico 
          ou com o seu administrador.
        </S.Message>

        <S.BackButton onClick={handleBack}>
          <ArrowLeft size={18} />
          Voltar ao Dashboard
        </S.BackButton>
      </S.ContentCard>
    </S.Container>
  );
};

export default ForbiddenPage;