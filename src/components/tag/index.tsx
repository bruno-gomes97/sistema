import { Container } from './style';

type TagProps = {
  type: 'info' | 'negative' | 'success' | 'warning';
  hasBorder: boolean;
  label: string;
};

const Tag = ({ type, hasBorder, label }: TagProps) => {
  return (
    <Container hasBorder={hasBorder} type={type}>
      <p>{label}</p>
    </Container>
  );
};

export default Tag;
