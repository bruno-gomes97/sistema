import { Funnel } from 'lucide-react';

import { Button, HeaderContainer } from './style';

interface HeaderProps {
  text?: string;
  label?: string;
  hasButton?: boolean;
  onButtonClick?: () => void;
}

const HeaderComponent = ({ text, label, hasButton = true, onButtonClick }: HeaderProps) => {
  return (
    <HeaderContainer hasBackground>
      <div>
        <p>{text}</p>
      </div>
      {hasButton && (
        <Button onClick={onButtonClick}>
          {label} <Funnel size={18} />
        </Button>
      )}
    </HeaderContainer>
  );
};

export default HeaderComponent;
