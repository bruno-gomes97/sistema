import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: var(--primary);
  font-size: 1rem;
  font-weight: 600;
`;

export const Input = styled.input`
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--black-color);
  font-size: 14px;
  padding: 8px;
  outline: none;
`;
