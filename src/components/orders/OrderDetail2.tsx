import React from "react";
import {
  DateField,
  Edit,
  EditProps,
  FormWithRedirect,
  Labeled,
  ReferenceField,
  TextField,
} from "react-admin";
import { Link as RouterLink } from "react-router-dom";
import { Card, CardContent, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";

import { Order, Customer } from "../../types";
import MobileField from "../../snippet/MobileField";
import Basket from "../../snippet/Basket";
import CustomerLinkField from "../../snippet/CustomerLinkField";
import Printer from "../../snippet/Printer";
import EspaceCard from "../../snippet/EspaceCard";
//import Basket from './Basket';
//import Totals from './Totals';

interface OrderTitleProps {
  record?: Order;
}

const OrderTitle: React.FC<OrderTitleProps> = ({ record }) => {
  return record ? <span>{record.ref}</span> : null;
};

const CustomerDetails = ({ record }: { record?: Customer }) => (
  <Box display="flex" flexDirection="column">
    <Typography
      component={RouterLink}
      color="primary"
      to={`/clients/${record?.id}`}
      style={{
        textDecoration: "none",
        textAlign: "center",
        marginRight: "5px",
      }}
    >
      {record?.fullname}
    </Typography>
    <MobileField record={record} />
  </Box>
);

const CustomerAddress = ({ record }: { record?: Customer }) => (
  <Grid container direction="row" alignItems="center">
    <div style={{ display: "flex", alignItems: "center" }}>
      <HomeIcon
        style={{ color: "#e70681", fontSize: "1.2rem", marginRight: "5px" }}
      />
      <Typography variant="body2" component="p">
        {record?.address}
      </Typography>
    </div>
  </Grid>
);

const useEditStyles = makeStyles({
  root: { alignItems: "flex-start" },
});
const useStyles = makeStyles({
  ddItems: {
    display: "flex",
  },
  presantArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "11px",
  },
  labeldd: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "10px",
    "& div": {
      padding: "0px",
    },
  },
});

const Spacer = () => <Box m={1}>&nbsp;</Box>;

const OrderForm = (props: any) => {
  const classes = useStyles();
  return (
    <FormWithRedirect
      {...props}
      render={(formProps: any) => (
        <Box maxWidth="50em">
          <Card>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <EspaceCard />
                  <Grid container>
                    <Grid item xs={4} className={classes.ddItems}>
                      <Labeled
                        label="Date"
                        resource="commandes"
                        className={classes.labeldd}
                      >
                        <DateField
                          source="published_at"
                          resource="commandes"
                          record={formProps.record}
                        />
                      </Labeled>
                    </Grid>
                    <Grid item xs={3} className={classes.ddItems}>
                      <Labeled
                        label="Reference"
                        source="ref"
                        resource="commandes"
                        className={classes.labeldd}
                      >
                        <TextField
                          source="id"
                          resource="commandes"
                          record={formProps.record}
                        />
                      </Labeled>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Card style={{ minHeight: "164px" }}>
                    <CardContent>
                      <Typography
                        style={{ textAlign: "center" }}
                        variant="h6"
                        gutterBottom
                      >
                        Client
                      </Typography>
                      <ReferenceField
                        source="client"
                        resource="commandes"
                        reference="clients"
                        basePath="/clients"
                        record={formProps.record}
                        link={false}
                      >
                        <CustomerDetails />
                      </ReferenceField>

                      <ReferenceField
                        source="client"
                        resource="commandes"
                        reference="clients"
                        basePath="/clients"
                        record={formProps.record}
                        link={false}
                      >
                        <CustomerAddress />
                      </ReferenceField>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Spacer />
              <Box>
                <Basket record={formProps.record} />
              </Box>

              <div className={classes.presantArea}>
                <h4 style={{ marginRight: "5px" }}>Presentant: </h4>
                <ReferenceField
                  source="presentant"
                  resource="commandes"
                  reference="presentants"
                  basePath="/presentants"
                  record={formProps.record}
                  link={false}
                >
                  <CustomerLinkField />
                </ReferenceField>
              </div>
            </CardContent>
            {/* <Toolbar
              record={formProps.record}
              basePath={formProps.basePath}
              undoable={true}
              invalid={formProps.invalid}
              handleSubmit={formProps.handleSubmit}
              saving={formProps.saving}
              resource="commandes"
            /> */}
          </Card>
        </Box>
      )}
    />
  );
};
const OrderDetail: React.FC<EditProps | any> = (props) => {
  const classes = useEditStyles();
  return (
    <Printer>
      <Edit title={<OrderTitle />} classes={classes} {...props} component="div">
        <OrderForm />
      </Edit>
    </Printer>
  );
};

export default OrderDetail;
