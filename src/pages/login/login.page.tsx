import { useNavigate } from 'react-router-dom';

import InputComponent from '../../components/generic-input';
import { Container, Form, Title } from './style';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    console.log('Form submitted');
    navigate('home-page');
  };
  return (
    <Container>
      <Title>Login</Title>
      <Form id="login-form" onSubmit={handleSubmit}>
        <InputComponent hasBorder type="email" placeholder="Digite seu email" required id="email" label="Email" />
        <InputComponent hasBorder type="password" placeholder="Digite sua senha" required id="password" label="Senha" />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};

export default Login;
