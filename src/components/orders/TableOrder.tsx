import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link, FieldProps, useQueryWithStore } from "react-admin";

import { AppState, Order, Product } from "./../../types";

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: "#585353",
    border: "solid cadetblue 1.5px",
  },
  body: {
    fontSize: 14,
    border: "solid gray 1px",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  rightAlignedCell: { textAlign: "right" },
  TableCello: {
    //display: "inline-block",
    maxWidth: "26rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export interface Array {
  array: string[];
  products: any;
  qty: any;
  className?: string;
}

const TableOrder = ({ array, products, qty, className = "" }: Array) => {
  const classes = useStyles();
  return (
    <Table className={className}>
      <TableHead>
        <TableRow>
          <StyledTableCell>Désignation</StyledTableCell>
          <StyledTableCell className={classes.rightAlignedCell}>
            Quantité
          </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {array.map(
          (item, index) =>
            products[item] && (
              <StyledTableRow key={item + index}>
                {console.log({ products })}

                <StyledTableCell className={classes.TableCello}>
                  <Link to={`/products/${products[item].id}`}>
                    {products[item].name}
                  </Link>
                </StyledTableCell>

                <StyledTableCell className={classes.rightAlignedCell}>
                  {qty[index]}
                </StyledTableCell>
              </StyledTableRow>
            )
        )}
      </TableBody>
    </Table>
  );
};

export default TableOrder;
