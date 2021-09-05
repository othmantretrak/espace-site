import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { FieldProps } from "react-admin";
import { Presentant } from "../../types";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import MobileField from "../../snippet/MobileField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    boxShadow: "none",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  priceContainer: {},
  price: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px",
    paddingBottom: "8px",
    border: "#635a5c solid 1px",
    maxWidth: "190px",
    textAlign: "center",
    padding: "10px",
    justifyContent: "center",
    marginTop: "10px",
  },
}));
const PresentantDetail = ({ record }: FieldProps<Presentant>) => {
  const classes = useStyles();
  return record ? (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={record?.avatar?.url}
        title={record.fullname}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {record.fullname}
          </Typography>
          <MobileField record={record} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <EmojiTransportationIcon
              style={{
                color: "#e70681",
                fontSize: "1.2rem",
                marginRight: "5px",
              }}
            />
            <Typography variant="body2" component="p">
              {record?.secteur}
            </Typography>
          </div>
          <div className={classes.priceContainer}>
            <div style={{ marginRight: "5px" }} className={classes.price}>
              <Typography
                style={{ marginRight: "5px" }}
                variant="body2"
                component="p"
              >
                Commandes:
              </Typography>
              <Typography
                style={{ color: "rgb(231, 6, 129)" }}
                variant="body2"
                component="p"
              >
                {record?.commandes.length}
              </Typography>
            </div>

            <div className={classes.price}>
              <Typography
                style={{ marginRight: "5px" }}
                variant="body2"
                component="p"
              >
                Clients:
              </Typography>
              <Typography
                style={{ color: "rgb(231, 6, 129)" }}
                variant="body2"
                component="p"
              >
                {record?.clients.length}
              </Typography>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  ) : null;
};
export default PresentantDetail;
