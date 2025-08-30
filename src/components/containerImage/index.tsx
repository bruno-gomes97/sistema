import { Box } from 'lucide-react';

import { EmptyImageContainer } from './style';

const EmptyImage = () => {
  return (
    <EmptyImageContainer>
      <Box size={48} />
      Imagem não disponível
    </EmptyImageContainer>
  );
};

export default EmptyImage;
