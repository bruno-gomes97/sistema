import { Container, Input, Label } from './style';

interface InputProps {
  type?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  label?: string;
}

const InputComponent = ({ type, id, placeholder, required, label }: InputProps) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} required={required} />
    </Container>
  );
};

export default InputComponent;
