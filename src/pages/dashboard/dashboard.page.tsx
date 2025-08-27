import { Box, ShoppingCart, TrendingUp, User2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import ActionCard from '../../components/cards/actionCard/action-card';
import MetricCard from '../../components/cards/metricCard/metric-card';
import HeaderComponent from '../../components/header';
import { Container, Title, WrapperAction, WrapperMetric } from './style';

const Dashboard = () => {
  const navigate = useNavigate();
  const metricsCardData = [
    {
      title: 'Produtos',
      icon: <Box size={18} />,
      value: 0,
      description: 'Produtos Cadastrados',
    },
    {
      title: 'Clientes',
      icon: <User2 size={18} />,
      value: 0,
      description: 'Clientes Cadastrados',
    },
    {
      title: 'Vendas',
      icon: <ShoppingCart size={18} />,
      value: 0,
      description: 'Vendas realizadas',
    },
    {
      title: 'Lucro',
      icon: <TrendingUp size={18} />,
      value: 0,
      description: 'Lucro total',
    },
  ];

  const actionCardData = [
    {
      title: 'Produtos',
      description: 'Gerencie seu catálogo de produtos',
      icon: <Box size={18} />,
      handleClick: () => {
        navigate('/product-management');
      },
      text: 'Gerenciar Produtos',
    },
    {
      title: 'Cliente',
      description: 'Cadastre e gerencie seus clientes',
      icon: <User2 size={18} />,
      text: 'Gerenciar Clientes',
    },
    {
      title: 'Vendas',
      description: 'Registre vendas e acompanhe o faturamento',
      icon: <ShoppingCart size={18} />,
      text: 'Nova Venda',
    },
    {
      title: 'Relatórios',
      description: 'Acompanhe lucros e performace da loja',
      icon: <TrendingUp size={18} />,
      text: 'Ver Relatórios',
    },
  ];

  return (
    <>
      <HeaderComponent variant="dashboard" />
      <Container>
        <Title>Dashboard</Title>
        <p>Gerencie sua loja de roupas femininas</p>
        <WrapperMetric>
          {metricsCardData.map(data => (
            <MetricCard
              key={data.title}
              title={data.title}
              icon={data.icon}
              value={data.value}
              description={data.description}
            />
          ))}
        </WrapperMetric>

        <WrapperAction>
          {actionCardData.map(data => (
            <ActionCard
              key={data.title}
              title={data.title}
              icon={data.icon}
              description={data.description}
              handleClick={data.handleClick}
              text={data.text}
            />
          ))}
        </WrapperAction>
      </Container>
    </>
  );
};

export default Dashboard;
