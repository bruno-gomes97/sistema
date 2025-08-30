import { useEffect, useState } from 'react';

import { Box, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/buttons';
import InforCard, { type TProduct } from '../../components/cards/infoCard';
import EmptyState from '../../components/emptyState';
import FilterBox from '../../components/filterBox';
import HeaderComponent from '../../components/header';
import InputComponent from '../../components/input';
import SelectComponent from '../../components/select';
import Statistic, { type StatisticItem } from '../../components/statistic';
import { getAllProducts, getProductStatistics } from '../../service/http/products/request';
import { Container, Title } from './style';

const ProductPage = () => {
  const navigate = useNavigate();
  const [productsStatistics, setProductsStatistics] = useState<StatisticItem[]>([]);
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    async function fetchStatistics() {
      const data = await getProductStatistics();
      const stats: StatisticItem[] = [
        {
          label: 'Total de Produtos',
          value: data.totalProducts,
        },
        {
          label: 'Produtos Ativos',
          value: data.activeProducts,
        },
        {
          label: 'Produtos em Estoque',
          value: data.totalInStock,
        },
        {
          label: 'Categorias',
          value: Object.keys(data.category).length,
        },
      ];
      setProductsStatistics(stats);
    }

    fetchStatistics();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getAllProducts();
      setProducts(data);
    }

    fetchProducts();
  }, []);

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

        {products.length > 0 ? (
          <>
            <InforCard product={products} />
            <Statistic items={productsStatistics} />
          </>
        ) : (
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
