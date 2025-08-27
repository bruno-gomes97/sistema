import { Container } from './style';

interface CardBaseProps {
  children: React.ReactNode;
  id?: string;
}

const CardBase = ({ children, id }: CardBaseProps) => {
  return <Container id={id}>{children}</Container>;
};

export default CardBase;
