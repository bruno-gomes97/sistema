import { LogOut, MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Button from '../buttons';
import { Header, Title, Wrapper } from './style';

interface HeaderProps {
  variant?: 'dashboard' | 'default';
  title?: string;
}

const HeaderComponent = ({ variant = 'dashboard', title }: HeaderProps) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  return (
    <Header>
      <Title>{title}</Title>
      {variant === 'dashboard' && (
        <>
          <Wrapper>
            <span>Olá, nome do usuário</span>
            <Button id="btn-logout" onClick={handleLogout}>
              <LogOut size={'20'} />
              Sair
            </Button>
          </Wrapper>
        </>
      )}

      {variant === 'default' && (
        <>
          <Wrapper>
            <Button onClick={() => navigate('/dashboard')} id="btn-back">
              <MoveLeft size={'20'} />
              Voltar ao Dashboard
            </Button>
          </Wrapper>
        </>
      )}
    </Header>
  );
};

export default HeaderComponent;
