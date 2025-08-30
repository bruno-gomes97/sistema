import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import type { InferType } from 'yup';

import Button from '../../components/buttons';
import FormComponent from '../../components/form/authForm';
import InputComponent from '../../components/input';
import { useCreate } from '../../hook/use-create';
import { createUser } from '../../service/http/user/request';
import { signupSchema } from '../../validations/signupSchema';
import { Container, Wrapper } from './style';

type UserType = InferType<typeof signupSchema>;

const SignupPage = () => {
  const { onSubmit: createUserHandler } = useCreate<UserType>(createUser, { redirectTo: '/' });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    resolver: yupResolver(signupSchema),
  });

  const onHandleSubmit = async (formData: UserType) => {
    if (formData.password !== formData.confirmPassword) {
      toast.error('As senhas não coincidem.');
      return;
    }

    createUserHandler(formData);
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
