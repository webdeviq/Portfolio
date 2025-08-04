import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.100",
        py: 3,
        mt: 8,
        textAlign: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Ali Al Dairawi. Built with{" "}
        <Link
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener"
          underline="hover"
        >
          React
        </Link>{" "}
        &{" "}
        <Link
          href="https://mui.com/"
          target="_blank"
          rel="noopener"
          underline="hover"
        >
          MUI
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default Footer;
