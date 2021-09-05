import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const MainListItems = () => {
  //console.log(useLocation());
  const { pathname } = useLocation();

  const [selectedPath, setSelectedPath] = React.useState("");
  useEffect(() => {
    setSelectedPath(pathname);
  }, [pathname]);

  /* const handleListItemClick = (index: number) => {
    setselectedPath(index);
  }; */
  return (
    <div>
      <ListItem
        button
        selected={selectedPath === "/"}
        //onClick={(event: any) => handleListItemClick(0)}
        component={Link}
        to="/"
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem
        button
        selected={selectedPath === "/products"}
        //onClick={(event: any) => handleListItemClick(1)}
        component={Link}
        to="/products"
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>

      <ListItem
        button
        selected={selectedPath === "/orders"}
        //onClick={(event: any) => handleListItemClick(2)}
        component={Link}
        to="/orders"
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Commandes" />
      </ListItem>
      <ListItem
        button
        selected={selectedPath === "/presentants"}
        //onClick={(event: any) => handleListItemClick(3)}
        component={Link}
        to="/presentants"
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Presentants" />
      </ListItem>
    </div>
  );
};

export default MainListItems;
