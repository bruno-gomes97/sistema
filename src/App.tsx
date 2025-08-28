import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ClientPage from './pages/clientManagement/client.page';
import RegisterClientPage from './pages/clientManagement/register/register-client.page';
import Dashboard from './pages/dashboard/dashboard.page';
import LoginPage from './pages/login/login.page';
import ProductPage from './pages/productManagement/product.page';
import RegisterProduct from './pages/productManagement/register/register-product.page';
import SignupPage from './pages/signup/signup.page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product-management" element={<ProductPage />} />
          <Route path="/register-product" element={<RegisterProduct />} />
          <Route path="/client-management" element={<ClientPage />} />
          <Route path="/register-client" element={<RegisterClientPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
