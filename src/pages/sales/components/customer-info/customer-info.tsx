import InputComponent from '../../../../components/generic-input';
import { BoxName, Container, Form, Label, Title } from './style';

const CustomerInfo = () => {
  return (
    <Container className="customer-info">
      <Title>Dados do Cliente</Title>
      <Form>
        <Label htmlFor="cpf">CPF</Label>
        <InputComponent id="input-cpf" padding={8} hasBorder noMargin placeholder="Digite o CPF aqui" />
        <button>Pesquisar</button>
      </Form>
      <div id="display-name">
        <Label>Nome:</Label>
        <BoxName>Bruno Gomes de Souza</BoxName>
      </div>
    </Container>
  );
};

export default CustomerInfo;
