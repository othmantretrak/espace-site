import React, { useEffect } from "react";
import { Grid, Input } from "@material-ui/core";
import Controls from "../controls/Controls";
import { useForm, Form } from "../../hooks/useForm";
import { Product } from "../../types";
import UploadButtons from "../controls/UploadButtons";
//import * as employeeService from "../../services/employeeService";

const initialFValues = {
  id: 0,
  date: new Date(),
  description: "",
  name: "",
  image: "",
  price: 1,
  reference: "",
  stock: "",
};
export type InitialFValues = typeof initialFValues;

interface Props {
  addOrEdit: any;
  recordForEdit: any;
}

const ProductForm: React.FC<Props> = (props) => {
  const validate = (fieldValues: InitialFValues = values) => {
    let temp: Product = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);
  const { addOrEdit, recordForEdit } = props;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //console.log("dddddddddddddddddddddd");

    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="name"
            label="name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />

          <Controls.Input
            label="description"
            name="description"
            value={values.description}
            onChange={handleInputChange}
            error={errors.description}
          />
          <Controls.Input
            label="price"
            name="price"
            value={values.price}
            onChange={handleInputChange}
            error={errors.price}
          />
          <UploadButtons onChange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};
export default ProductForm;
