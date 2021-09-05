import { OperationVariables, QueryResult, useQuery } from "@apollo/client";

import { ORDERS } from "../../graphQl/queries";
import CustomerLinkField from "../../snippet/CustomerLinkField";
import useTable from "../../hooks/useTable";
import PageHeader from "../PageHeader";
import OrderForm from "./OrderForm";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";

//import * as employeeService from "../../services/employeeService";
import Controls from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../../components/Popup";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Notification from "../../components/Notification";
import ConfirmDialog from "../../components/ConfirmDialog";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { Order } from "../../types";

const headCells = [
  { id: "ref", label: "ref" },
  { id: "address", label: "address" },
  { id: "client", label: "client" },
  { id: "date", label: "date" },
  { id: "nb_articles", label: "nb_articles" },
  { id: "presentant", label: "Presentant" },
  { id: "actions", label: "Actions", disableSorting: true },
];

const useStyles = makeStyles((theme) => ({
  pageContent: {
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  actions: {
    display: "flex",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));
type Result = {
  commandes: Order[];
};

const Orders: React.FC = () => {
  const { loading, error, data }: QueryResult<Result, OperationVariables> =
    useQuery(ORDERS);
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState<Order | null>(null);
  //const [records, setRecords] = useState(employeeService.getAllEmployees())
  const [filterFn, setFilterFn] = useState({
    fn: (items: Order[]) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(data?.commandes, headCells, filterFn);
  console.log({ data });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const handleSearch = (e: any) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x?.ref!.toLowerCase().includes(target.value)
          );
      },
    });
  };
  const addOrEdit = (order: Order, resetForm: any) => {
    if (order.id === 0) {
      console.log("addOrEdit", order);
    } else console.log("addOrEdit", order);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    //setRecords(employeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: "Submitted Successfully",
      type: "success",
    });
  };
  const openInPopup = (item: Order | null) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };
  return (
    <div style={{ width: "100%", marginTop: "5px" }}>
      <PageHeader
        title="Les Commandes"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Commandes"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item: Order) => (
              <TableRow key={item.id}>
                <TableCell>{`Commande-${item.id}`}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>
                  <Grid>
                    <CustomerLinkField
                      fullname={item!.client?.fullname}
                      src={item!.client?.avatar?.url}
                      to={`/clients/${item.client?.id}`}
                    />
                  </Grid>
                </TableCell>
                <TableCell>{item.published_at}</TableCell>
                <TableCell>{item.nb_articles}</TableCell>
                <TableCell>
                  <Grid>
                    <CustomerLinkField
                      fullname={item!.users_permissions_user!.fullname}
                      src={item!.users_permissions_user!.avatar!.url!}
                      to={`/presentants/${item.id}`}
                    />
                  </Grid>
                </TableCell>

                <TableCell>
                  <div className={classes.actions}>
                    <Controls.ActionButton
                      color="primary"
                      onClick={() => {
                        openInPopup(item);
                      }}
                    >
                      <EditOutlinedIcon fontSize="small" />
                    </Controls.ActionButton>
                    <Controls.ActionButton
                      color="secondary"
                      onClick={() => {
                        setConfirmDialog({
                          isOpen: true,
                          title: "Are you sure to delete this record?",
                          subTitle: "You can't undo this operation",
                          //onConfirm: () => {},
                        });
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </Controls.ActionButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="Order Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <OrderForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
};
export default Orders;
