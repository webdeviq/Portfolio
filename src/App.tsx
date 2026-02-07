import { CssBaseline, Box } from "@mui/material";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Skills from "./Knowledge/Skills";
import Experience from "./Knowledge/Experience";
import Footer from "./Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Header />
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Footer />
      </Box>
    </>
  );
};

export default App;
