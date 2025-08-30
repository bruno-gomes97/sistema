import { supabase } from '../../supabaseClient';

export type UserType = {
  id: string;
  created_at: string;
  email: string;
  fullname: string;
  updated_at?: string;
  password: string;
  confirmPassword: string;
};

export const createUser = async (user: Omit<UserType, 'id' | 'created_at'>) => {
  // Cria o usuário no Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
  });

  if (authError) {
    throw new Error(authError.message);
  }

  if (!authData.user) {
    throw new Error('Falha ao criar usuário');
  }

  // Verifica se o email já existe na tabela "users"
  const { data: existingUser, error: selectError } = await supabase
    .from('users')
    .select('id')
    .eq('email', user.email)
    .maybeSingle(); // evita erro se não existir

  if (selectError) {
    throw new Error(selectError.message);
  }

  if (existingUser) {
    throw new Error('Usuário já existe na tabela users');
  }

  // Insere dados extras na tabela "users"
  const { data, error: insertError } = await supabase
    .from('users')
    .insert([
      {
        id: authData.user.id,
        fullname: user.fullname,
        email: user.email,
        password: user.password,
      },
    ])
    .select()
    .single();

  if (insertError) {
    throw new Error(insertError.message);
  }

  return data as UserType;
};
