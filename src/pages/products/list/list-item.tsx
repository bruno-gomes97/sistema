import GenericTable from '../../../components/generic-table';
import useProduct from '../../../hook/use-product';

export default function ListItem() {
  const { products, loading } = useProduct();

  if (loading) return <p>Carregando produtos...</p>;

  return <GenericTable products={products} />;
}
