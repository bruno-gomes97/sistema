import { Cotainer } from './style';

interface EmptyStateProps {
  message?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const EmptyState = ({ message, description, icon, children }: EmptyStateProps) => {
  return (
    <Cotainer>
      <div>{icon}</div>
      <h2>{message}</h2>
      <p>{description}</p>
      {children}
    </Cotainer>
  );
};

export default EmptyState;
