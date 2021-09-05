import { List, Datagrid, TextField, ImageField } from "react-admin";

export const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="price" />
        <ImageField
          className="image-field"
          label="image"
          source="image.url"
          title="name"
        />
      </Datagrid>
    </List>
  );
};
