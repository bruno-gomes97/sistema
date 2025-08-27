import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  align-items: center;
  font-size: 1rem;

  a {
    color: var(--primary);
    font-weight: 600;
    text-decoration: underline;
  }
`;
