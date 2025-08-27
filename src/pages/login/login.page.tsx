import { useNavigate } from 'react-router-dom';

import Button from '../../components/buttons';
import FormComponent from '../../components/form/authForm';
import InputComponent from '../../components/input';
import { Container, Wrapper } from './style';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/dashboard');
  };
  return (
    <Container>
      <FormComponent onSubmit={handleSubmit} title="Boutique Feminina" subtitle="Faça login para acessar o sistema">
        <InputComponent id="email" placeholder="seu@email.com" label="Email" type="email" />
        <InputComponent id="password" label="Password" type="password" />
        <Wrapper>
          <Button type="submit" id="btn-submit">
            Entrar
          </Button>
          <span>
            Não tem uma conta? <a href="/signup">Cadastre-se</a>
          </span>
        </Wrapper>
      </FormComponent>
    </Container>
  );
};

export default LoginPage;
