import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import Projects from "../components/Projects";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const indexPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Projects />
    </ThemeProvider>
  );
};

export default indexPage;
