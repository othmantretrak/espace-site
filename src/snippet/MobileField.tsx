import * as React from "react";
import { FC } from "react";
import Avatar from "@material-ui/core/Avatar";
import { FieldProps } from "react-admin";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import { Grid, makeStyles, Typography } from "@material-ui/core";

interface Props extends FieldProps<any> {
  className?: string;
  size?: string;
}
const useStyles = makeStyles({
  dd: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: "5px",
    },
  },
});
const MobileField: FC<Props> = ({ record, size = "25", className }) => {
  const classes = useStyles();
  return record ? (
    <Grid container direction="row" alignItems="center">
      <div className={classes.dd}>
        <SettingsPhoneIcon style={{ color: "#e70681", fontSize: "1.2rem" }} />
        <Typography variant="body2" component="p">
          {record?.tel}
        </Typography>
      </div>
    </Grid>
  ) : null;
};

export default MobileField;
