import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { FieldProps } from "react-admin";
import { Product } from "../../types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    boxShadow: "none",
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
}));
const ProductDetail = ({ record }: FieldProps<Product>) => {
  const classes = useStyles();
  return record ? (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={record.image?.url}
        //title={record.fullname}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {record.name}
          </Typography>
          <Typography variant="body2" component="p">
            {record?.description}
          </Typography>
          <div className={classes.price}>
            <Typography
              style={{ marginRight: "5px" }}
              variant="h6"
              component="p"
            >
              Prix:
            </Typography>
            <Typography
              style={{ color: "rgb(231, 6, 129)" }}
              variant="h6"
              component="p"
            >
              {record?.price.toLocaleString(undefined, {
                style: "currency",
                currency: "MAD",
              })}
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  ) : null;
};
export default ProductDetail;
