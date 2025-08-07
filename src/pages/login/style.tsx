import styled from 'styled-components';

export const Container = styled.div`
  button {
    width: 80%;
    padding: 12px;
    border-radius: 24px;
    border: 1px solid var(--accent);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin-top: 12px;
    cursor: pointer;
    background: var(--primary);
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 1rem 0;
`;

export const Form = styled.form`
  border: 1px solid var(--accent);
  max-width: 500px;
  min-height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
