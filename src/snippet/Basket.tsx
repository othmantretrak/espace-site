import * as React from "react";
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

import { AppState, Order, Product } from "../types";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
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
});

const Basket: FC<FieldProps<Order>> = ({ record }) => {
  console.log({ recordddddd: record?.articles });
  //const articles: { id: string; qty: string }[] = JSON.parse(record?.articles);
  const articles: { id: string; qty: string }[] = record?.articles;

  const qty = articles.map((x) => x.qty);
  const idds = articles.map((x) => x.id);
  const classes = useStyles();

  const { loaded, data: products } = useQueryWithStore<AppState>(
    {
      type: "getMany",
      resource: "products",
      payload: {
        ids: record ? idds : [],
      },
    },
    {},
    (state) => {
      const productIds: string[] = record ? idds : [];

      return productIds
        .map<Product>(
          (productId) =>
            state.admin.resources.products.data[productId] as Product
        )
        .filter((r) => typeof r !== "undefined")
        .reduce((prev, next) => {
          prev[next.id] = next;
          return prev;
        }, {} as { [key: string]: Product });
    }
  );

  if (!loaded || !record) return null;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell>name</StyledTableCell>
          <StyledTableCell className={classes.rightAlignedCell}>
            Prix
          </StyledTableCell>
          <StyledTableCell className={classes.rightAlignedCell}>
            quantity
          </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {idds.map(
          (item: any, index) =>
            products[item] && (
              <StyledTableRow key={item}>
                <StyledTableCell>
                  <Link to={`/products/${products[item].id}`}>
                    {products[item].name}
                  </Link>
                </StyledTableCell>
                <StyledTableCell className={classes.rightAlignedCell}>
                  {products[item].price.toLocaleString(undefined, {
                    style: "currency",
                    currency: "MAD",
                  })}
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

export default Basket;
