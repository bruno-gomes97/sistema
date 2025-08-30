import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useCreate<T>(createFn: (data: T) => Promise<any>, options?: { redirectTo?: string }) {
  const navigate = useNavigate();

  const onSubmit = async (data: T) => {
    try {
      await createFn(data);
      toast.success('Cadastro realizado com sucesso!');
      if (options?.redirectTo) {
        navigate(options.redirectTo);
      }
    } catch (error: any) {
      toast.error(`${error.message}`);
    }
  };

  return { onSubmit };
}
