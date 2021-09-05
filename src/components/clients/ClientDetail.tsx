import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { FieldProps } from "react-admin";
import { Client } from "../../types";
import HomeIcon from "@material-ui/icons/Home";
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
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));
const ClientDetail = ({ record }: FieldProps<Client>) => {
  const classes = useStyles();
  return record ? (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={record.avatar.url}
        title={record.fullname}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {record.fullname}
          </Typography>
          <MobileField record={record} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <HomeIcon
              style={{
                color: "#e70681",
                fontSize: "1.2rem",
                marginRight: "5px",
              }}
            />
            <Typography variant="body2" component="p">
              {record?.address}
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  ) : null;
};
export default ClientDetail;
