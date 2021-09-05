import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: "none",
    },
  })
);

export default function UploadButtons({ onChange }: any) {
  const classes = useStyles();
  const handleChange = (event: any) => {
    const files = Array.from(event.target.files);
    const [file] = files;
    console.log(file);

    /* setAttachment(file);
    if (!!onChange) onChange({ target: { value: file } }); */
  };
  const convertToDefEventPara = (name: any, value: any) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        name="image"
        multiple
        type="file"
        onChange={(e) =>
          onChange(convertToDefEventPara("image", e.target!.files![0]))
        }
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}
