import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import ListComponent from '../generic-list';
import { LogoContainer, Logout, Sidebar } from './style';

const SidebarComponent = () => {
  const item = [
    { id: 1, label: 'Início', link: '/home-page' },
    { id: 2, label: 'Cadastro Produto', link: '#' },
    { id: 3, label: 'Vendas', link: '/sales' },
    { id: 4, label: 'Produtos', link: '/products' },
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Sidebar>
      <LogoContainer>
        <h1>Bela Compra</h1>
      </LogoContainer>
      <ListComponent items={item} />
      <Logout onClick={handleLogout}>
        <span>Sair</span>
        <LogOut size={16} />
      </Logout>
    </Sidebar>
  );
};

export default SidebarComponent;
