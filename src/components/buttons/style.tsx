import styled from 'styled-components';

export const StyleButton = styled.button`
  width: 100%;
  max-height: 40px;
  background: var(--secondary);
  color: var(--white-color);
  border: none;
  border-radius: 8px;
  padding: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: var(--primary);
  }
`;
