import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  #btn-add-product {
    width: auto;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 120%;
`;

export const Subtitle = styled.p`
  color: var(--secondary);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 140%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
  background: var(--white-color);
  border: 1px solid var(--border);
  border-radius: 10px;
  gap: 1rem;

  #search-products {
    width: 100%;
  }
`;
