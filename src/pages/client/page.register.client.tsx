import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import HeaderComponent from '../../components/generic-header';
import InputComponent from '../../components/generic-input';
import SidebarComponent from '../../components/generic-sidebar';
import { Container, Footer, Form, InputGroup, Label, Title, Wrapper } from './style';
import type { FormValueProps } from './type/type';

const RegisterClient = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FormValueProps>();

  const onSubmit = async (data: FormValueProps) => {
    const newUser = {
      fullname: data.fullname,
      cpf: data.cpf,
      email: data.email,
      birthDate: data.birthDate,
      phone: data.phone,
      cep: data.cep,
      address: data.address,
      number: data.number,
      state: data.state,
      city: data.city,
      neighborhood: data.neighborhood,
    };

    try {
      const resp = await fetch(`http://localhost:3001/clients`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await resp.json();

      if (data) {
        toast.success('Cadastro realizado com sucesso!');
      } else {
        toast.error('Erro ao cadastrar cliente, verifique todos os campos!');
      }
    } catch {
      toast.error('Erro no servidor. Tente novamente mais tarde.');
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        fullname: '',
        cpf: '',
        email: '',
        birthDate: '',
        phone: '',
        cep: '',
        address: '',
        number: '',
        state: '',
        city: '',
        neighborhood: '',
      });
    }
  }, [isSubmitSuccessful]);

  return (
    <Wrapper>
      <SidebarComponent />
      <Container>
        <HeaderComponent text="Cadastro Cliente" hasButton={false} />
        <Title>Dados Pessoais</Title>
        <Form id="register-new-client" onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Label>Nome completo:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite o nome completo"
              padding={8}
              type="text"
              id="fullname"
              {...register('fullname', {
                required: true,
              })}
            />
          </InputGroup>
          <InputGroup>
            <Label>CPF:</Label>
            <InputComponent
              hasBorder
              noMargin
              padding={8}
              id="cpf"
              placeholder="Digite o CPF"
              {...register('cpf', {
                required: true,
              })}
              type="text"
            />
          </InputGroup>
          <InputGroup>
            <Label>Email:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite o email"
              padding={8}
              type="text"
              {...register('email', {
                required: true,
              })}
              id="email"
            />
          </InputGroup>
          <InputGroup>
            <Label>Data nascimento:</Label>
            <InputComponent
              hasBorder
              noMargin
              padding={8}
              type="date"
              {...register('birthDate', {
                required: true,
              })}
              id="birthDate"
            />
          </InputGroup>
          <InputGroup>
            <Label>Telefone:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite o telefone"
              padding={8}
              type="text"
              {...register('phone', {
                required: true,
              })}
              id="phone"
            />
          </InputGroup>
          <InputGroup>
            <Label>CEP:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite o CEP"
              padding={8}
              type="text"
              {...register('cep', {
                required: true,
              })}
              id="cep"
            />
          </InputGroup>
          <InputGroup>
            <Label>Logradouro:</Label>
            <InputComponent
              hasBorder
              noMargin
              placeholder="Digite o logradouro"
              padding={8}
              type="text"
              {...register('address', {
                required: true,
              })}
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
              {...register('number', {
                required: true,
              })}
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
              {...register('state', {
                required: true,
              })}
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
              {...register('city', {
                required: true,
              })}
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
              {...register('neighborhood', {
                required: true,
              })}
              id="neighborhood"
            />
          </InputGroup>
          <Footer>
            <button type="submit" id="save-client">
              Salvar
            </button>
            <button id="clear">Limpar</button>
          </Footer>
        </Form>
      </Container>

      <ToastContainer position="top-right" autoClose={1000} />
    </Wrapper>
  );
};

export default RegisterClient;
