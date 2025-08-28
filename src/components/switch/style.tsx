import styled from 'styled-components';

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
`;

export const Toggle = styled.input`
  appearance: none;
  width: 40px;
  height: 20px;
  background: ${({ checked }) => (checked ? '#e60023' : '#ccc')};
  border-radius: 20px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({ checked }) => (checked ? '22px' : '2px')};
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 50%;
    transition: left 0.3s ease;
  }
`;

export const Label = styled.label`
  color: var(--secondary);
  font-size: 1rem;
  font-weight: 600;
`;
