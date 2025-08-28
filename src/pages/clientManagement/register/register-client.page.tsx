import { Save, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/buttons';
import HeaderComponent from '../../../components/header';
import InputComponent from '../../../components/input';
import SelectComponent from '../../../components/select';
import TextareaComponent from '../../../components/textarea';
import ContainerInput from '../../productManagement/register/components/container-input';
import { Container, Title } from './style';

const RegisterClientPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderComponent title="Gerenciar Clientes" variant="default" />
      <Container>
        <div>
          <Title>Novo Cliente</Title>
          <p>Adicione um novo cliente à sua base</p>
        </div>
        <ContainerInput title="Informações Pessoais">
          <div className="flex gap-4">
            <InputComponent
              label="Nome Completo *"
              type="text"
              placeholder="Ex.: Maria Silva Santos"
              id="client-name"
              className="flex-2"
            />
            <InputComponent label="Data de Nascimento" type="date" id="client-birthdate" className="flex-1" />
          </div>
        </ContainerInput>

        <ContainerInput title="Contato">
          <div className="flex gap-1">
            <InputComponent
              label="Email"
              type="email"
              placeholder="Ex.: maria@email.com"
              id="client-email"
              className="flex-1"
            />
            <InputComponent
              label="Telefone"
              placeholder="(11) 99999-9999"
              type="text"
              id="client-phone"
              className="flex-1"
            />
          </div>
        </ContainerInput>

        <ContainerInput title="Endereço">
          <InputComponent
            label="Endereço completo"
            type="text"
            placeholder="Ex.: Rua das Flores, 123"
            id="client-address"
          />
          <div className="flex gap-1">
            <InputComponent label="Cidade" type="text" placeholder="Ex.: São Paulo" id="client-city" />
            <SelectComponent
              label="Estado"
              id="client-state"
              options={[
                { value: '', label: 'Selecione' },
                { value: 'SP', label: 'São Paulo' },
                { value: 'RJ', label: 'Rio de Janeiro' },
              ]}
            />
            <InputComponent label="CEP" type="text" placeholder="Ex.: 12345-678" id="client-cep" />
          </div>
        </ContainerInput>

        <ContainerInput title="Observações">
          <TextareaComponent
            label="Notas adicionais"
            placeholder="Preferências, histórico de compras, observações especiais..."
            id="client-notes"
          />
        </ContainerInput>

        <div className="flex gap-4 mt-4">
          <Button id="btn-save-client">
            <Save size={18} /> Salvar Cliente
          </Button>
          <Button onClick={() => navigate(-1)} id="btn-cancel-client">
            <X size={18} /> Cancelar
          </Button>
        </div>
      </Container>
    </>
  );
};

export default RegisterClientPage;
