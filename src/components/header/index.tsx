import { LogOut, MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Button from '../buttons';
import { Header, Title, Wrapper } from './style';

interface HeaderProps {
  variant?: 'dashboard' | 'default';
}

const HeaderComponent = ({ variant = 'dashboard' }: HeaderProps) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  return (
    <Header>
      <Title>Boutique Feminina</Title>
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
            <Button onClick={() => navigate(-1)} id="btn-back">
              <MoveLeft size={'20'} />
              Voltar ao Dashboar
            </Button>
          </Wrapper>
        </>
      )}
    </Header>
  );
};

export default HeaderComponent;
