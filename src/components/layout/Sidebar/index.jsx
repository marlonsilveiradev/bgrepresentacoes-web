// ============================================================
// src/components/layout/Sidebar/index.jsx
// ============================================================
import {
  LayoutDashboard,
  Users,
  UsersRound,
  ShoppingCart,
  Flag,
  BarChart2,
  UserCircle,
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import {
  SidebarWrapper,
  SidebarHeader,
  LogoMark,
  LogoText,
  LogoName,
  Nav,
  NavSection,
  NavSectionLabel,
  NavItem,
  NavItemLabel,
  SidebarFooter,
  UserCard,
  UserAvatar,
  UserInfo,
  UserName,
  UserRole,
  MobileOverlay,
} from './styles';

// ── Helpers ───────────────────────────────────────────────────────────────────

// Gera iniciais do nome para o avatar (ex: "João Silva" → "JS")
const getInitials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join('');

// Tradução dos roles para português
const ROLE_LABELS = {
  admin:   'Administrador',
  user:    'Usuário',
  partner: 'Parceiro',
};

// ── Estrutura de navegação ────────────────────────────────────────────────────
// Cada item pode ter: path, label, icon, adminOnly
const NAV_ITEMS = [
  {
    section: 'Principal',
    items: [
      { path: '/dashboard', label: 'Dashboard',  icon: LayoutDashboard },
      { path: '/clientes',  label: 'Clientes',   icon: UsersRound      },
      { path: '/vendas',    label: 'Vendas',      icon: ShoppingCart    },
    ],
  },
  {
    section: 'Administração',
    adminOnly: true,          // seção inteira visível só para admin
    items: [
      { path: '/usuarios',   label: 'Usuários',   icon: Users      },
      { path: '/bandeiras',  label: 'Bandeiras',  icon: Flag       },
      { path: '/planos',     label: 'Planos',     icon: BarChart2  },
      { path: '/relatorios', label: 'Relatórios', icon: BarChart2  },
    ],
  },
  {
    section: 'Conta',
    items: [
      { path: '/perfil', label: 'Meu Perfil', icon: UserCircle },
    ],
  },
];

// ── Componente ────────────────────────────────────────────────────────────────
export default function Sidebar({ open, onClose }) {
  const { user, isAdmin } = useAuth();

  return (
    <>
      {/* Overlay escuro no mobile */}
      <MobileOverlay $open={open} onClick={onClose} />

      <SidebarWrapper $open={open}>
        {/* Cabeçalho / Logo */}
        <SidebarHeader>
          <LogoMark>BG</LogoMark>
          <LogoText>
            <LogoName>BG Representações</LogoName>
            
          </LogoText>
        </SidebarHeader>

        {/* Itens de navegação */}
        <Nav>
          {NAV_ITEMS.map((group) => {
            // Oculta seções adminOnly para não-admins
            if (group.adminOnly && !isAdmin) return null;

            return (
              <div key={group.section}>
                <NavSection>
                  <NavSectionLabel>{group.section}</NavSectionLabel>
                </NavSection>

                {group.items.map(({ path, label, icon: Icon }) => (
                  <NavItem
                    key={path}
                    to={path}
                    onClick={onClose} // fecha drawer no mobile ao navegar
                  >
                    <Icon size={17} />
                    <NavItemLabel>{label}</NavItemLabel>
                  </NavItem>
                ))}
              </div>
            );
          })}
        </Nav>

        {/* Rodapé: info do usuário logado */}
        <SidebarFooter>
          <UserCard>
            <UserAvatar>{getInitials(user?.name)}</UserAvatar>
            <UserInfo>
              <UserName>{user?.name ?? 'Usuário'}</UserName>
              <UserRole>{ROLE_LABELS[user?.role] ?? user?.role}</UserRole>
            </UserInfo>
          </UserCard>
        </SidebarFooter>
      </SidebarWrapper>
    </>
  );
}
