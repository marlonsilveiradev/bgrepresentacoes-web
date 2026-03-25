// src/features/dashboard/pages/DashboardPage/index.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, startOfMonth, endOfMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  Users, TrendingUp, Clock, UserPlus,
  DollarSign, Calendar, Activity,
} from 'lucide-react';

import api from '../../../../lib/api';
import { useAuth } from '../../../../contexts/AuthContext';
import * as S from './styles';

const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value || 0);
};

const formatDate = (date) => {
  if (!date) return '';
  return format(new Date(date), "dd 'de' MMMM", { locale: ptBR });
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Bom dia';
  if (hour < 18) return 'Boa tarde';
  return 'Boa noite';
};

const STATUS_CONFIG = {
  pending: { label: 'Pendente', color: '#d97706' },
  analysis: { label: 'Em análise', color: '#2563eb' },
  approved: { label: 'Aprovado', color: '#059669' },
  cancelled: { label: 'Cancelado', color: '#dc2626' },
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, isAdmin, isUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    totalClients: 0,
    totalSales: 0,
    clientsInAnalysis: 0,
    approvalRate: 0,
  });
  const [recentClients, setRecentClients] = useState([]);
  const [recentSales, setRecentSales] = useState([]);
  const [statusDistribution, setStatusDistribution] = useState({
    pending: 0,
    analysis: 0,
    approved: 0,
  });

  const greeting = getGreeting();
  const currentDate = format(new Date(), "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        const startDate = format(startOfMonth(new Date()), 'yyyy-MM-dd');
        const endDate = format(endOfMonth(new Date()), 'yyyy-MM-dd');

        const results = await Promise.allSettled([
          api.get('/clients', { params: { limit: '100' } }),
          api.get('/reports/sales', { params: { date_start: startDate, date_end: endDate } }),
          api.get('/clients', { params: { limit: '5' } }),
          // CORREÇÃO: Enviando como String para evitar o Erro 422 do backend Strict Mode
          api.get('/sales', { params: { limit: '10' } }), 
        ]);

        console.log('Resultado bruto da Promise (Vendas):', results[3]);

        let allClients = [];
        if (results[0].status === 'fulfilled') {
          allClients = results[0].value.data?.data || [];
        }

        let totalSalesValue = 0;
        if (results[1].status === 'fulfilled') {
          totalSalesValue = results[1].value.data?.summary?.total_value || 0;
        }

        if (results[2].status === 'fulfilled') {
          setRecentClients(results[2].value.data?.data || []);
        }

        if (results[3].status === 'fulfilled') {
          console.log('Dados que chegaram no data.data:', results[3].value.data)
          const salesData = results[3].value.data?.data || [];
          console.log('Array final de vendas para o estado:', salesData);
          setRecentSales(results[3].value.data?.data || []);
        }

        const totalClients = allClients.length;
        const clientsInAnalysis = allClients.filter(c => c.overall_status === 'analysis').length;
        const approvedClients = allClients.filter(c => c.overall_status === 'approved').length;
        const approvalRate = totalClients > 0 ? (approvedClients / totalClients) * 100 : 0;

        setStatusDistribution({
          pending: allClients.filter(c => c.overall_status === 'pending').length,
          analysis: clientsInAnalysis,
          approved: approvedClients,
        });

        setMetrics({
          totalClients,
          totalSales: totalSalesValue,
          clientsInAnalysis,
          approvalRate: Math.round(approvalRate),
        });

      } catch (error) {
        console.error('Erro ao carregar dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
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

      <S.MetricsGrid>
        <S.MetricCard>
          <S.MetricIcon $color="#B45A14"><Users size={24} /></S.MetricIcon>
          <S.MetricInfo>
            <S.MetricValue>{metrics.totalClients}</S.MetricValue>
            <S.MetricLabel>Total de Clientes</S.MetricLabel>
          </S.MetricInfo>
        </S.MetricCard>

        <S.MetricCard>
          <S.MetricIcon $color="#059669"><DollarSign size={24} /></S.MetricIcon>
          <S.MetricInfo>
            <S.MetricValue>{formatCurrency(metrics.totalSales)}</S.MetricValue>
            <S.MetricLabel>Vendas no Mês</S.MetricLabel>
          </S.MetricInfo>
        </S.MetricCard>

        <S.MetricCard>
          <S.MetricIcon $color="#2563eb"><Clock size={24} /></S.MetricIcon>
          <S.MetricInfo>
            <S.MetricValue>{metrics.clientsInAnalysis}</S.MetricValue>
            <S.MetricLabel>Em Análise</S.MetricLabel>
          </S.MetricInfo>
        </S.MetricCard>

        <S.MetricCard>
          <S.MetricIcon $color="#8b5cf6"><TrendingUp size={24} /></S.MetricIcon>
          <S.MetricInfo>
            <S.MetricValue>{metrics.approvalRate}%</S.MetricValue>
            <S.MetricLabel>Taxa de Aprovação</S.MetricLabel>
          </S.MetricInfo>
        </S.MetricCard>
      </S.MetricsGrid>

      <S.TwoColumnGrid>
        <S.LeftColumn>
          <S.ChartCard>
            <S.CardTitle>Distribuição de Clientes</S.CardTitle>
            <S.ProgressSection>
              {Object.entries(statusDistribution).map(([status, count]) => {
                const total = metrics.totalClients || 1;
                const percentage = (count / total) * 100;
                const config = STATUS_CONFIG[status];
                return (
                  <div key={status} style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '12px', color: '#7a6455' }}>{config?.label || status}</span>
                      <span style={{ fontSize: '12px', fontWeight: 500, color: '#5e4d42' }}>{count} ({Math.round(percentage)}%)</span>
                    </div>
                    <S.ProgressBarWrapper>
                      <S.ProgressBar $percentage={percentage} $color={config?.color} />
                    </S.ProgressBarWrapper>
                  </div>
                );
              })}
              <S.ProgressStats>
                <S.ProgressStat>
                  <S.ProgressStatValue>{metrics.totalClients}</S.ProgressStatValue>
                  <S.ProgressStatLabel>Total</S.ProgressStatLabel>
                </S.ProgressStat>
                <S.ProgressStat>
                  <S.ProgressStatValue>{metrics.approvalRate}%</S.ProgressStatValue>
                  <S.ProgressStatLabel>Aprovados</S.ProgressStatLabel>
                </S.ProgressStat>
              </S.ProgressStats>
            </S.ProgressSection>
          </S.ChartCard>

          <S.ChartCard>
            <S.CardTitle>Últimos Clientes</S.CardTitle>
            {recentClients.length > 0 ? (
              <S.ActivityList>
                {recentClients.map((client) => (
                  <S.ActivityItem key={client.id} onClick={() => navigate(`/clientes/${client.id}`)}>
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
            ) : <S.EmptyActivity>Nenhum cliente cadastrado.</S.EmptyActivity>}
          </S.ChartCard>
        </S.LeftColumn>

        <S.RightColumn>
          <S.ChartCard>
            <S.CardTitle>Últimas Vendas</S.CardTitle>
            {recentSales.length > 0 ? (
              <S.ActivityList>
                {recentSales.map((sale) => (
                  <S.ActivityItem key={sale.id} onClick={() => navigate(`/clientes/${sale.client_id}`)}>
                    <S.ActivityIcon $color="#059669"><TrendingUp size={16} /></S.ActivityIcon>
                    <S.ActivityContent>
                      <S.ActivityTitle>{sale.client?.corporate_name || 'Venda'} - {formatCurrency(sale.total_value)}</S.ActivityTitle>
                      <S.ActivityDate>{sale.plan_name || 'Serviço'} • {formatDate(sale.createdAt)}</S.ActivityDate>
                    </S.ActivityContent>
                    <S.StatusBadge $status={sale.status}>
                      {STATUS_CONFIG[sale.status]?.label || sale.status}
                    </S.StatusBadge>
                  </S.ActivityItem>
                ))}
              </S.ActivityList>
            ) : <S.EmptyActivity>Nenhuma venda registrada.</S.EmptyActivity>}
          </S.ChartCard>

          <S.QuickActions>
            <S.QuickActionsTitle>Ações Rápidas</S.QuickActionsTitle>
            <S.ActionsGrid>
              {(isAdmin || isUser) && (
                <>
                  <S.ActionButton onClick={() => navigate('/onboarding')}><UserPlus size={18} /> Novo Cliente</S.ActionButton>
                  <S.ActionButton onClick={() => navigate('/clientes')}><Users size={18} /> Ver Clientes</S.ActionButton>
                </>
              )}
              {isAdmin && <S.ActionButton onClick={() => navigate('/relatorios')}><Activity size={18} /> Relatórios</S.ActionButton>}
              <S.ActionButton onClick={() => navigate('/perfil')}><Calendar size={18} /> Meu Perfil</S.ActionButton>
            </S.ActionsGrid>
          </S.QuickActions>
        </S.RightColumn>
      </S.TwoColumnGrid>
    </S.Container>
  );
}