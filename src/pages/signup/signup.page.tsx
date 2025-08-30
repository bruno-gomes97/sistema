import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/buttons';
import FormComponent from '../../components/form/authForm';
import InputComponent from '../../components/input';
import { createUser } from '../../service/http/user/request';
import { signupSchema } from '../../validations/signupSchema';
import { Container, Wrapper } from './style';

type FormData = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signupSchema),
  });

  const onHandleSubmit = async (formData: FormData) => {
    if (formData.password !== formData.confirmPassword) {
      toast.error('As senhas não coincidem.');
      return;
    }

    try {
      await createUser({
        email: formData.email,
        fullname: formData.fullname,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      toast.success('Cadastro realizado com sucesso!');
      navigate('/');
    } catch (error: any) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <Container>
      <FormComponent
        title="Criar Conta"
        subtitle="Cadastre-se para acessar o sistema"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <div className="w-full">
          <InputComponent
            id="fullname"
            placeholder="Seu nome completo"
            label="Nome Completo"
            type="text"
            register={{ ...register('fullname', { required: true }) }}
          />
          {errors.fullname && <span className="text-sm">{errors.fullname.message}</span>}
        </div>
        <div className="w-full">
          <InputComponent
            id="email"
            label="Email"
            type="email"
            placeholder="seu@email.com"
            register={{ ...register('email', { required: true }) }}
          />
          {errors.email && <span className="text-sm">{errors.email.message}</span>}
        </div>

        <div className="w-full">
          <InputComponent
            id="password"
            label="Senha"
            type="password"
            placeholder="Mínimo 6 caracteres"
            register={{
              ...register('password', {
                required: true,
              }),
            }}
          />
          {errors.password && <span className="text-sm">{errors.password.message}</span>}
        </div>

        <div className="w-full">
          <InputComponent
            id="confirm-password"
            label="Confirmar Senha"
            type="password"
            placeholder="Mínimo 6 caracteres"
            register={{ ...register('confirmPassword', { required: true }) }}
          />
          {errors.confirmPassword && <span className="text-sm">{errors.confirmPassword.message}</span>}
        </div>

        <Wrapper>
          <Button type="submit" id="btn-create-account">
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
