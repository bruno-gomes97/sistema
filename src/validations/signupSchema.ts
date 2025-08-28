import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  fullname: yup.string().required('O nome é obrigatório!'),
  email: yup.string().email('Email inválido!').required('O email é obrigatório!'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres!').required('A senha é obrigatória!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais!')
    .required('A confirmação de senha é obrigatória!'),
});
