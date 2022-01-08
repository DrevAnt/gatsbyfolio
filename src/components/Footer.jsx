import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Social from "../components/Social";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "0.8rem",
    padding: "0.15rem",
  },
  text: {
    fontSize: "0.9rem",
    fontWeight: 700,
    lineHeight: 1.75,
    letterSpacing: "0.04em",
  },
}));

const Footer = () => {
  const styles = useStyles();
  return (
    <AppBar position="static" color="default" className={styles.footer}>
      <Container maxWidth="md">
        <ToolBar disableGutters>
          <Typography component="div" className={styles.text}>
            <Box sx={{ textAlign: "center" }}>Anton Drevetskyi</Box>
            <Box sx={{ textAlign: "center" }}>© 2022</Box>
          </Typography>
          <Social />
        </ToolBar>
      </Container>
    </AppBar>
  );
};

export default Footer;
