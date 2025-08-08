import { useState } from 'react';

import { Banknote, DollarSign, Eye, EyeClosed, ShoppingCart, Tag } from 'lucide-react';

import MetricWrapper from '../metric-wrapper/metric-wrapper';
import { Container } from './style';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const item = [
    { id: 1, name: 'Faturamento', value: 'R$ 1129,80', icon: <Banknote size={28} /> },
    { id: 2, name: 'Receita Líquida', value: 'R$ 1129,80', icon: <DollarSign size={28} /> },
    { id: 3, name: 'Total de vendas', value: '19', icon: <ShoppingCart size={28} /> },
    { id: 4, name: 'Ticket Médio', value: 'R$ 1129,80', icon: <Tag size={28} /> },
  ];

  return (
    <Container>
      {open ? <Eye onClick={handleClick} /> : <EyeClosed onClick={handleClick} />}
      <MetricWrapper items={item} isOpen={open} />
    </Container>
  );
};

export default Dashboard;
