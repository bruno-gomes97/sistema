import { ShoppingCart } from 'lucide-react';

import InputComponent from '../../../../components/generic-input';
import { Box, BoxName, Container, Form, Label, NumberBox, Title, Wrapper } from './style';

const ProductInfo = () => {
  return (
    <Container className="product-info">
      <Title>Dados do Produto</Title>
      <Form>
        <Label>Código</Label>
        <InputComponent
          id="input-product-id"
          padding={8}
          hasBorder
          noMargin
          placeholder="Digite o código do produto aqui"
        />
        <button>Pesquisar</button>
      </Form>
      <Wrapper>
        <div className="flex items-center gap-3">
          <Label>Produto:</Label>
          <BoxName>Nome do Produto</BoxName>
        </div>
        <div className="flex items-center gap-3">
          <Label>Marca:</Label>
          <BoxName>Nome da Marca</BoxName>
        </div>

        <Box>
          <div className="flex items-center gap-3">
            <Label>Tamanho:</Label>
            <NumberBox>36</NumberBox>
          </div>
          <div className="flex items-center gap-3">
            <Label>Cor:</Label>
            <BoxName>Nome da Cor</BoxName>
          </div>
          <div className="flex items-center gap-3">
            <Label>Preço:</Label>
            <NumberBox>R$ 100,00</NumberBox>
          </div>
          <div className="flex items-center gap-3">
            <Label>Quantidade:</Label>
            <NumberBox>10</NumberBox>
          </div>
        </Box>
        <button>
          Adicionar ao Carrinho <ShoppingCart size={18} />
        </button>
      </Wrapper>
    </Container>
  );
};

export default ProductInfo;
