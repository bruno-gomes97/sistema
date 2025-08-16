import { useState } from 'react';

import SidebarComponent from '../../components/generic-sidebar';
import CustomerInfo from './components/customer-info/customer-info';
import ProductInfo from './components/product-info/product-info';
import SalesSummary from './components/sales-summary/sales-summary';
import ShoppingCart from './components/shopping-cart/shopping-cart';
import { Container, Wrapper } from './style';

const SalesPage = () => {
  const [cpf, setCpf] = useState('');
  const [fullname, setFullname] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!cpf) return;

    try {
      const resp = await fetch(`http://localhost:3001/clients?cpf=${encodeURIComponent(cpf)}`, {
        method: 'GET',
      });

      const data = await resp.json();
      if (data.length > 0) {
        setFullname(data[0].fullname);
        setCpf('');
      } else {
        setFullname('');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <SidebarComponent />
      <Wrapper>
        <CustomerInfo cpf={cpf} setCpf={setCpf} fullname={fullname} onHandleSubmit={handleSubmit} />
        <ProductInfo />
        <ShoppingCart />
        <SalesSummary />
      </Wrapper>
    </Container>
  );
};

export default SalesPage;
