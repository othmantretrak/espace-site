// in src/users.js

import { AutocompleteInput, DateField, Loading, useGetList } from "react-admin";
import {
  Show,
  ShowButton,
  SimpleShowLayout,
  useGetIdentity,
} from "react-admin";
import {
  List,
  Datagrid,
  TextField,
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
import FullNameField from "../../snippet/FullNameField";
import { Product } from "../../types";
import OrderDetail from "./OrderDetail";
const postFilters = [
  <TextInput source="q" label="Search By Id" alwaysOn />,
  <ReferenceInput
    source="presentant"
    label="Presentant"
    reference="presentants"
    allowEmpty
  >
    <SelectInput optionText="fullname" />
  </ReferenceInput>,
];
export const OrderList = (props: any) => {
  /* const { identity, loading: identityLoading } = useGetIdentity();
  console.log({ identity }); */

  return (
    <List exporter={false} filters={postFilters} {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <ReferenceField
          link="show"
          source="client.id"
          label="client"
          reference="clients"
        >
          <FullNameField source="fullname" />
        </ReferenceField>
        <ReferenceField
          source="presentant.id"
          label="Presentant"
          reference="presentants"
          link="show"
        >
          <FullNameField source="fullname" />
        </ReferenceField>
        <DateField label="Date" source="created_at" />
        <ShowButton icon={<></>} />
      </Datagrid>
    </List>
  );
};
export const OrderEdit = (props: any) => {
  const { data, loading } = useGetList<Product>("products");
  if (loading) return <Loading />;
  //if (error) { return <Error />; }
  if (!data) return null;
  const data2 = Object.values(data);
  console.log({ dataFromEdit: data2 });
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextField source="id" />
        <AutocompleteInput
          source="articles"
          choices={data2}
          optionText="name"
          optionValue="id"
        />
        <DateInput source="created_at" />
      </SimpleForm>
    </Edit>
  );
};
export const CommandeCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="address" />
      <NumberInput source="nb_articles" />
      <ReferenceInput source="client" reference="clients">
        <SelectInput optionText="fullname" />
      </ReferenceInput>
      <ReferenceInput source="prsantants" reference="users">
        <SelectInput optionText="fullname" />
      </ReferenceInput>
      <ReferenceInput source="products" reference="products">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="updated_at" />
    </SimpleForm>
  </Create>
);
export const OrderShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <OrderDetail />
    </SimpleShowLayout>
  </Show>
);
