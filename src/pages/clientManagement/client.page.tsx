import { Plus, Users2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/buttons';
import EmptyState from '../../components/emptyState';
import FilterBox from '../../components/filterBox';
import HeaderComponent from '../../components/header';
import InputComponent from '../../components/input';
import SelectComponent from '../../components/select';
import { Container, Title } from '../productManagement/style';

const ClientPage = () => {
  const navigate = useNavigate();
  const clientOptions = [];
  return (
    <>
      <HeaderComponent title="Gerenciar Clientes" variant="default" />
      <Container>
        <FilterBox
          hasHeader
          subtitleHeader="Gerencie sua base de clientes"
          textButton="Novo Cliente"
          titleHeader="Clientes"
        >
          <div className="w-full flex-4">
            <Title>Filtros</Title>
            <InputComponent
              id="search-client"
              label="Buscar"
              placeholder="Buscar por nome, email, telefone ou endereço..."
              type="text"
            />
          </div>

          <SelectComponent
            id="select-city"
            label="Cidade"
            options={[
              { value: 'sao-paulo', label: 'São Paulo' },
              { value: 'rio-de-janeiro', label: 'Rio de Janeiro' },
              { value: 'belo-horizonte', label: 'Belo Horizonte' },
            ]}
            placeholder="Todas as cidades"
          />
        </FilterBox>
        {clientOptions.length === 0 && (
          <EmptyState
            message="Nenhum cliente cadastrado"
            description="Comece adicionando seu primeiro cliente à base."
            icon={<Users2 size={52} />}
            children={
              <Button onClick={() => navigate('/register-client')} id="add-first-product">
                <Plus /> Adicionar Primeiro Cliente
              </Button>
            }
          />
        )}
      </Container>
    </>
  );
};

export default ClientPage;
