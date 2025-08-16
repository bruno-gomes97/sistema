import HeaderComponent from '../../components/generic-header';
import InputComponent from '../../components/generic-input';
import SidebarComponent from '../../components/generic-sidebar';
import { Container, Footer, Form, InputGroup, Label, Title, Wrapper } from './style';

const RegisterClient = () => {
  return (
    <Wrapper>
      <SidebarComponent />
      <Container>
        <HeaderComponent text="Cadastro Cliente" hasButton={false} />
        <Title>Dados Pessoais</Title>
        <Form id="register-new-client">
          <InputGroup>
            <Label>Nome completo:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite o nome completo"
              padding={8}
              type="text"
              required
              id="fullname"
            />
          </InputGroup>
          <InputGroup>
            <Label>CPF:</Label>
            <InputComponent hasBorder noMargin padding={8} id="cpf" placeholder="Digite o CPF" required type="text" />
          </InputGroup>
          <InputGroup>
            <Label>Email:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite o email"
              padding={8}
              type="text"
              required
              id="email"
            />
          </InputGroup>
          <InputGroup>
            <Label>Data nascimento:</Label>
            <InputComponent hasBorder noMargin padding={8} type="date" required id="birthDate" />
          </InputGroup>
          <InputGroup>
            <Label>Telefone:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite o telefone"
              padding={8}
              type="text"
              required
              id="phone"
            />
          </InputGroup>
          <InputGroup>
            <Label>CEP:</Label>
            <InputComponent hasBorder noMargin placeholder="Digite o CEP" padding={8} type="text" required id="cep" />
          </InputGroup>
          <InputGroup>
            <Label>Logradouro:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite o logradouro"
              padding={8}
              type="text"
              required
              id="address"
            />
          </InputGroup>
          <InputGroup>
            <Label>N°:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite o número/logradouro"
              padding={8}
              type="text"
              required
              id="number"
            />
          </InputGroup>
          <InputGroup>
            <Label>UF:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite o estado ex.: RS"
              padding={8}
              type="text"
              required
              id="state"
            />
          </InputGroup>
          <InputGroup>
            <Label>Cidade:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite a cidade"
              padding={8}
              type="text"
              required
              id="city"
            />
          </InputGroup>
          <InputGroup>
            <Label>Bairro:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite o bairro"
              padding={8}
              type="text"
              required
              id="neighborhood"
            />
          </InputGroup>
        </Form>
        <Footer>
          <button id="save-client">Salvar</button>
          <button id="clear">Limpar</button>
        </Footer>
      </Container>
    </Wrapper>
  );
};

export default RegisterClient;
