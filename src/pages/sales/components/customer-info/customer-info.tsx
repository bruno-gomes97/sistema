import InputComponent from '../../../../components/generic-input';
import { BoxName, Container, Form, Label, Title } from './style';

interface CustomerInfoProps {
  cpf?: string;
  setCpf: (value: string) => void;
  onHandleSubmit?: (event: React.FormEvent) => void;
  fullname?: string;
}

const CustomerInfo = ({ cpf, setCpf, onHandleSubmit, fullname }: CustomerInfoProps) => {
  return (
    <Container className="customer-info">
      <Title>Dados do Cliente</Title>
      <Form>
        <Label>CPF</Label>
        <InputComponent
          id="input-cpf"
          value={cpf}
          onChange={e => setCpf(e.target.value)}
          padding={8}
          hasBorder
          noMargin
          placeholder="Digite o CPF aqui"
        />
        <button onClick={onHandleSubmit}>Pesquisar</button>
      </Form>
      <div id="display-name">
        <Label>Nome:</Label>
        <BoxName>{fullname}</BoxName>
      </div>
    </Container>
  );
};

export default CustomerInfo;
