import React from "react";
import { makeStyles, withStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import NotesIcon from "@mui/icons-material/Notes";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import { format } from "date-fns";
import Avatar from "@mui/material/Avatar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      width: 1059,
    },
    toolbar: theme.mixins.toolbar,
    page: {
      backgroundColor: "#f9f9f9",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      backgroundColor: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    date: {
      flexGrow: 1,
    },
    avatar: {
      margin: theme.spacing(2),
    },
  };
});

export default function Layout({ children, props }) {
  const classes = useStyles();
  const pathUrl = useNavigate();
  const location = useLocation();

  const menuItem = [
    {
      text: "My Notes",
      icon: <NotesIcon color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleIcon color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar style={{ width: 1075 }}>
        <Toolbar>
          <Typography className={classes.date}>
            Tody is the {format(new Date(), "do MMMM yyyy")}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar src="/profile.png" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Sample Note
          </Typography>
        </div>
        <List>
          {menuItem.map((item) => {
            return (
              <ListItem
                key={item.text}
                className={location.pathname == item.path ? classes.page : null}
                onClick={() => {
                  pathUrl(item.path, { state: true });
                }}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        <div>{children}</div>
      </div>
    </div>
  );
}
