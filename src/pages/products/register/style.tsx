import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5); // fundo escuro semi-transparente
  display: flex;
  justify-content: center; // centraliza horizontalmente
  align-items: center; // centraliza verticalmente
  z-index: 1000; // fica acima do resto da página
`;

export const Container = styled.div`
  max-width: 90%;
  /* height: 60%; */
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

export const Header = styled.header`
  background: var(--primary);
  color: #fff;
  font-size: 24px;
  text-align: center;
  padding: 12px 0;
`;

export const ModalContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;

  select {
    border: 1px solid var(--accent);
    border-radius: 8px;
    padding: 4px 0;
    color: var(--primary);
    outline: none;
    margin: 0 10px;
  }
`;

export const PriceQuantityWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const Footer = styled.footer`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  gap: 8px;

  button {
    border-radius: 24px;
    padding: 4px 24px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }

  #save-product {
    background: var(--green);
  }

  #clear {
    background: var(--primary);
  }

  #cancel-product {
    background: var(--red);
  }
`;
