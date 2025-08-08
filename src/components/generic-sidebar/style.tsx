import styled from 'styled-components';

export const Sidebar = styled.div`
  background: var(--primary);
  height: 100vh;
  width: 250px;
  color: #fff;
  padding: 1rem 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const LogoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  background: #fff;
  color: var(--primary);
  padding: 8px;
  border-radius: 30px;
`;

export const Logout = styled.button`
  width: 80%;
  margin: 0 auto;
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

  span {
    font-size: 16px;
    font-weight: 700;
  }
`;
