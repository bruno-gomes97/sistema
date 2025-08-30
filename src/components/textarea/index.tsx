import { Label, Textarea, Wrapper } from './style';

interface TextareaProps {
  className?: string;
  id?: string;
  placeholder?: string;
  label?: string;
  register?: any;
}

const TextareaComponent = ({ className, id, placeholder, label, register }: TextareaProps) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Textarea className={className} id={id} placeholder={placeholder} {...register} />
    </Wrapper>
  );
};

export default TextareaComponent;
