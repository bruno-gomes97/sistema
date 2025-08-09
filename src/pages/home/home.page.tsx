import HeaderComponent from '../../components/generic-header';
import SidebarComponent from '../../components/generic-sidebar';
import Dashboard from './components/dashboard/dashboard';
import QuickActionsPanel from './components/quik-actions/quick-actions-panel';
import { Container } from './style';

const HomePage = () => {
  return (
    <div className="flex">
      <SidebarComponent />
      <Container>
        <HeaderComponent hasButton={false} text="Olá, bem-vindo(a)!" />
        <Dashboard />
        <QuickActionsPanel />
      </Container>
    </div>
  );
};

export default HomePage;
