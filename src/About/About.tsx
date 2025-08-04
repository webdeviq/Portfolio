import { Box, Button, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        pt: { xs: 5 },
        px: 2,
        maxWidth: "800px",
        margin: "0 auto",
      }} // Test
    >
      <Typography
        textAlign="center"
        variant="subtitle1"
        color="text.primary"
        sx={{ fontWeight: "bold", lineHeight: 1.6, fontSize: { xs: "15px" } }}
      >
        I'm a passionate software developer with a deep love for the terminal
        industry, especially working with{" "}
        <Box
          component="span"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Navis N4
        </Box>{" "}
        systems. I thrive at blending skills in C# with frontend power in React
        to build robust, user-friendly web applications. Whether it's
        streamlining port operations or crafting clean UIs, I enjoy solving
        real-world problems through code.
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        component="a"
        href="/public/Ali_Al_Dairawi_Resume_August_2025.pdf"
        download="Ali_Al_Dairawi_Resume_August_2025"
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default About;
