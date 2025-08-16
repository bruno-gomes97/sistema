import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '../App';
import RegisterClient from '../pages/client/page.register.client';
import HomePage from '../pages/home/home.page';
import ProductsPage from '../pages/products/products.page';
import SalesPage from '../pages/sales/sales.page';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/register-client" element={<RegisterClient />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
