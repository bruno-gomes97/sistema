import { Container, Input, Label } from './style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  label?: string;
  hasBorder?: boolean;
  size?: number;
  padding?: number;
  noMargin?: boolean;
}

const InputComponent = ({ type, id, placeholder, required, label, ...props }: InputProps) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} required={required} {...props} />
    </Container>
  );
};

export default InputComponent;
