import { useState } from 'react';

import FilterBox from '../../components/filterBox';
import HeaderComponent from '../../components/header';
import InputComponent from '../../components/input';
import SelectComponent from '../../components/select';
import { Container, Title } from './style';

const ProductPage = () => {
  const [fruit, setFruit] = useState('');

  const fruitOptions = [
    { value: 'apple', label: 'Maçã' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Laranja' },
  ];
  return (
    <>
      <HeaderComponent variant="default" />
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
            value={fruit}
            onChange={e => setFruit(e.target.value)}
            options={fruitOptions}
            placeholder="Selecione as categorias"
          />
        </FilterBox>
      </Container>
    </>
  );
};

export default ProductPage;
