import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(
  initialFValues: any,
  validateOnChange = false,
  validate: any
) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState<{} | any>({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log({ name, value });

    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

type Iprops = {
  onSubmit: (e: any) => void;
};

export const Form: React.FC<Iprops> = (props) => {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
};
