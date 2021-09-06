// in src/App.js
import * as React from "react";
import {
  fetchUtils,
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import TocIcon from "@material-ui/icons/Toc";
import GroupIcon from "@material-ui/icons/Group";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

import simpleRestProvider from "./ra-strapi-rest";
import authProvider from "./helpers/authProvider";
import Cookies from "./helpers/Cookies";
import {
  OrderList,
  CommandeEdit,
  CommandeCreate,
  OrderShow,
  OrderEdit,
} from "./components/orders/Orders";
import {
  PresentantCreate,
  PresentantEdit,
  PresentantList,
  PresentantShow,
} from "./components/users/Presentants";
import {
  ClientEdit,
  ClientList,
  ClientShow,
} from "./components/clients/Clients";
import {
  ProductCreate,
  productEdit,
  ProductList,
  ProductShow,
} from "./components/products/Products";
import LoginPage from "./components/LoginPage";
import ProductDetail from "./components/products/ProductDetail";
import OrderDetail from "./components/orders/OrderDetail";
const uploadFields = ["image", "avatar"];
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = Cookies.getCookie("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const strapUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_STRAPI_URL
    : "http://localhost:1337";
const dataProvider = simpleRestProvider(strapUrl, httpClient, uploadFields);
const App = () => (
  <Admin
    loginPage={LoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="commandes"
      list={OrderList}
      //edit={OrderEdit}
      show={OrderShow}
      //create={CommandeCreate}
      icon={TocIcon}
    />
    <Resource
      name="clients"
      list={ClientList}
      edit={ClientEdit}
      show={ClientShow}
      icon={GroupIcon}
    />
    <Resource
      name="presentants"
      edit={PresentantEdit}
      show={PresentantShow}
      list={PresentantList}
      create={PresentantCreate}
      icon={GroupAddIcon}
    />
    <Resource
      name="products"
      list={ProductList}
      edit={productEdit}
      show={ProductShow}
      create={ProductCreate}
      icon={LibraryBooksIcon}
    />
  </Admin>
);

export default App;
