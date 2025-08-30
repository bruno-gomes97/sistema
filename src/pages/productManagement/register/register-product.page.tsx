import { Save, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/buttons';
import HeaderComponent from '../../../components/header';
import InputComponent from '../../../components/input';
import SelectComponent from '../../../components/select';
import SwitchComponent from '../../../components/switch';
import TextareaComponent from '../../../components/textarea';
import { createProduct, type ProductType } from '../../../service/http/products/request';
import ContainerInput from './components/container-input';
import { Container, Title } from './style';

const RegisterProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<ProductType>();

  const handleAddProduct = async (data: ProductType) => {
    try {
      await createProduct({
        ...data,
      });
      toast.success('Produto criado com sucesso!');
      navigate(-1);
    } catch (error) {
      toast.error('Erro ao criar produto', error as any);
    }
  };

  return (
    <>
      <HeaderComponent title="Gerenciar Produtos" variant="default" />
      <Container onSubmit={handleSubmit(handleAddProduct)}>
        <div>
          <Title>Novo Produto</Title>
          <p>Adicione um novo produto ao seu catálogo</p>
        </div>
        <ContainerInput title="Informações Básicas">
          <div className="flex gap-4">
            <InputComponent
              label="Nome do Produto*"
              type="text"
              placeholder="Ex.: Vestido Floral Verão"
              id="product-name"
              className="flex-1"
              register={register('name', {
                required: true,
              })}
            />
            <SelectComponent
              className="flex-1"
              label="Categoria*"
              id="select-product-category"
              register={register('category', {
                required: true,
              })}
              options={[
                { value: 'roupas', label: 'Roupas' },
                { value: 'acessorios', label: 'Acessórios' },
                { value: 'calçados', label: 'Calçados' },
              ]}
            />
          </div>

          <TextareaComponent
            id="product-description"
            label="Descrição"
            placeholder="Descreva o produto..."
            register={register('description')}
          />
        </ContainerInput>
        <ContainerInput title="Preços e Estoque">
          <div className="flex flex-row gap-4">
            <InputComponent
              id="product-price"
              label="Preço de venda(R$)*"
              placeholder="0"
              register={register('price', {
                required: true,
              })}
            />
            <InputComponent
              label="Preço de Custo(R$)*"
              type="text"
              placeholder="0"
              id="product-cost_price"
              register={register('cost_price', {
                required: true,
              })}
            />

            <InputComponent
              id="product-stock-quantity"
              label="Quantidade em Estoque*"
              placeholder="0"
              type="text"
              register={register('stock_quantity', {
                required: true,
              })}
            />
          </div>
        </ContainerInput>

        <ContainerInput title="Detalhes">
          <div className="flex flex-row gap-4">
            <SelectComponent
              className="flex-1"
              id="select-product-size"
              label="Tamanho"
              register={register('size')}
              options={[
                { value: 'p', label: 'P' },
                { value: 'm', label: 'M' },
                { value: 'g', label: 'G' },
              ]}
            />
            <InputComponent
              className="flex-2"
              label="Cor"
              type="text"
              placeholder="Ex.: Rosa, Azul, Floral"
              id="product-color"
              register={register('color')}
            />

            <InputComponent
              className="flex-2"
              id="product-brand"
              label="Marca"
              placeholder="Ex.: Zara, H&M"
              type="text"
              register={register('brand')}
            />
          </div>
        </ContainerInput>
        <ContainerInput title="Imagem">
          <div>
            <InputComponent
              label="URL da Imagem"
              type="text"
              placeholder="https://exemplo.com/imagem.jpg"
              id="product-image"
              register={register('image_url')}
            />
            <span className="text-sm">Cole o link de uma imagem ou deixe em branco para usar uma imagem padrão</span>
          </div>
        </ContainerInput>
        <ContainerInput title="Status">
          <SwitchComponent register={register('is_active')} label="Produto ativo (visível para vendas)" />
        </ContainerInput>
        <div className="flex gap-4 mt-4">
          <Button type="submit" id="btn-save-product">
            <Save size={18} /> Salvar Produto
          </Button>
          <Button onClick={() => navigate(-1)} id="btn-cancel-product">
            <X size={18} /> Cancelar
          </Button>
        </div>
      </Container>
    </>
  );
};

export default RegisterProduct;
