import styled from 'styled-components';

export const StatisticContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--white-color);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem;

  h1 {
    color: var(--primary);
    font-size: 22px;
    font-weight: 600;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
