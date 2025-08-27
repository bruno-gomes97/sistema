import styled from 'styled-components';

export const Container = styled.div`
  .action-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  color: var(--primary);
  font-size: 18px;
  font-weight: 600;
`;
