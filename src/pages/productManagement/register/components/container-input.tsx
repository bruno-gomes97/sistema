import { Container } from './style';

interface ContainerInputProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ContainerInput = ({ title, children, className }: ContainerInputProps) => {
  return (
    <Container className={className}>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

export default ContainerInput;
