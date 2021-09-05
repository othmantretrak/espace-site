import * as React from "react";
import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, FieldProps, useTranslate, useQueryWithStore } from "react-admin";

import { AppState, Order, Product } from "../../types";
import { loadProduct } from "../../utils/extrctProduct";

const useStyles = makeStyles({
  rightAlignedCell: { textAlign: "right" },
});

const Basket: FC<FieldProps<Order>> = ({ record }) => {
  const [items, setitems] = React.useState<any>([]);
  console.log({ articles: record?.articles });
  React.useEffect(() => {
    const data = loadProduct(record?.articles);

    setitems(data);
  }, []);
  const classes = useStyles();
  const translate = useTranslate();
  console.log({ record });

  console.log({ items });

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            {translate("resources.commands.fields.basket.reference")}
          </TableCell>
          <TableCell className={classes.rightAlignedCell}>
            {translate("resources.commands.fields.basket.unit_price")}
          </TableCell>
          <TableCell className={classes.rightAlignedCell}>
            {translate("resources.commands.fields.basket.quantity")}
          </TableCell>
          <TableCell className={classes.rightAlignedCell}>
            {translate("resources.commands.fields.basket.total")}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items &&
          items.map((item: any) => (
            <TableRow key={item.product.id}>
              <TableCell>
                <Link to={`/products/${item.product.id}`}>
                  {item.product.ref}
                </Link>
              </TableCell>
              <TableCell className={classes.rightAlignedCell}>
                {item.product.price.toLocaleString(undefined, {
                  style: "currency",
                  currency: "USD",
                })}
              </TableCell>
              <TableCell className={classes.rightAlignedCell}>
                {item.qte}
              </TableCell>
              <TableCell className={classes.rightAlignedCell}>
                {(item.product.price * item.qte).toLocaleString(undefined, {
                  style: "currency",
                  currency: "USD",
                })}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default Basket;
