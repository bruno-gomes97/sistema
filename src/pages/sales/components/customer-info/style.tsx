import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--secondary);
  grid-area: customer-info;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;

  #display-name {
    display: flex;
    align-items: center;
    width: 80%;
    gap: 8px;
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

export const BoxName = styled.div`
  border: 1px solid var(--accent);
  border-radius: 10px;
  background: #fff;
  padding: 8px;
  flex: 1;
`;
