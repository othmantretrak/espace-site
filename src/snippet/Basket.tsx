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
import TableOrder from "../components/orders/TableOrder";

const useStyles = makeStyles({
  rightAlignedCell: { textAlign: "right" },
  twoTable: {
    minWidth: 650,
    display: "flex",
    alignItems: "start",
  },
  table2: {
    //minWidth: 650,
    "& th": {
      borderLeft: "none",
    },
    "& td": {
      borderLeft: "none",
    },
  },
  table1: {
    "& td": {
      //borderLeft: "none",
    },
  },
});

function parseData(data: any) {
  if (!data) return {};
  if (typeof data === "object") return data;
  if (typeof data === "string") {
    try {
      return JSON.parse(data);
    } catch (error) {
      return error;
    }
  }

  return {};
}

export interface Cart {
  cart: { id: string; qty: string }[];
}

const Basket: FC<FieldProps<Order>> = ({ record }) => {
  //console.log({ recordddddd: parseData(record?.articles) });
  //const articles: { id: string; qty: string }[] = JSON.parse(record?.articles);
  const articles: Cart = parseData(record?.articles);
  //articles.cart.map

  const qty = articles.cart.map((x) => x.qty);
  const idds = articles.cart.map((x) => x.id);
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
  let array1: string[] = [];
  let array2: string[] = [];
  if (idds.length > 10) {
    array1 = idds.slice(0, 10);

    array2 = idds.slice(10, 10 + idds.length);
  } else {
    array1 = idds;
  }

  return (
    <div className={classes.twoTable}>
      <TableOrder
        array={array1}
        className={classes.table1}
        products={products}
        qty={qty}
      />
      {idds.length > 10 && (
        <TableOrder
          className={classes.table2}
          array={array2}
          products={products}
          qty={qty}
        />
      )}
    </div>
  );
};

export default Basket;
