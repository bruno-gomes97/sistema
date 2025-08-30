import { StatisticContainer, Wrapper } from './style';

interface StatisticProps {
  items: StatisticItem[];
}

export interface StatisticItem {
  label: string;
  value: number;
}

const Statistic = ({ items }: StatisticProps) => {
  return (
    <StatisticContainer>
      <h1>Estatísticas</h1>
      <Wrapper>
        {items?.map(item => (
          <div className="flex flex-col items-center" key={item.label}>
            <span>{item.value}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </Wrapper>
    </StatisticContainer>
  );
};

export default Statistic;
