import { Input, Label, Wrapper } from './style';

interface InputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  register?: any;
}

const InputComponent = ({ id, label, placeholder, type, className, register }: InputProps) => {
  return (
    <Wrapper className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} placeholder={placeholder} id={id} {...register} />
    </Wrapper>
  );
};

export default InputComponent;
