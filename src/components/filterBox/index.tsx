import { Plus } from 'lucide-react';

import Button from '../buttons';
import { Container, Header, Subtitle, Title } from './style';

interface FilterBoxProps {
  hasHeader?: boolean;
  titleHeader?: string;
  subtitleHeader?: string;
  textButton?: string;
  children?: React.ReactNode;
}

const FilterBox = ({ children, hasHeader, titleHeader, subtitleHeader, textButton }: FilterBoxProps) => {
  return (
    <>
      {hasHeader && (
        <Header>
          <div>
            <Title>{titleHeader}</Title>
            <Subtitle>{subtitleHeader}</Subtitle>
          </div>
          <Button type="button" id="btn-add-product">
            <Plus size={18} /> {textButton}
          </Button>
        </Header>
      )}
      <Container>{children}</Container>
    </>
  );
};

export default FilterBox;
