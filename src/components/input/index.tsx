import { Input, Label, Wrapper } from './style';

interface InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
}

const InputComponent = ({ id, label, placeholder, type }: InputProps) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} placeholder={placeholder} id={id} />
    </Wrapper>
  );
};

export default InputComponent;
