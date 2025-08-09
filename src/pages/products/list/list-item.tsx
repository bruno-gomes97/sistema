import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(
  id: number,
  name: string,
  color: string,
  size: string,
  category: string,
  brand: string,
  costPrice: number,
  salePrice: number,
  quantity: number,
  entryDate: string
) {
  return { id, name, color, size, category, brand, costPrice, salePrice, quantity, entryDate };
}

const rows = [
  createData(3, 'CAMISETA NARUTO', 'PRETA', 'G', 'CAMISETA', 'CN', 25.5, 49.9, 15, '2022-02-15'),
  createData(4, 'CALÇA JEANS SKINNY', 'AZUL', 'M', 'CALÇA', 'DENIM', 65.0, 129.9, 12, '2022-03-10'),
  createData(5, 'VESTIDO FLORAL', 'VERMELHO', 'P', 'VESTIDO', 'MODA FEM', 78.2, 159.9, 8, '2022-04-05'),
  createData(6, 'JAQUETA JEANS', 'AZUL CLARO', 'G', 'JAQUETA', 'DENIM', 120.0, 219.9, 5, '2022-05-01'),
  createData(7, 'BONÉ ADIDAS', 'BRANCO', 'U', 'ACESSÓRIO', 'SPORTS', 35.0, 69.9, 20, '2022-06-12'),
  createData(8, 'TÊNIS NIKE AIR', 'PRETO', '42', 'CALÇADO', 'SPORTS', 199.0, 349.9, 6, '2022-07-25'),
  createData(9, 'SAIA MIDI', 'BEGE', 'M', 'SAIA', 'MODA FEM', 55.0, 109.9, 10, '2022-08-15'),
  createData(10, 'CAMISETA DRAGON BALL', 'LARANJA', 'G', 'CAMISETA', 'CN', 27.0, 54.9, 18, '2022-09-09'),
  createData(11, 'MOLETOM CANGURU', 'CINZA', 'GG', 'MOLETOM', 'WINTER', 85.0, 169.9, 9, '2022-10-30'),
  createData(12, 'CAMISA SOCIAL', 'BRANCA', 'M', 'CAMISA', 'FORMAL', 60.0, 119.9, 14, '2022-11-20'),
  createData(13, 'SHORTS JEANS', 'AZUL ESCURO', 'P', 'SHORTS', 'DENIM', 40.0, 89.9, 16, '2022-12-05'),
];

export default function ListItem() {
  return (
    <TableContainer component={Paper} style={{ width: '80%', height: '330px', overflow: 'auto' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'var(--primary)' }}>
              Cód.
            </TableCell>
            <TableCell align="center" style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'var(--primary)' }}>
              Descrição
            </TableCell>
            <TableCell align="center" style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'var(--primary)' }}>
              Cor
            </TableCell>
            <TableCell align="center" style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'var(--primary)' }}>
              Tamanho
            </TableCell>
            <TableCell align="center" style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'var(--primary)' }}>
              Categoria
            </TableCell>
            <TableCell align="center" style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'var(--primary)' }}>
              Marca
            </TableCell>
            <TableCell align="center" style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'var(--primary)' }}>
              P. Custo
            </TableCell>
            <TableCell align="center" style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'var(--primary)' }}>
              P. Venda
            </TableCell>
            <TableCell align="center" style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'var(--primary)' }}>
              Qtd.
            </TableCell>
            <TableCell align="center" style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'var(--primary)' }}>
              Data entrada
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.color}</TableCell>
              <TableCell align="center">{row.size}</TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.brand}</TableCell>
              <TableCell align="center">{row.costPrice}</TableCell>
              <TableCell align="center">{row.salePrice}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.entryDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
