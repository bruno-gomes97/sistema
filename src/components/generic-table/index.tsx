import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import type { TProduct } from './type/type';

interface ProductTableProps {
  products: TProduct[];
}

const GenericTable = ({ products }: ProductTableProps) => {
  return (
    <TableContainer component={Paper} style={{ width: '80%', height: '330px', overflow: 'auto' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {[
              'Cód.',
              'Descrição',
              'Cor',
              'Tamanho',
              'Categoria',
              'Marca',
              'P. Custo',
              'P. Venda',
              'Qtd.',
              'Data entrada',
            ].map(title => (
              <TableCell
                key={title}
                align="center"
                style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'var(--primary)' }}
              >
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row: TProduct) => (
            <TableRow key={row.code}>
              <TableCell align="center">{row.code}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.color}</TableCell>
              <TableCell align="center">{row.size}</TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.brand}</TableCell>
              <TableCell align="center">{row.costPrice}</TableCell>
              <TableCell align="center">{row.salePrice}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{new Date(row.entryDate).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GenericTable;
