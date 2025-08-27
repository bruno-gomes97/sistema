import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: var(--primary);
  font-size: 1rem;
  font-weight: 600;
`;

export const Select = styled.select`
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--black-color);
  outline: none;
  height: 40px;
  padding: 8px;
`;
