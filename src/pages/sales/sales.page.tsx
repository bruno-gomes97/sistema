import SidebarComponent from '../../components/generic-sidebar';
import CustomerInfo from './components/customer-info/customer-info';
import ProductInfo from './components/product-info/product-info';
import SalesSummary from './components/sales-summary/sales-summary';
import ShoppingCart from './components/shopping-cart/shopping-cart';
import { Container, Wrapper } from './style';

const SalesPage = () => {
  return (
    <Container>
      <SidebarComponent />
      <Wrapper>
        <CustomerInfo />
        <ProductInfo />
        <ShoppingCart />
        <SalesSummary />
      </Wrapper>
    </Container>
  );
};

export default SalesPage;
