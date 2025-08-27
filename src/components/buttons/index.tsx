import { StyleButton } from './style';

interface ButtonProps {
  children: React.ReactNode;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, id, type = 'button', onClick, className }: ButtonProps) => {
  return (
    <StyleButton id={id} type={type} onClick={onClick} className={className}>
      {children}
    </StyleButton>
  );
};

export default Button;
