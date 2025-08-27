import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: var(--white-color);
  border-radius: 10px;
  padding: 1rem;
  min-width: 400px;
  /* --- Flutuar / destaque --- */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 120%;
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: var(--secondary);
  line-height: 120%;
`;
