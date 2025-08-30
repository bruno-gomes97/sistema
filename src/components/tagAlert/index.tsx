import { TriangleAlert } from 'lucide-react';

import { Container } from './style';

const TagAlert = () => {
  return (
    <Container>
      <TriangleAlert size={14} />
      <span>Baixo estoque</span>
    </Container>
  );
};

export default TagAlert;
