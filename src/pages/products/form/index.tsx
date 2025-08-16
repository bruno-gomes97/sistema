import { Search } from 'lucide-react';

import InputComponent from '../../../components/generic-input';
import { Button, Container, Form, Wrapper } from './style';

interface FormProductProps {
  onHandleOpenModal?: () => void;
}
const FormProduct = ({ onHandleOpenModal }: FormProductProps) => {
  return (
    <Container>
      <Wrapper>
        <Button id="add-product" onClick={onHandleOpenModal}>
          Adicionar
        </Button>
        <Button id="edit-product">Editar</Button>
        <Button id="delete-product">Excluir</Button>
      </Wrapper>
      <Form>
        <InputComponent size={300} hasBorder placeholder="Pesquisar..." id="search-input" type="text" />
        <button>
          <Search size={16} />
          Pesquisar
        </button>
      </Form>
    </Container>
  );
};

export default FormProduct;
