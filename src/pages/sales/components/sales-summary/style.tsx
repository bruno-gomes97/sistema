import styled from 'styled-components';

export const Container = styled.div`
  grid-area: sales-summary;
  border: 1px solid var(--secondary);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

export const NumberBox = styled.div`
  width: 180px;
  text-align: center;
  border: 1px solid var(--accent);
  border-radius: 10px;
  background: #fff;
  padding: 8px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 60%;
  margin: 1rem 0;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 auto;
    color: #fff;
    border-radius: 24px;
    padding: 4px 16px;
    cursor: pointer;
  }

  #btn-payment {
    background: var(--green);
  }

  #btn-cancel-sale {
    background: var(--red);
  }
`;
