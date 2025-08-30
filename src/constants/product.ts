export type ProductCategory =
  | 'VESTIDOS'
  | 'BLUSAS'
  | 'CALCAS'
  | 'SAIAS'
  | 'SHORTS'
  | 'CASACOS'
  | 'ACESSORIOS'
  | 'CALCADOS'
  | 'OUTROS';

export type ProductSize = 'PP' | 'P' | 'M' | 'G' | 'GG' | 'XG' | 'UNICO';

export const PRODUCT_CATEGORY_LABEL: Record<ProductCategory, string> = {
  VESTIDOS: 'Vestidos',
  BLUSAS: 'Blusas',
  CALCAS: 'Calças',
  SAIAS: 'Saias',
  SHORTS: 'Shorts',
  CASACOS: 'Casacos',
  ACESSORIOS: 'Acessórios',
  CALCADOS: 'Calçados',
  OUTROS: 'Outros',
};

export const PRODUCT_SIZE_LABEL: Record<ProductSize, string> = {
  PP: 'PP',
  P: 'P',
  M: 'M',
  G: 'G',
  GG: 'GG',
  XG: 'XG',
  UNICO: 'Único',
};
