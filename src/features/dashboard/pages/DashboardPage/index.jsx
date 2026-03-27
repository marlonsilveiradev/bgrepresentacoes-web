// src/features/dashboard/pages/DashboardPage/index.jsx
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Users, UserPlus, Activity, Calendar } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

import api from '../../../../lib/api';
import { useAuth } from '../../../../contexts/AuthContext';
import * as S from './styles';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Bom dia';
  if (hour < 18) return 'Boa tarde';
  return 'Boa noite';
};

const STATUS_CONFIG = {
  pending:  { label: 'Pendente',    color: '#d97706' },
  analysis: { label: 'Em análise',  color: '#2563eb' },
  approved: { label: 'Aprovado',    color: '#059669' },
  cancelled:{ label: 'Cancelado',   color: '#dc2626' },
};

const formatDate = (date) => {
  if (!date) return '';
  return format(new Date(date), "dd 'de' MMMM", { locale: ptBR });
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, isAdmin, isUser } = useAuth();

  const greeting = getGreeting();
  const currentDate = format(new Date(), "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  // Clientes recentes
  const { data: clientsData, isLoading: loadingClients } = useQuery({
    queryKey: ['dashboard-recent-clients'],
    queryFn: async () => {
      const { data } = await api.get('/clients', { params: { limit: '5' } });
      return data.data ?? [];
    },
    staleTime: 1000 * 60 * 2, // 2 minutos de cache
  });

  // Vendas recentes
  const { data: salesData, isLoading: loadingSales } = useQuery({
    queryKey: ['dashboard-recent-sales'],
    queryFn: async () => {
      
      const { data } = await api.get('/sales');
      return data.data ?? [];
    },
    staleTime: 1000 * 60 * 2,
  });

  const recentClients = clientsData ?? [];
  const recentSales   = salesData   ?? [];
  const isLoading     = loadingClients || loadingSales;

  if (isLoading) {
    return (
      <S.Container>
        <S.WelcomeSection>
          <S.WelcomeGreeting>Carregando dashboard...</S.WelcomeGreeting>
        </S.WelcomeSection>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.WelcomeSection>
        <div>
          <S.WelcomeGreeting>
            {greeting}, {user?.name?.split(' ')[0] || 'Usuário'}!
          </S.WelcomeGreeting>
          <S.WelcomeDate>{currentDate}</S.WelcomeDate>
        </div>
      </S.WelcomeSection>

      <S.TwoColumnGrid>
        <S.LeftColumn>
          <S.ChartCard>
            <S.CardTitle>Últimos Clientes</S.CardTitle>
            {recentClients.length > 0 ? (
              <S.ActivityList>
                {recentClients.map((client) => (
                  <S.ActivityItem
                    key={client.id}
                    onClick={() => navigate(`/clientes/${client.id}`)}
                  >
                    <S.ActivityIcon $color="#B45A14"><UserPlus size={16} /></S.ActivityIcon>
                    <S.ActivityContent>
                      <S.ActivityTitle>{client.corporate_name}</S.ActivityTitle>
                      <S.ActivityDate>Cadastrado em {formatDate(client.createdAt)}</S.ActivityDate>
                    </S.ActivityContent>
                    <S.StatusBadge $status={client.overall_status}>
                      {STATUS_CONFIG[client.overall_status]?.label || client.overall_status}
                    </S.StatusBadge>
                  </S.ActivityItem>
                ))}
              </S.ActivityList>
            ) : (
              <S.EmptyActivity>Nenhum cliente cadastrado.</S.EmptyActivity>
            )}
          </S.ChartCard>
        </S.LeftColumn>

        <S.RightColumn>
          <S.ChartCard>
            <S.CardTitle>Últimas Vendas</S.CardTitle>
            {recentSales.length > 0 ? (
              <S.ActivityList>
                {recentSales.map((sale) => (
                  <S.ActivityItem
                    key={sale.id}
                    onClick={() => navigate(`/clientes/${sale.client_id}`)}
                  >
                    <S.ActivityIcon $color="#059669"><Activity size={16} /></S.ActivityIcon>
                    <S.ActivityContent>
                      <S.ActivityTitle>
                        {sale.client?.corporate_name || 'Venda'}
                      </S.ActivityTitle>
                      <S.ActivityDate>
                        {sale.plan_name || 'Serviço'} • {formatDate(sale.createdAt)}
                      </S.ActivityDate>
                    </S.ActivityContent>
                    <S.StatusBadge $status={sale.status}>
                      {STATUS_CONFIG[sale.status]?.label || sale.status}
                    </S.StatusBadge>
                  </S.ActivityItem>
                ))}
              </S.ActivityList>
            ) : (
              <S.EmptyActivity>Nenhuma venda registrada.</S.EmptyActivity>
            )}
          </S.ChartCard>

          <S.QuickActions>
            <S.QuickActionsTitle>Ações Rápidas</S.QuickActionsTitle>
            <S.ActionsGrid>
              {(isAdmin || isUser) && (
                <>
                  <S.ActionButton onClick={() => navigate('/onboarding')}>
                    <UserPlus size={18} /> Novo Cliente
                  </S.ActionButton>
                  <S.ActionButton onClick={() => navigate('/clientes')}>
                    <Users size={18} /> Ver Clientes
                  </S.ActionButton>
                </>
              )}
              {isAdmin && (
                <S.ActionButton onClick={() => navigate('/relatorios')}>
                  <Activity size={18} /> Relatórios
                </S.ActionButton>
              )}
              <S.ActionButton onClick={() => navigate('/perfil')}>
                <Calendar size={18} /> Meu Perfil
              </S.ActionButton>
            </S.ActionsGrid>
          </S.QuickActions>
        </S.RightColumn>
      </S.TwoColumnGrid>
    </S.Container>
  );
}