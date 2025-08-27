import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  #btn-logout,
  #btn-back {
    background: transparent;
    color: var(--secondary);
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;

    gap: 8px;
  }

  #btn-logout {
    border: 1px solid var(--border);
    justify-content: space-around;
    width: 90px;

    &:hover {
      background: var(--background);
      color: var(--black-color);
    }
  }

  #btn-back {
    border: none;
    justify-content: center;
    width: auto;
    font-size: 1.2rem;
  }
`;

export const Wrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    width: 300px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 120%;
`;
