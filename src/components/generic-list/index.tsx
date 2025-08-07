import { Link, ListContainer } from './style';

interface ListProps {
  items: Array<{
    id: number;
    label: string;
    link: string;
  }>;
}

const ListComponent = ({ items }: ListProps) => {
  return (
    <ListContainer>
      {items.map(item => (
        <Link key={item.id} href={item.link}>
          {item.label}
        </Link>
      ))}
    </ListContainer>
  );
};

export default ListComponent;
