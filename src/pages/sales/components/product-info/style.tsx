import styled from 'styled-components';

export const Container = styled.div`
  grid-area: product-info;
  border: 1px solid var(--secondary);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 auto;
    background: #fff;
    color: var(--primary);
    border: 1px solid var(--accent);
    border-radius: 24px;
    padding: 4px 16px;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  button {
    background: #fff;
    color: var(--primary);
    border: 1px solid var(--accent);
    border-radius: 24px;
    padding: 4px 16px;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px 0;
`;

export const BoxName = styled.div`
  width: auto;
  min-height: 42px;
  border: 1px solid var(--accent);
  border-radius: 10px;
  background: #fff;
  padding: 8px;
  flex: 1;
`;

export const Box = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  gap: 10px;
`;

export const NumberBox = styled.div`
  width: 100px;
  min-height: 42px;
  text-align: center;
  border: 1px solid var(--accent);
  border-radius: 10px;
  background: #fff;
  padding: 8px;
`;
