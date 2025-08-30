import styled from 'styled-components';

type TagProps = {
  hasBorder: boolean;
  type: 'info' | 'negative' | 'success' | 'warning';
};

const COLORS = {
  info: {
    text: 'blue',
    background: 'lightblue',
    border: 'blue',
  },
  negative: {
    text: 'red',
    background: 'lightcoral',
    border: 'red',
  },
  success: {
    text: 'var(--color-feedback-positive)',
    background: 'var(--color-feedback-positive-bg)',
    border: 'var(--color-feedback-positive)',
  },
  warning: {
    text: 'orange',
    background: 'lightyellow',
    border: 'orange',
  },
} as const;

export const Container = styled.div<TagProps>`
  color: ${({ type }) => COLORS[type].text};
  padding: 0 10px;
  border-radius: 24px;
  background: ${({ type }) => COLORS[type].background};
  border: ${({ type, hasBorder }) => (hasBorder ? `1px solid ${COLORS[type].border}` : 'none')};
`;
