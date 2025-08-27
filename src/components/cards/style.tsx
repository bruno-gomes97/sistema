import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--white-color);
  padding: 1rem;

  /* Suavização da animação */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px); /* levanta o card */
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15); /* sombra mais forte */
  }
`;
