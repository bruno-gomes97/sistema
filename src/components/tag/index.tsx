import { Container } from './style';

type TagProps = {
  type: 'negative' | 'success';
  hasBorder: boolean;
  label: string;
};

const Tag = ({ type, hasBorder, label }: TagProps) => {
  return (
    <Container $hasBorder={hasBorder} type={type}>
      <p>{label}</p>
    </Container>
  );
};

export default Tag;
