import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputComponent from '../../components/generic-input';
import { Container, Form, Title } from './style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!email || !password) return;
    try {
      const resp = await fetch(
        `http://localhost:3001/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
        {
          method: 'GET',
        }
      );

      const data = await resp.json();

      if (data.length > 0) {
        toast.success('Login realizado com sucesso!');
        setEmail('');
        setPassword('');
        navigate('home-page');
      } else {
        toast.error('E-mail ou senha inválidos!');
        setEmail('');
        setPassword('');
      }
    } catch {
      toast.error('Erro no servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form id="login-form" onSubmit={handleSubmit}>
        <InputComponent
          hasBorder
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu email"
          required
          id="email"
          label="Email"
        />
        <InputComponent
          hasBorder
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          required
          id="password"
          label="Senha"
        />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};

export default Login;
