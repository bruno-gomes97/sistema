import styled from 'styled-components';

export const ContainerMetric = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  height: 70px;
`;

export const IconContainer = styled.div`
  width: 70px;
  height: 100%;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const MetricValue = styled.p`
  height: 100%;
  width: 140px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--metric-card-bg);
  padding: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  p:first-child {
    font-size: 20px;
  }
`;
