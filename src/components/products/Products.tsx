// in src/users.js
import { Grid, makeStyles } from "@material-ui/core";
import * as React from "react";
import {
  ImageField,
  ImageInput,
  Show,
  ShowButton,
  SimpleShowLayout,
} from "react-admin";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateInput,
  NumberInput,
  Create,
} from "react-admin";
import ProductDetail from "./ProductDetail";

const useStyles = makeStyles({
  dd: {
    maxHeight: "5rem",
    "& img": {
      maxHeight: "5rem",
    },
  },
});
const postFilters = [<TextInput source="q" label="Search" alwaysOn />];
export const ProductList = (props: any) => {
  const classes = useStyles();
  return (
    <List exporter={false} filters={postFilters} {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField
          style={{
            display: "inline-block",
            width: "13rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          source="name"
        />
        <NumberField
          source="price"
          options={{ style: "currency", currency: "MAD" }}
        />

        <DateField label="Date" source="created_at" />

        <ImageField
          label="Image"
          className={classes.dd}
          source="image.url"
          title="title"
        />

        <EditButton icon={<></>} />
        <ShowButton icon={<></>} />
      </Datagrid>
    </List>
  );
};
export const productEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextInput fullWidth source="name" />
      <TextInput fullWidth source="description" />
      <NumberInput source="price" />
      <DateInput source="created_at" />

      <ImageInput
        multiple={false}
        source="image"
        label="Image"
        accept="image/*"
      >
        <ImageField source="url" title="name" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
export const ProductCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextInput fullWidth source="name" />
      <TextInput fullWidth multiline source="description" />
      <NumberInput source="price" />
      <DateInput source="created_at" />

      <ImageInput
        multiple={false}
        source="image"
        label="Image"
        accept="image/*"
      >
        <ImageField source="url" title="name" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
export const ProductShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <ProductDetail />
    </SimpleShowLayout>
  </Show>
);
