// src/features/reports/pages/ReportsPage/styles.js
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  animation: ${fadeIn} 0.3s ease-out;
  max-width: 1400px;
  margin: 0 auto;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 28px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text?.primary || '#231b15'};
`;

export const PageSubtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text?.secondary || '#5e4d42'};
`;

export const FilterCard = styled.div`
  background: ${({ theme }) => theme.surface?.card || '#ffffff'};
  border: 1px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: ${({ theme }) => theme.shadows?.sm || '0 1px 2px rgba(0,0,0,0.05)'};
`;

export const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  align-items: end;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FilterField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FilterLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text?.secondary || '#5e4d42'};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const FilterSelect = styled.select`
  height: 40px;
  padding: 0 12px;
  border: 1.5px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
  border-radius: 8px;
  font-size: 13px;
  font-family: inherit;
  color: ${({ theme }) => theme.text?.primary || '#231b15'};
  background: ${({ theme }) => theme.surface?.page || '#faf7f5'};
  cursor: pointer;
  transition: border-color 0.15s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors?.primary?.[500] || '#B45A14'};
  }
`;

export const FilterActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
`;

export const SearchButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  background: ${({ theme }) => theme.colors?.primary?.[600] || '#B45A14'};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s;

  &:hover { background: ${({ theme }) => theme.colors?.primary?.[700] || '#9a4d11'}; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

export const ClearButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 14px;
  background: transparent;
  color: ${({ theme }) => theme.text?.secondary || '#5e4d42'};
  border: 1.5px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
  border-radius: 8px;
  font-size: 13px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${({ theme }) => theme.surface?.page || '#faf7f5'};
    color: ${({ theme }) => theme.text?.primary || '#231b15'};
  }
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px)  { grid-template-columns: 1fr; }
`;

export const SummaryCard = styled.div`
  background: ${({ theme }) => theme.surface?.card || '#ffffff'};
  border: 1px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
  border-radius: 14px;
  padding: 18px 20px;
  box-shadow: ${({ theme }) => theme.shadows?.sm || '0 1px 2px rgba(0,0,0,0.05)'};
`;

export const SummaryLabel = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text?.secondary || '#5e4d42'};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
`;

export const SummaryValue = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.text?.primary || '#231b15'};
  line-height: 1.2;
`;

export const SummaryIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ $color }) => `${$color}15`};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color};
  margin-bottom: 12px;
`;

export const TableCard = styled.div`
  background: ${({ theme }) => theme.surface?.card || '#ffffff'};
  border: 1px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows?.sm || '0 1px 2px rgba(0,0,0,0.05)'};
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background: ${({ theme }) => theme.surface?.page || '#faf7f5'};
  border-bottom: 1px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
`;

export const Th = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.text?.secondary || '#5e4d42'};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
  transition: background 0.15s;
  cursor: pointer;

  &:last-child { border-bottom: none; }
  &:hover { background: ${({ theme }) => theme.surface?.page || '#faf7f5'}; }
`;

export const Td = styled.td`
  padding: 14px 16px;
  font-size: 13px;
  color: ${({ theme }) => theme.text?.primary || '#231b15'};
`;

export const TdMuted = styled.td`
  padding: 14px 16px;
  font-size: 13px;
  color: ${({ theme }) => theme.text?.secondary || '#5e4d42'};
`;

export const StatusBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  white-space: nowrap;
  background: ${({ $status }) => {
    switch ($status) {
      case 'approved': return '#dcfce7';
      case 'analysis': return '#dbeafe';
      default:         return '#fef3c7';
    }
  }};
  color: ${({ $status }) => {
    switch ($status) {
      case 'approved': return '#166534';
      case 'analysis': return '#1e40af';
      default:         return '#92400e';
    }
  }};
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  gap: 12px;
`;

export const EmptyIcon = styled.div`
  color: ${({ theme }) => theme.text?.muted || '#96806e'};
  opacity: 0.5;
`;

export const EmptyTitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text?.secondary || '#5e4d42'};
`;

export const EmptySubtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text?.muted || '#96806e'};
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-top: 1px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
  background: ${({ theme }) => theme.surface?.page || '#faf7f5'};

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const PaginationInfo = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.text?.secondary || '#5e4d42'};
`;

export const PaginationButtons = styled.div`
  display: flex;
  gap: 4px;
`;

export const PageButton = styled.button`
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border-radius: 6px;
  border: 1.5px solid ${({ $active, theme }) =>
    $active ? (theme.colors?.primary?.[600] || '#B45A14') : (theme.border?.default || '#e4d9cf')};
  background: ${({ $active, theme }) =>
    $active ? (theme.colors?.primary?.[600] || '#B45A14') : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? 'white' : (theme.text?.secondary || '#5e4d42')};
  font-size: 13px;
  font-weight: ${({ $active }) => $active ? 600 : 400};
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors?.primary?.[600] || '#B45A14'};
    color: ${({ theme }) => theme.colors?.primary?.[600] || '#B45A14'};
  }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

export const SkeletonBar = styled.div`
  height: ${({ $h }) => $h || '14px'};
  width: ${({ $w }) => $w || '100%'};
  background: linear-gradient(90deg, #f0e8e0 25%, #e8ddd5 50%, #f0e8e0 75%);
  background-size: 200% 100%;
  border-radius: 6px;
  animation: shimmer 1.4s infinite;

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

export const SkeletonRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.border?.default || '#e4d9cf'};
`;

export const SkeletonCell = styled.td`
  padding: 14px 16px;
`;