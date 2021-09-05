import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import SiteHeader from "./components/SiteHeader";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";
import Orders from "./components/orders/Orders";
import Presentants from "./components/users/Presentants";
import Clients from "./components/clients/Clients";
import Products from "./components/products/Products";
import ClientDetail from "./components/clients/ClientDetail";
import OrderDetail from "./components/orders/OrderDetail";
import ProductDetail from "./components/products/ProductDetail";
import PresentantDetail from "./components/users/PresentantDetail";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "http://localhost:1337/graphql",
  }),
});

const App = () => (
  <Router>
    <ApolloProvider client={client}>
      <Layout>
        <SiteHeader />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route exact path="/presentants">
            <Presentants />
          </Route>
          <Route exact path="/clients">
            <Clients />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/orders/:id">
            <OrderDetail />
          </Route>
          <Route path="/clients/:id">
            <ClientDetail />
          </Route>
          <Route path="/presentants/:id">
            <PresentantDetail />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </Layout>
    </ApolloProvider>
  </Router>
);

export default App;
