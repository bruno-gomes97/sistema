import CardBase from '..';
import Button from '../../buttons';
import { Container, Header, Title } from './style';

interface ActionCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactElement;
  text?: string;
  handleClick?: () => void;
}

const ActionCard = ({ title, description, icon, text, handleClick }: ActionCardProps) => {
  return (
    <Container>
      <CardBase>
        <Header>
          <Title>{title}</Title>
          <p>{description}</p>
        </Header>
        <Button onClick={handleClick} className="action-button" id={`action-button-${title}`}>
          {icon}
          {text}
        </Button>
      </CardBase>
    </Container>
  );
};

export default ActionCard;
