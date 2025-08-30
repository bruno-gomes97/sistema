import { SquarePen, Trash2 } from 'lucide-react';

import Button from '../../buttons';
import EmptyImage from '../../containerImage';
import Tag from '../../tag';
import TagAlert from '../../tagAlert';
import { CardContent, Container, ContentWrapper, Subtitle, Wrapper } from './style';

interface InfoCardProps {
  hasImage?: boolean;
}

const InfoCard = ({ hasImage = true }: InfoCardProps) => {
  return (
    <Container>
      <header>
        <Wrapper>
          <h1>Vestido Floral</h1>
          <Subtitle>categoria - tamanho - cor</Subtitle>
        </Wrapper>
        <Wrapper>
          <Tag hasBorder label="Ativo" type="success" />
          <TagAlert />
        </Wrapper>
      </header>
      {hasImage && <EmptyImage />}

      <CardContent>
        <span>bem bonito</span>
        <ContentWrapper>
          <span>Preço de venda:</span>
          <span>R$ 100.00</span>
        </ContentWrapper>
        <ContentWrapper>
          <span>Preço de custo:</span>
          <span>R$ 100.00</span>
        </ContentWrapper>
        <ContentWrapper>
          <span>Lucro:</span>
          <span>R$ 100.00 (23.1%)</span>
        </ContentWrapper>
        <ContentWrapper>
          <span>Estoque:</span>
          <span>3 unidades</span>
        </ContentWrapper>
        <p>Marca: Exemplo</p>
      </CardContent>

      <footer>
        <Button id="edit-button">
          <SquarePen size={18} />
          Editar
        </Button>
        <Button id="deactivate-button">Desativar</Button>
        <Button id="delete-button">
          <Trash2 size={18} />
        </Button>
      </footer>
    </Container>
  );
};

export default InfoCard;
