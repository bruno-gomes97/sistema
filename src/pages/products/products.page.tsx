import { useState } from 'react';

import HeaderComponent from '../../components/generic-header';
import SidebarComponent from '../../components/generic-sidebar';
import FormProduct from './form';
import ListItem from './list/list-item';
import ModalRegisterProduct from './register';
import { Container, Wrapper } from './style';

const ProductsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCancel = () => {
    setIsOpen(prev => !prev);
  };

  const handleOpenModal = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <Wrapper>
      <SidebarComponent />
      <Container>
        <HeaderComponent hasButton label="Filtrar" text="Produtos" />
        <div>
          <FormProduct onHandleOpenModal={handleOpenModal} />
          <ListItem />
        </div>
      </Container>
      {isOpen && <ModalRegisterProduct isOpen={isOpen} onHandleCancel={handleCancel} />}
    </Wrapper>
  );
};

export default ProductsPage;
