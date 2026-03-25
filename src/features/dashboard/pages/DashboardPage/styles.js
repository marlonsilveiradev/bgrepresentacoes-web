// src/features/dashboard/pages/DashboardPage/styles.js
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  animation: ${fadeIn} 0.3s ease-out;
  max-width: 1400px;
  margin: 0 auto;
`;

export const WelcomeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const WelcomeGreeting = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text?.primary || '#231b15'};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const WelcomeDate = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text?.secondary || '#5e4d42'};
  text-transform: capitalize;
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const MetricCard = styled.div`
  background: ${({ theme }) => theme.surface?.card || '#ffffff'};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: ${({ theme }) => theme.shadows?.sm || '0 1px 2px rgba(0,0,0,0.05)'};
  border: 1px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows?.md || '0 4px 6px rgba(0,0,0,0.1)'};
  }
`;

export const MetricIcon = styled.div`
  width: 52px;
  height: 52px;
  background: ${({ $color }) => `${$color}15`};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color};
`;

export const MetricInfo = styled.div`
  flex: 1;
`;

export const MetricValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text?.primary || '#231b15'};
  line-height: 1.2;
  margin-bottom: 4px;
`;

export const MetricLabel = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text?.secondary || '#5e4d42'};
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ChartCard = styled.div`
  background: ${({ theme }) => theme.surface?.card || '#ffffff'};
  border-radius: 16px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
  box-shadow: ${({ theme }) => theme.shadows?.sm || '0 1px 2px rgba(0,0,0,0.05)'};
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text?.primary || '#231b15'};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  background: ${({ theme }) => theme.surface?.page || '#faf7f5'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors?.neutral?.[100] || '#f2ece6'};
    transform: translateX(4px);
  }
`;

export const ActivityIcon = styled.div`
  width: 36px;
  height: 36px;
  background: ${({ $color }) => `${$color}15`};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color};
  flex-shrink: 0;
`;

export const ActivityContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ActivityTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text?.primary || '#231b15'};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ActivityDate = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.text?.muted || '#96806e'};
`;

export const EmptyActivity = styled.div`
  text-align: center;
  padding: 32px;
  color: ${({ theme }) => theme.text?.muted || '#96806e'};
  font-size: 14px;
`;

// CORREÇÃO: Usando fallbacks seguros para evitar erro de undefined
export const StatusBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({ $status, theme }) => {
    switch ($status) {
      case 'approved': return theme.success?.light || '#dcfce7';
      case 'analysis': return theme.info?.light || '#dbeafe';
      default: return theme.warning?.light || '#fef3c7';
    }
  }};
  color: ${({ $status, theme }) => {
    switch ($status) {
      case 'approved': return theme.success?.dark || '#166534';
      case 'analysis': return theme.info?.dark || '#1e40af';
      default: return theme.warning?.dark || '#92400e';
    }
  }};
  white-space: nowrap;
  flex-shrink: 0;
`;

export const ProgressSection = styled.div`
  margin-top: 8px;
`;

export const ProgressTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text?.secondary || '#5e4d42'};
  margin-bottom: 12px;
`;

export const ProgressBarWrapper = styled.div`
  background: ${({ theme }) => theme.colors?.neutral?.[100] || '#f2ece6'};
  border-radius: 8px;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  height: 8px;
  width: ${({ $percentage }) => $percentage}%;
  background: ${({ $color }) => $color};
  border-radius: 8px;
  transition: width 0.3s ease;
`;

export const ProgressStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
`;

export const ProgressStat = styled.div`
  text-align: center;
  flex: 1;
`;

export const ProgressStatValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text?.primary || '#231b15'};
`;

export const ProgressStatLabel = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.text?.muted || '#96806e'};
  margin-top: 4px;
`;

export const QuickActions = styled.div`
  background: linear-gradient(
    135deg, 
    ${({ theme }) => theme.colors?.neutral?.[800] || '#3d3028'} 0%, 
    ${({ theme }) => theme.colors?.neutral?.[900] || '#231b15'} 100%
  );
  border-radius: 16px;
  padding: 20px;
  color: white;
`;

export const QuickActionsTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors?.neutral?.[200] || '#e4d9cf'};
`;

export const ActionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors?.neutral?.[200] || '#e4d9cf'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(4px);
    color: white;
  }
`;