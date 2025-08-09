import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'customer-info shopping-cart'
    'product-info shopping-cart'
    'product-info sales-summary';
  gap: 8px;
`;
