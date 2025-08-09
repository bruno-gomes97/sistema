import styled from 'styled-components';

interface InputProps {
  hasBorder?: boolean;
  size?: number;
  padding?: number;
  noMargin?: boolean;
}

export const Container = styled.div`
  width: 80%;
`;

export const Input = styled.input<InputProps>`
  width: ${({ size }) => (size ? `${size}px` : '100%')};
  border: none;
  padding: ${({ padding }) => (padding ? `${padding}px` : '12px')};
  outline: none;
  font-size: 12px;

  ${({ hasBorder }) =>
    hasBorder &&
    `
    border: 1px solid var(--accent);
    border-radius: 8px;
    font-size: 14px;
  `}
  margin: ${({ noMargin }) => (noMargin ? '0' : '12px 0')};
  border-radius: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
`;
