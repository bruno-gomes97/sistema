import ListComponent from '../generic-list';
import { LogoContainer, Sidebar } from './style';

const SidebarComponent = () => {
  const item = [
    { id: 1, label: 'Cadastro Cliente', link: '#' },
    { id: 2, label: 'Cadastro Produto', link: '#' },
    { id: 3, label: 'Vendas', link: '#' },
    { id: 4, label: 'Cadastro Fornecedor', link: '#' },
  ];

  return (
    <Sidebar>
      <LogoContainer>
        <h1>Bela Compra</h1>
      </LogoContainer>
      <ListComponent items={item} />
    </Sidebar>
  );
};

export default SidebarComponent;
