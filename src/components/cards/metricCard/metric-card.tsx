import CardBase from '..';
import { Content, Description, Header, Value } from './style';

export interface MetricCardProps {
  title?: string;
  icon?: React.ReactNode;
  value?: string | number;
  description?: string;
}

const MetricCard = ({ title, icon, value, description }: MetricCardProps) => {
  return (
    <>
      <CardBase>
        <Header>
          <h2>{title}</h2>
          {icon}
        </Header>
        <Content>
          <Value>{value}</Value>
          <Description>{description}</Description>
        </Content>
      </CardBase>
    </>
  );
};

export default MetricCard;
