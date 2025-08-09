import HeaderComponent from '../../components/generic-header';
import SidebarComponent from '../../components/generic-sidebar';
import FormProduct from './form';
import ListItem from './list/list-item';
import { Container, Wrapper } from './style';

const ProductsPage = () => {
  return (
    <Wrapper>
      <SidebarComponent />
      <Container>
        <HeaderComponent hasButton label="Filtrar" text="Produtos" />
        <div>
          <FormProduct />
          <ListItem />
        </div>
      </Container>
    </Wrapper>
  );
};

export default ProductsPage;
