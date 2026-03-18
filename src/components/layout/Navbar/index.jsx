// ============================================================
// src/components/layout/Navbar/index.jsx
// ============================================================
import { useLocation } from 'react-router-dom';
import { LogOut, Menu } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import {
  NavbarWrapper,
  NavLeft,
  HamburgerButton,
  PageTitle,
  NavRight,
  UserGreeting,
  GreetingName,
  GreetingRole,
  Divider,
  LogoutButton,
} from './styles';

// ── Mapa de rota → título de página ──────────────────────────────────────────
const PAGE_TITLES = {
  '/dashboard':  'Dashboard',
  '/clientes':   'Clientes',
  '/vendas':     'Vendas',
  '/usuarios':   'Usuários',
  '/bandeiras':  'Bandeiras',
  '/planos':     'Planos',
  '/relatorios': 'Relatórios',
  '/perfil':     'Meu Perfil',
  '/onboarding': 'Novo Cliente',
};

// Tradução dos roles
const ROLE_LABELS = {
  admin:   'Administrador',
  user:    'Usuário',
  partner: 'Parceiro',
};

// ── Componente ────────────────────────────────────────────────────────────────
export default function Navbar({ onMenuClick }) {
  const { user, logout } = useAuth();
  const location = useLocation();

  // Resolve o título da página atual
  // Para rotas dinâmicas como /clientes/:id, pega o prefixo
  const currentTitle = (() => {
    const exact = PAGE_TITLES[location.pathname];
    if (exact) return exact;
    const prefix = Object.keys(PAGE_TITLES).find((k) =>
      location.pathname.startsWith(k + '/')
    );
    return prefix ? PAGE_TITLES[prefix] : 'BG Representações';
  })();

  const firstName = user?.name?.split(' ')[0] ?? 'Usuário';
    return (
    <NavbarWrapper>
      <NavLeft>
        {/* Botão hamburguer — só aparece em mobile */}
        <HamburgerButton
          type="button"
          onClick={onMenuClick}
          aria-label="Abrir menu"
        >
          <Menu size={18} />
        </HamburgerButton>

        <PageTitle>{currentTitle}</PageTitle>
      </NavLeft>

      <NavRight>
        {/* Saudação + role do usuário */}
        <UserGreeting>
          <GreetingName>Olá, {firstName}</GreetingName>
          <GreetingRole>{ROLE_LABELS[user?.role] ?? user?.role}</GreetingRole>
        </UserGreeting>

        <Divider />

        {/* Botão de logout */}
        <LogoutButton type="button" onClick={logout}>
          <LogOut size={15} />
          <span>Sair</span>
        </LogoutButton>
      </NavRight>
    </NavbarWrapper>
  );
}
