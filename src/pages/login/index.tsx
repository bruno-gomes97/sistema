import InputComponent from '../../components/generic-input';
import { Container, Form, Title } from './style';

const Login = () => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log('Form submitted');
  };
  return (
    <Container>
      <Title>Login</Title>
      <Form id="login-form" onSubmit={handleSubmit}>
        <InputComponent type="email" placeholder="Digite seu email" required id="email" label="Email" />
        <InputComponent type="password" placeholder="Digite sua senha" required id="password" label="Senha" />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};

export default Login;
