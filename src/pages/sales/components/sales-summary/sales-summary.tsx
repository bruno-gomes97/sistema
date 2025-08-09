import { Box, Container, NumberBox, Title } from './style';

const SalesSummary = () => {
  return (
    <Container>
      <Title>Total da Venda</Title>
      <Box>
        <NumberBox>R$ 3.000,00</NumberBox>
        <button id="btn-payment">Pagamento</button>
        <button id="btn-cancel-sale">Cancelar Venda</button>
      </Box>
    </Container>
  );
};
export default SalesSummary;
