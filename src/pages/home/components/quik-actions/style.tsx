import styled from 'styled-components';

export const Container = styled.div`
  height: 200px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: var(--secondary);
  border-radius: 10px;
  padding: 12px;
  display: flex;
  justify-content: space-around;
  color: #fff;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    span {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
