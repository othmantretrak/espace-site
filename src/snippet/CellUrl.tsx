import React from "react";
import { DataGrid, GridColDef, GridCellParams } from "@material-ui/data-grid";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function CellUrl({ text, to }: any) {
  return (
    <TableCell component="div">
      <Link to={to}>{text}</Link>
    </TableCell>
  );
}

export default CellUrl;
