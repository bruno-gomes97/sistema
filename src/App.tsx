import { ToastContainer } from 'react-toastify';

import Login from './pages/login/login.page';

function App() {
  return (
    <>
      <Login />
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
}

export default App;
