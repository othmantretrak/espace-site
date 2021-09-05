import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { OperationVariables, QueryResult, useQuery } from "@apollo/client";
import Controls from "../controls/Controls";
import { useForm, Form } from "../../hooks/useForm";
import { CLIENTS } from "../../graphQl/queries";
import { Client } from "../../types";
//import * as employeeService from "../../services/employeeService";

const initialFValues = {
  id: 0,
  ref: "",
  address: "",
  tel: "",
  client: "",
  presentant: "",
  nb_articles: "",
  date: new Date(),
};
export type InitialFValues = typeof initialFValues;
type ResultClients = {
  clients: Client[];
};
interface Props {
  addOrEdit: any;
  recordForEdit: any;
}
interface Temp {
  ref?: string;
  address?: string;
  date?: string;
  nb_articles?: string;
}
const OrderForm: React.FC<Props> = (props) => {
  const {
    loading,
    error,
    data,
  }: QueryResult<ResultClients, OperationVariables> = useQuery(CLIENTS);

  const validate = (fieldValues: InitialFValues = values) => {
    let temp: Temp = { ...errors };
    if ("address" in fieldValues)
      temp.address = fieldValues.address ? "" : "This field is required.";

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
            name="address"
            label="address"
            value={values.address}
            onChange={handleInputChange}
            error={errors.address}
          />

          <Controls.Input
            label="nb_articles"
            name="nb_articles"
            value={values.nb_articles}
            onChange={handleInputChange}
            error={errors.nb_articles}
          />
          <Controls.Input
            label="tel"
            name="tel"
            value={values.tel}
            onChange={handleInputChange}
            error={errors.tel}
          />

          <Controls.Input
            label="presentant"
            name="presentant"
            value={values.presentant}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Select
            name="client"
            label="Client"
            value={values.client}
            onChange={handleInputChange}
            options={data?.clients}
            error={errors.client}
          />

          <Controls.DatePicker
            name="date"
            label="Hire Date"
            value={values.date}
            onChange={handleInputChange}
          />

          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};
export default OrderForm;
