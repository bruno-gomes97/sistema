import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Button from '../buttons';
import MetricCard, { type MetricCardProps } from '../cards/metricCard/metric-card';
import { Container, Header, Subtitle, Title } from './style';

interface FilterBoxProps {
  hasHeader?: boolean;
  titleHeader?: string;
  subtitleHeader?: string;
  textButton?: string;
  children?: React.ReactNode;
  hasMetricCard?: boolean;
  metricCards?: MetricCardProps[];
}

const FilterBox = ({
  children,
  hasHeader,
  titleHeader,
  subtitleHeader,
  textButton,
  hasMetricCard = false,
  metricCards = [],
}: FilterBoxProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/register-${titleHeader?.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <>
      {hasHeader && (
        <Header>
          <div>
            <Title>{titleHeader}</Title>
            <Subtitle>{subtitleHeader}</Subtitle>
          </div>
          <Button onClick={handleClick} type="button" id="btn-add-product">
            <Plus size={18} /> {textButton}
          </Button>
        </Header>
      )}
      {hasMetricCard && (
        <>
          {metricCards.length > 0 && (
            <>
              {metricCards.map((card, index) => (
                <MetricCard
                  key={index}
                  title={card.title}
                  icon={card.icon}
                  value={card.value}
                  description={card.description}
                />
              ))}
            </>
          )}
        </>
      )}
      <Container>{children}</Container>
    </>
  );
};

export default FilterBox;
