import styled from 'styled-components';

type TagProps = {
  hasBorder: boolean;
  type: 'negative' | 'success';
};

const COLORS = {
  negative: {
    text: 'var(--white-color)',
    background: 'var(--black-color)',
    border: 'var(--black-color)',
  },
  success: {
    text: 'var(--color-feedback-positive)',
    background: 'var(--color-feedback-positive-bg)',
    border: 'var(--color-feedback-positive)',
  },
} as const;

export const Container = styled.div<{ $hasBorder: boolean; type: TagProps['type'] }>`
  color: ${({ type }) => COLORS[type].text};
  padding: 0 10px;
  border-radius: 24px;
  background: ${({ type }) => COLORS[type].background};
  border: ${({ $hasBorder, type }) => ($hasBorder ? `1px solid ${COLORS[type].border}` : 'none')};
`;
