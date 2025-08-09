import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home/home.page';
import Login from '../pages/login/login.page';
import ProductsPage from '../pages/products/products.page';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
