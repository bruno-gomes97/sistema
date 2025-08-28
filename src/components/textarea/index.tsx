import { Label, Textarea, Wrapper } from './style';

interface TextareaProps {
  className?: string;
  id?: string;
  placeholder?: string;
  label?: string;
}

const TextareaComponent = ({ className, id, placeholder, label }: TextareaProps) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Textarea className={className} id={id} placeholder={placeholder} />
    </Wrapper>
  );
};

export default TextareaComponent;
