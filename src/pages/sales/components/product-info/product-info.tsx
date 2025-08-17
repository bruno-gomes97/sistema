import { useState } from 'react';

import { ShoppingCart } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import InputComponent from '../../../../components/generic-input';
import { getProductByCode } from '../../../../service/product/product';
import { Box, BoxName, Container, Form, Label, NumberBox, Title, Wrapper } from './style';

interface ProductInfoProps {
  description?: string;
  brand?: string;
  size?: string;
  color?: string;
  salePrice?: number;
  quantity?: number;
}

interface ProductFormData {
  productDetails: string;
  productQuantity?: number;
}

const ProductInfo = () => {
  const { register, handleSubmit } = useForm<ProductFormData>();
  const [products, setProducts] = useState<ProductInfoProps | null>();

  const searchProduct = async (data: ProductFormData) => {
    try {
      const response = await getProductByCode(data.productDetails);

      if (!response || response.length === 0) {
        toast.error('Produto não encontrado');
        return;
      }
      setProducts(response[0]);
    } catch {
      toast.error('Erro no servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <Container className="product-info">
      <Title>Dados do Produto</Title>
      <Form onSubmit={handleSubmit(searchProduct)}>
        <Label>Código</Label>
        <InputComponent
          id="input-product-id"
          padding={8}
          hasBorder
          noMargin
          {...register('productDetails', {
            required: true,
          })}
          placeholder="Digite o código do produto aqui"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Wrapper>
        <div className="flex items-center gap-3">
          <Label>Produto:</Label>
          <BoxName>{products?.description}</BoxName>
        </div>
        <div className="flex items-center gap-3">
          <Label>Marca:</Label>
          <BoxName>{products?.brand}</BoxName>
        </div>

        <Box>
          <div className="flex items-center gap-3">
            <Label>Tamanho:</Label>
            <NumberBox>{products?.size}</NumberBox>
          </div>
          <div className="flex items-center gap-3">
            <Label>Cor:</Label>
            <BoxName>{products?.color}</BoxName>
          </div>
          <div className="flex items-center gap-3">
            <Label>Preço:</Label>
            <NumberBox>{products?.salePrice ? `R$ ${products?.salePrice}` : ''}</NumberBox>
          </div>
          <div className="flex items-center gap-3">
            <Label>Quantidade:</Label>
            <InputComponent
              id="product-quantity"
              type="number"
              min={0}
              max={products?.quantity ?? 0}
              size={100}
              padding={8}
              hasBorder
              noMargin
              {...register('productQuantity', {
                required: true,
              })}
            />
          </div>
        </Box>
        <button>
          Adicionar ao Carrinho <ShoppingCart size={18} />
        </button>
      </Wrapper>
      <ToastContainer position="top-right" autoClose={2000} />
    </Container>
  );
};

export default ProductInfo;
