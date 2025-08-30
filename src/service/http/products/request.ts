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
  // Primeiro verifica se já existe produto com mesmo nome
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

  // Se não existe, insere
  const { data: product, error: insertError } = await supabase
    .from('products')
    .insert([
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
    ])
    .select()
    .single(); // retorna só o registro inserido

  if (insertError) {
    throw new Error(insertError.message);
  }

  return product;
};

export const getQuantityProducts = async () => {
  const { data: products } = await supabase.from('products').select('id');
  return products?.length || 0;
};

export const getLowStockProducts = async () => {
  const { data: products } = await supabase.from('products').select('id, stock_quantity').lt('stock_quantity', 5); // Exemplo: produtos com menos de 5 em estoque

  return products || [];
};

export const getProductStatistics = async () => {
  const response = await supabase.from('products').select('*', { count: 'exact' });

  return {
    totalProducts: response.count || 0,
    activeProducts: response?.data?.filter((product: ProductType) => product.is_active).length || 0,
    totalInStock: response?.data?.reduce((acc: number, product: ProductType) => acc + product.stock_quantity, 0) || 0,
    category: response?.data?.reduce((acc: Record<string, number>, product: ProductType) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {}),
  };
};

export const getAllProducts = async () => {
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return products || [];
};
