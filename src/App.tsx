import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/dashboard/dashboard.page';
import LoginPage from './pages/login/login.page';
import ProductPage from './pages/productManagement/product.page';
import SignupPage from './pages/signup/signup.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product-management" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
