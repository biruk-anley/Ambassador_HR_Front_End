import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import  { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const columns = [
    
    {
        id: 'Name',
        label: 'Name',
        minWidth: 10
    },
    { id: 'Position',
    label: 'Position',
    minWidth: 10,
        align: 'center',
    },
    { id: 'Salary',
    label: 'Salary',
    minWidth: 10,
    align: 'center', },

   
  
  {
    id: 'Status',
    label: 'Status',
    minWidth: 10,
    align: 'right',
    
    },
   
  {
    id: 'Evaluation',
    label: 'Evaluation',
    minWidth: 10,
    align: 'right',
 
  },
];

function createData(Name, Position, Salary, Status, Evaluation) {

  return { Name, Position, Salary , Status, Evaluation };
}

const rows = [
  createData('Solomon Aregay', 'Admnstartion', 25000, "Paid", "Payment Completed"),
  createData('Debeb Asefa', 'Industrial Marketing',25000, "Unpaid", "Unfinished Project"),
  createData('Amanuael Kebede', 'IT', 10000, "Unpaid", "Unfinished Project"),
  createData('Samrawit Mekuanint', 'Finance', 15000, "Paid", "Payment Completed"),
  createData('Duresa Megersa', 'Management', 15000, "Unpaid", "Unfinished Project"),
  createData('Kalab Degsew', 'IT', 18000, "Unpaid", "Unfinished Project"),
  createData('helen Aregay', 'Management', 17000, "Unpaid", "Unfinished Project"),
  createData('Mekonen Demeke', 'Accountant', 15000, "Unpaid", "Unfinished Project"),
  createData('Samson Ferede', 'Industrial Marketing', 15000, "Paid", "Payment Completed"),
  createData('Bzunesh Abebe', 'Human resource', 17000, "Unpaid", "Unfinished Project"),
  createData('Solomon ayalew', 'Managment', 15000, "Paid", "Payment Completed"),
  createData('Finiet Abeba', 'Admnstration', 15000, "Unpaid", "Unfinished Project"),
  createData('Mekonen Demekee', 'Industrial Marketing', 15000, "Unpaid", "Unfinished Project"),
  createData('Abebe Aregay', 'finance', 18000, "Unpaid", "Unfinished Project"),
  createData('Demeke Solomon', 'It', 15000, "Unpaid", "Unfinished Project"),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '95%', overflow: 'hidden' ,marginLeft:'40px' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}