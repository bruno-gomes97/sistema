import styled from 'styled-components';

export const Cotainer = styled.div`
  width: 100%;
  height: 300px;
  background: var(--white-color);
  border: 1px solid var(--border);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: var(--primary);
  }

  #add-first-product {
    width: auto;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 8px 16px;
  }
`;
