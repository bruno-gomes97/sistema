import { Form, Subtitle, Title } from './style';

interface FormProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onSubmit?: () => void;
}

const FormComponent = ({ title, subtitle, children, className, id, onSubmit }: FormProps) => {
  return (
    <Form className={className} id={id} onSubmit={onSubmit}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Form>
  );
};

export default FormComponent;
