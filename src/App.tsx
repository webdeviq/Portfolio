import { CssBaseline, Box } from "@mui/material";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Skills from "./Knowledge/Skills";
import Experience from "./Knowledge/Experience";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "#f5f5f5", // background color (or use gradient/bg image)
          minHeight: "100vh", // ensures it fills full screen
          overflowX: "hidden", // optional: prevents horizontal scroll
        }}
      >
        <Header />
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Footer/>
      </Box>
    </>
  );
};

export default App;
