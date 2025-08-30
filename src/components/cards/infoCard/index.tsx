import { SquarePen, Trash2 } from 'lucide-react';

import Button from '../../buttons';
import EmptyImage from '../../containerImage';
import Tag from '../../tag';
import TagAlert from '../../tagAlert';
import { CardContent, Container, ContentWrapper, Subtitle, Wrapper } from './style';

export interface TProduct {
  name?: string;
  category?: string;
  isActive?: boolean;
  size?: string;
  color?: string;
  description?: string;
  price?: number;
  costPrice?: number;
  stockQuantity?: number;
  brand?: string;
}
interface InfoCardProps {
  hasImage?: boolean;
  product?: Array<TProduct>;
}

const InfoCard = ({ hasImage = true, product }: InfoCardProps) => {
  return (
    <>
      {product?.map(item => (
        <Container key={item.name}>
          <header>
            <Wrapper>
              <h1>{item.name}</h1>
              <Subtitle>
                {item.category} - {item.size} - {item.color}
              </Subtitle>
            </Wrapper>
            <Wrapper>
              <Tag
                hasBorder
                label={item.isActive ? 'Ativo' : 'Inativo'}
                type={item.isActive ? 'success' : 'negative'}
              />
              <TagAlert />
            </Wrapper>
          </header>
          {hasImage && <EmptyImage />}

          <CardContent>
            <span>bem bonito</span>
            <ContentWrapper>
              <span>Preço de venda:</span>
              <span>R$ {item.price}</span>
            </ContentWrapper>
            <ContentWrapper>
              <span>Preço de custo:</span>
              <span>R$ {item.costPrice}</span>
            </ContentWrapper>
            <ContentWrapper>
              <span>Lucro:</span>
              <span>R$ 100.00 (23.1%)</span>
            </ContentWrapper>
            <ContentWrapper>
              <span>Estoque:</span>
              <span>{item?.stockQuantity} unidades</span>
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
      ))}
    </>
  );
};

export default InfoCard;
