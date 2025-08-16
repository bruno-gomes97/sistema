import { useEffect, useState } from 'react';

import type { TProduct } from '../components/generic-table/type/type';
import { getProducts } from '../service/product/product';

const useProduct = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);
  return { products, loading };
};

export default useProduct;
