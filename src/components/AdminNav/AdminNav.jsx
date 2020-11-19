import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useSelector } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AdminNavItem from "./AdminNavItem";
import { makeStylesConfig } from "../../utils/makeStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import CategoryIcon from "@material-ui/icons/Category";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStylesConfig;

export default function AdminNav() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: "#000" }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            id="burgerButton"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap>
            ElectroHack Administrador
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List>
          <AdminNavItem
            component={HomeIcon}
            route={"/admin/"}
            text={"Home"}
          ></AdminNavItem>
          {/* <AdminNavItem
            component={AddShoppingCartIcon}
            route={"/admin/crear"}
            text={"Agregar Producto"}
          ></AdminNavItem> */}
          <AdminNavItem
            component={ShoppingCartIcon}
            route={"/admin/productos"}
            text={"Producto"}
          ></AdminNavItem>
          {/* <AdminNavItem
            component={CategoryIcon}
            route={"/admin/categoria"}
            text={"Categoría"}
          ></AdminNavItem> */}
          {/*  <AdminNavItem
            component={SettingsIcon}
            route={"/admin/configuracion"}
            text={"Configuración"}
          ></AdminNavItem> */}

          {/* <AdminNavItem
            component={RemoveShoppingCartIcon}
            route={"/admin/producto"}
            text={"Eliminar Producto"}
          ></AdminNavItem> */}
          <AdminNavItem
            component={ExitToAppIcon}
            route={"/admin/login"}
            text={"Salir"}
          ></AdminNavItem>
        </List>
        <Divider />
        <List></List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
    </div>
  );
}
