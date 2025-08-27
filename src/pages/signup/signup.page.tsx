import { useNavigate } from 'react-router-dom';

import Button from '../../components/buttons';
import FormComponent from '../../components/form/authForm';
import InputComponent from '../../components/input';
import { Container, Wrapper } from './style';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert('Conta criada com sucesso!');
    navigate('/');
  };

  return (
    <Container>
      <FormComponent title="Criar Conta" subtitle="Cadastre-se para acessar o sistema">
        <InputComponent id="fullname" placeholder="Seu nome completo" label="Nome Completo" type="text" />
        <InputComponent id="email" label="Email" type="email" placeholder="seu@email.com" />
        <InputComponent id="password" label="Senha" type="password" placeholder="Mínimo 6 caracteres" />
        <InputComponent
          id="confirm-password"
          label="Confirmar Senha"
          type="password"
          placeholder="Mínimo 6 caracteres"
        />
        <Wrapper>
          <Button onClick={handleSubmit} id="btn-create-account">
            Criar Conta
          </Button>
          <span>
            Já tem uma conta? <a href="/">Faça login</a>
          </span>
        </Wrapper>
      </FormComponent>
    </Container>
  );
};

export default SignupPage;
