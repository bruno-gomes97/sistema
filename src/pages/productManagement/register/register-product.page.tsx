import { useState } from 'react';

import { Save, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/buttons';
import HeaderComponent from '../../../components/header';
import InputComponent from '../../../components/input';
import SelectComponent from '../../../components/select';
import SwitchComponent from '../../../components/switch';
import TextareaComponent from '../../../components/textarea';
import ContainerInput from './components/container-input';
import { Container, Title } from './style';

const RegisterProduct = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <HeaderComponent title="Gerenciar Produtos" variant="default" />
      <Container>
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
            />
            <SelectComponent
              className="flex-1"
              label="Categoria*"
              id="select-product-category"
              options={[
                { value: 'roupas', label: 'Roupas' },
                { value: 'acessorios', label: 'Acessórios' },
                { value: 'calçados', label: 'Calçados' },
              ]}
            />
          </div>

          <TextareaComponent id="product-description" label="Descrição" placeholder="Descreva o produto..." />
        </ContainerInput>

        <ContainerInput title="Detalhes">
          <div className="flex flex-row gap-4">
            <SelectComponent
              className="flex-1"
              id="select-product-size"
              label="Tamanho"
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
            />

            <InputComponent
              className="flex-2"
              id="product-brand"
              label="Marca"
              placeholder="Ex.: Zara, H&M"
              type="text"
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
            />
            <span className="text-sm">Cole o link de uma imagem ou deixe em branco para usar uma imagem padrão</span>
          </div>
        </ContainerInput>
        <ContainerInput title="Status">
          <SwitchComponent checked={isActive} onChange={setIsActive} label="Produto ativo (visível para vendas)" />
        </ContainerInput>
        <div className="flex gap-4 mt-4">
          <Button id="btn-save-product">
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
