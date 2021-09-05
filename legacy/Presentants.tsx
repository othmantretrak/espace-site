import { useQuery, gql } from "@apollo/client";
import {
  DataGrid,
  GridColDef,
  GridCellParams,
  GridValueGetterParams,
} from "@material-ui/data-grid";
import CustomerLinkField from "../../snippet/CustomerLinkField";

const columns: GridColDef[] = [
  {
    field: "FullName",
    headerName: "FullName",
    width: 150,
    editable: true,
  },

  {
    field: "avatar",
    headerName: "Image",
    width: 150,
    editable: true,
    renderCell: (params: GridCellParams | any) => {
      console.log(params);

      return (
        <CustomerLinkField
          fullname={params.getValue(params.id, "FullName")}
          src={params?.formattedValue?.url}
          to={`/presentants/${params.row.id}`}
        />
      );
    },
  },
  {
    field: "secteur",
    headerName: "Secteur",
    width: 200,
    editable: true,
  },

  {
    field: "tel",
    headerName: "Tel",
    type: "number",
    width: 110,
    editable: true,
  },
];

const PRESENTANS = gql`
  query GetPresentants {
    presentants: role(id: 4) {
      id
      users {
        id
        username
        avatar {
          url
        }
        FullName
        secteur
        tel
      }
    }
  }
`;
const Presentant: React.FC = ({ children }) => {
  const { loading, error, data } = useQuery(PRESENTANS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return (
    <div style={{ height: 400, width: "100%", marginTop: "100px" }}>
      <DataGrid
        rows={data.presentants.users}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
        onSelectionModelChange={(x) => {
          console.log({ x });
        }}
      />
    </div>
  );
};
export default Presentant;
