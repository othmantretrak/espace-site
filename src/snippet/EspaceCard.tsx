import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,

    minHeight: "164px",
  },
  media: {
    height: 60,
    textAlign: "center",
  },
  dd: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: "5px",
    },
  },
});

const EspaceCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.media}>
        <img
          alt="Contemplative Reptile"
          height="100%"
          src="https://res.cloudinary.com/tretrak/image/upload/v1630734739/espace_ommoho.svg"
          title="Espace logo"
        />
      </div>

      <CardContent>
        <Grid container direction="row" alignItems="center">
          <div className={classes.dd}>
            <SettingsPhoneIcon
              style={{ color: "#e70681", fontSize: "1.2rem" }}
            />
            <Typography variant="body2" component="p">
              05223-58436
            </Typography>
          </div>

          <div className={classes.dd}>
            <HomeIcon style={{ color: "#e70681", fontSize: "1.2rem" }} />
            <Typography variant="body2" component="p">
              Q.I OUKACHA، 13 Rue Al Haouza، Casablanca 20580
            </Typography>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default EspaceCard;
