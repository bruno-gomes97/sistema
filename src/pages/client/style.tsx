import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  margin: 1rem 0;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 480px;
`;

export const Footer = styled.footer`
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;

  button {
    border-radius: 24px;
    padding: 4px 24px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }

  #save-client {
    background: var(--green);
  }

  #clear {
    background: var(--primary);
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: var(--primary);
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;
