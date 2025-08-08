import styled from 'styled-components';

interface HeaderProps {
  hasBackground?: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 50px;
  width: 80%;
  margin: 50px auto 0;

  ${({ hasBackground }) =>
    hasBackground &&
    `
    background: #fff;
    border-radius: 8px;
  `}

  div {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
    border-left: 3px solid var(--primary);
    font-size: 20px;
    font-weight: 600;
    color: var(--primary);
  }
`;

export const Button = styled.button`
  width: 100px;
  border: 1px solid var(--accent);
  border-radius: 24px;
  padding: 8px 16px;
  text-align: center;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #fff;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
`;
