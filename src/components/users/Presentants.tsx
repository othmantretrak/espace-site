// in src/users.js
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
} from "react-admin";
import FullNameField from "../../snippet/FullNameField";
import PresentantDetail from "./PresentantDetail";
const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput
    source="id"
    label="fullname"
    reference="presentants"
    allowEmpty
  >
    <SelectInput optionText="fullname" />
  </ReferenceInput>,
];
export const PresentantList = (props: any) => (
  <List filters={postFilters} {...props}>
    <Datagrid rowClick="show">
      <FullNameField source="fullname" />
      <NumberField source="tel" />
      <TextField source="secteur" />
      <DateField label="Date" source="created_at" />
      <EditButton />
    </Datagrid>
  </List>
);
export const PresentantEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="fullname" />
      <TextInput source="tel" />
      <TextInput source="secteur" />
    </SimpleForm>
  </Edit>
);
export const PresentantCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="fullname" />
      <TextInput source="tel" />
      <TextInput source="secteur" />
    </SimpleForm>
  </Create>
);
export const PresentantShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <PresentantDetail />
    </SimpleShowLayout>
  </Show>
);
