import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const navigationLinks = [
  { name: "About", href: "" },
  { name: "Projects", href: "" },
  { name: "Resume", href: "" },
];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  avatar: {
    marginRight: "auto",
    color: "white",
    backgroundColor: "black",
  },
}));

const Header = () => {
  const styles = useStyles();
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <ToolBar disableGutters>
          <Avatar variant="rounded" className={styles.avatar}>
            AD
          </Avatar>
          {navigationLinks.map((item) => (
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="none"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </ToolBar>
      </Container>
    </AppBar>
  );
};

export default Header;
