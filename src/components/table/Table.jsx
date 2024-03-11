import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ tableData }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Year</StyledTableCell>
            <StyledTableCell align="right">Principal (A)</StyledTableCell>
            <StyledTableCell align="right">Interest (B)</StyledTableCell>
            <StyledTableCell align="right">
              Total Payment (A + B)
            </StyledTableCell>
            <StyledTableCell align="right">Balance</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={row.interest}>
              <StyledTableCell component="th" scope="row">
                {row.year}
              </StyledTableCell>
              <StyledTableCell align="right">{row.principal}</StyledTableCell>
              <StyledTableCell align="right">{row.interest}</StyledTableCell>
              <StyledTableCell align="right">
                {row.totalPayment}
              </StyledTableCell>
              <StyledTableCell align="right">{row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
