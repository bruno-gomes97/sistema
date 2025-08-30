import { supabase } from '../../supabaseClient';

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
  updated_at?: string;
  cost_price: number;
  stock_quantity: number;
  category: string;
  size?: string;
  color?: string;
  brand?: string;
  image_url?: string;
  is_active: boolean;
};

export const createProduct = async (user: Omit<ProductType, 'id' | 'created_at'>) => {
  const { data: product } = await supabase.from('products').insert([
    {
      name: user.name,
      description: user.description,
      price: user.price,
      cost_price: user.cost_price,
      stock_quantity: user.stock_quantity,
      category: user.category,
      size: user.size,
      color: user.color,
      brand: user.brand,
      image_url: user.image_url,
      is_active: user.is_active,
    },
  ]);

  // Verifica se o produto já existe na tabela "products"
  const { data: existingProduct, error: selectError } = await supabase
    .from('products')
    .select('id')
    .eq('name', user.name)
    .maybeSingle();

  if (selectError) {
    throw new Error(selectError.message);
  }

  if (existingProduct) {
    throw new Error('Produto já cadastrado');
  }

  return product;
};
