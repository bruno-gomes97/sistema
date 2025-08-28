import styled from 'styled-components';

export const Container = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem auto;
  background: var(--white-color);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem;

  #btn-save-client,
  #btn-cancel-client {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  #btn-cancel-client {
    background: transparent;
    color: var(--primary);
    border: 1px solid var(--border);
    &:hover {
      background: var(--background);
      color: var(--black-color);
    }
  }
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  line-height: 120%;
  color: var(--primary);
`;
