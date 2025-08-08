import { Handbag, PackageSearch, Shirt, UserRoundPlus, UserSearch } from 'lucide-react';

import { Container } from './style';

const QuickActionsPanel = () => {
  const items = [
    { id: 1, text: 'Nova Venda', icon: <Handbag size={48} /> },
    { id: 2, text: 'Novo Produto', icon: <Shirt size={48} /> },
    { id: 3, text: 'Novo Cliente', icon: <UserRoundPlus size={48} /> },
    { id: 4, text: 'Buscar Cliente', icon: <UserSearch size={48} /> },
    { id: 5, text: 'Buscar Venda', icon: <PackageSearch size={48} /> },
  ];

  return (
    <Container>
      {items.map(item => (
        <div key={item.id}>
          {item.icon}
          <span>{item.text}</span>
        </div>
      ))}
    </Container>
  );
};

export default QuickActionsPanel;
