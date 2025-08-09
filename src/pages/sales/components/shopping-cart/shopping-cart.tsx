import { Trash2 } from 'lucide-react';

import ListItem from '../../../products/list/list-item';
import { Container, Title } from './style';

const ShoppingCart = () => {
  return (
    <Container>
      <Title>Dados do Carrinho</Title>
      <ListItem />
      <div className="w-[70%] flex justify-end items-end cursor-pointer">
        <Trash2 />
      </div>
    </Container>
  );
};

export default ShoppingCart;
