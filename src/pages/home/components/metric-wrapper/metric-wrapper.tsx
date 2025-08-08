import type React from 'react';

import { ContainerMetric, IconContainer, MetricValue } from './style';

interface MetricWrapperProps {
  items: Array<{
    id: number;
    name: string;
    value: string;
    icon: React.ReactNode;
  }>;
  isOpen: boolean;
}

const MetricWrapper = ({ items, isOpen }: MetricWrapperProps) => {
  return (
    <div className="flex justify-between">
      {items.map(item => (
        <ContainerMetric key={item.id}>
          <IconContainer>{item.icon}</IconContainer>
          <MetricValue>
            {isOpen ? (
              <p className="text-center font-bold">{item.value}</p>
            ) : (
              <p className="text-center font-bold">- - - - - - -</p>
            )}
            <p className="text-center">{item.name}</p>
          </MetricValue>
        </ContainerMetric>
      ))}
    </div>
  );
};

export default MetricWrapper;
