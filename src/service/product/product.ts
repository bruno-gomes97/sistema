import axios from 'axios';

export const getProducts = async () => {
  const response = await axios.get(`http://localhost:3001/products`);
  return response.data;
};

export const getProductByCode = async (code: string) => {
  const response = await axios.get(`http://localhost:3001/products?code=${encodeURIComponent(code)}`);
  return response.data;
};
