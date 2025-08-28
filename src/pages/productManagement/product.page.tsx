import { Box, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/buttons';
import EmptyState from '../../components/emptyState';
import FilterBox from '../../components/filterBox';
import HeaderComponent from '../../components/header';
import InputComponent from '../../components/input';
import SelectComponent from '../../components/select';
import { Container, Title } from './style';

const ProductPage = () => {
  const navigate = useNavigate();

  const fruitOptions = [
    { value: 'roupas', label: 'Roupas' },
    { value: 'acessorios', label: 'Acessórios' },
    { value: 'calçados', label: 'Calçados' },
  ];
  return (
    <>
      <HeaderComponent title="Gerenciar Produtos" variant="default" />
      <Container>
        <FilterBox
          hasHeader
          subtitleHeader="Gerencie seu catálogo de produtos"
          textButton="Novo Produto"
          titleHeader="Produtos"
        >
          <div className="w-full flex-4">
            <Title>Filtros</Title>
            <InputComponent
              id="search-products"
              label="Buscar"
              placeholder="Buscar por nome, descrição ou marca..."
              type="text"
            />
          </div>

          <SelectComponent
            id="select-category"
            label="Categoria"
            options={[
              { value: 'roupas', label: 'Roupas' },
              { value: 'acessorios', label: 'Acessórios' },
              { value: 'calçados', label: 'Calçados' },
            ]}
            placeholder="Selecione as categorias"
          />
        </FilterBox>
        {fruitOptions.length > 0 && (
          <EmptyState
            message="Nenhum produto cadastrado"
            description="Comece adicionando seu primeiro produto ao catálogo."
            icon={<Box size={52} />}
            children={
              <Button onClick={() => navigate('/register-product')} id="add-first-product">
                <Plus /> Adicionar Primeiro Produto
              </Button>
            }
          />
        )}
      </Container>
    </>
  );
};

export default ProductPage;
