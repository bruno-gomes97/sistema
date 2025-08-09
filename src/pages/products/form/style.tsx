import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #add-product {
    background: var(--green);
  }
  #edit-product {
    background: var(--blue);
  }
  #delete-product {
    background: var(--red);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 8px;
`;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 4px 16px;
  border-radius: 24px;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;

  button {
    color: var(--primary);
    font-size: 18px;
    background-color: #fff;
    border: 1px solid var(--accent);
    border-radius: 24px;
    padding: 4px 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
