import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Textarea = styled.textarea`
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  color: var(--black-color);
`;

export const Label = styled.label`
  color: var(--secondary);
  font-size: 1rem;
  font-weight: 600;
`;
