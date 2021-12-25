import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import customCss from "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Layout from "./components/Layout.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
