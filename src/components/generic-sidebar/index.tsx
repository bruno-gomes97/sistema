import { LogOut } from 'lucide-react';

import ListComponent from '../generic-list';
import { LogoContainer, Logout, Sidebar } from './style';

const SidebarComponent = () => {
  const item = [
    { id: 1, label: 'Cadastro Cliente', link: '#' },
    { id: 2, label: 'Cadastro Produto', link: '#' },
    { id: 3, label: 'Vendas', link: '#' },
    { id: 4, label: 'Cadastro Fornecedor', link: '#' },
  ];
  // const history = useHistory();

  // const handleLogout = () => {
  //   history.push('/login');
  // };

  return (
    <Sidebar>
      <LogoContainer>
        <h1>Bela Compra</h1>
      </LogoContainer>
      <ListComponent items={item} />
      <Logout>
        <span>Sair</span>
        <LogOut size={16} />
      </Logout>
    </Sidebar>
  );
};

export default SidebarComponent;
