// in src/users.js
import { DataGrid } from "@material-ui/data-grid";
import * as React from "react";
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
  Show,
  SimpleShowLayout,
  ShowButton,
} from "react-admin";
import FullNameField from "../../snippet/FullNameField";
import ClientDetail from "./ClientDetail";
const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="id" label="Client" reference="clients" allowEmpty>
    <SelectInput optionText="fullname" />
  </ReferenceInput>,
];
export const ClientList = (props: any) => (
  <List filters={postFilters} {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />

      <FullNameField source="fullname" />

      <NumberField source="tel" />

      <TextField source="address" />
      <DateField label="Date" source="published_at" />

      <ReferenceField
        source="presentant.id"
        label="Presentant"
        reference="presentants"
      >
        <FullNameField source="fullname" />
      </ReferenceField>
      <EditButton icon={<></>} />
      <ShowButton icon={<></>} />
    </Datagrid>
  </List>
);
export const ClientShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <ClientDetail />
    </SimpleShowLayout>
  </Show>
);
export const ClientEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextInput fullWidth source="fullname" />
      <TextInput fullWidth source="address" />
      <TextInput fullWidth source="tel" />
    </SimpleForm>
  </Edit>
);
