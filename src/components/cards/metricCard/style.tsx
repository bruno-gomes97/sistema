import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary);
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Value = styled.span`
  color: var(--primary);
  font-size: 1.8rem;
  font-weight: 700;
`;

export const Description = styled.span`
  color: var(--secondary);
  font-size: 1rem;
  font-weight: 500;
`;
