import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  DateField,
  FieldProps,
  Labeled,
  ReferenceField,
  TextField,
} from "react-admin";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import MobileField from "../../snippet/MobileField";
import Printer from "../../snippet/Printer";
import { Customer, Order } from "../../types";
import EspaceCard from "../../snippet/EspaceCard";
import Basket from "../../snippet/Basket";
import CustomerLinkField from "../../snippet/CustomerLinkField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    boxShadow: "none",
    justifyContent: "center",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: 2,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    flex: 1,
    backgroundSize: "contain",
  },
  price: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px",
    paddingBottom: "8px",
    border: "#635a5c solid 1px",
    maxWidth: "190px",
    textAlign: "center",
    padding: "1px",
    justifyContent: "center",
    marginTop: "10px",
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  ddItems: {
    display: "flex",
  },
  presantArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "11px",
  },
  footerOrder: {
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "14px",
    color: "white",
  },
  s_commercial: {
    height: "100px",
    display: "flex",
    width: "30%",
    flexDirection: "column",
    textAlign: "center",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    border: "1px solid cadetblue",
  },
  s_header: {
    backgroundColor: "#9e9e9e",
    //border: "1px solid",
    flex: "1",
  },
  s_body: { flex: "4" },
  labeldd: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "10px",
    "& div": {
      padding: "0px",
    },
  },
}));

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
      <Typography
        variant="overline"
        style={{ lineHeight: "inherit" }}
        component="p"
      >
        {record?.address}
      </Typography>
    </div>
  </Grid>
);
const Spacer = () => <Box m={1}>&nbsp;</Box>;
const OrderForm = ({ record }: FieldProps<Order>) => {
  const classes = useStyles();
  return record ? (
    <Card className={classes.root}>
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
                    source="created_at"
                    resource="commandes"
                    record={record}
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
                  <TextField source="id" resource="commandes" record={record} />
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
                  record={record}
                  link={false}
                >
                  <CustomerDetails />
                </ReferenceField>

                <ReferenceField
                  source="client"
                  resource="commandes"
                  reference="clients"
                  basePath="/clients"
                  record={record}
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
          <Basket record={record} />
        </Box>
        <div className={classes.presantArea}>
          <h4 style={{ marginRight: "5px" }}>Presentant: </h4>
          <ReferenceField
            source="presentant"
            resource="commandes"
            reference="presentants"
            basePath="/presentants"
            record={record}
            link={false}
          >
            <CustomerLinkField />
          </ReferenceField>
        </div>
        <div className={classes.footerOrder}>
          <div className={classes.s_commercial}>
            <span className={classes.s_header}>s_Commercial</span>
            <span className={classes.s_body}></span>
          </div>
          <div className={classes.s_commercial}>
            <span className={classes.s_header}>s_Control</span>
            <span className={classes.s_body}></span>
          </div>
          <div className={classes.s_commercial}>
            <span className={classes.s_header}>Direction</span>
            <span className={classes.s_body}></span>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : null;
};
const OrderDetail = ({ record }: FieldProps<Order>) => {
  //const classes = useEditStyles();
  return (
    <Printer>
      <OrderForm record={record} />
    </Printer>
  );
};

export default OrderDetail;
