import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import PrintIcon from "@material-ui/icons/Print";
import { Fab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "66px",
    right: "90px",
  },
}));

export default function Printer({ children }: any) {
  const classes = useStyles();
  const linkToPrint = () => {
    return (
      <Fab
        className={classes.root}
        size="small"
        color="primary"
        aria-label="print"
      >
        <PrintIcon />
      </Fab>
    );
  };
  const componentRef = useRef<any>();
  return (
    <>
      <ReactToPrint
        trigger={linkToPrint}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>{children}</div>
    </>
  );
}
