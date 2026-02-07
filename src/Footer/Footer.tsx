import { Box, Container, Link, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 6, sm: 10 },
        py: { xs: 4, sm: 5 },
        borderTop: "1px solid",
        borderColor: "rgba(255,255,255,0.12)",
        bgcolor: "rgba(10, 14, 28, 0.55)",
        backdropFilter: "blur(12px)",
        backgroundImage:
          "radial-gradient(900px 300px at 50% 0%, rgba(255,95,25,0.10), transparent 60%)",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={1.2} alignItems="center">
          <Stack direction="row" spacing={1.25} alignItems="center">
            <Link
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                px: 1.2,
                py: 0.6,
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.14)",
                fontWeight: 850,
                color: "rgba(255,255,255,0.88)",
                bgcolor: "rgba(255,255,255,0.06)",
                transition:
                  "transform 140ms ease, background-color 140ms ease, border-color 140ms ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  bgcolor: "rgba(255,255,255,0.12)",
                  borderColor: "rgba(255,255,255,0.22)",
                },
              }}
            >
              React
            </Link>

            <Typography
              sx={{ fontWeight: 900, color: "rgba(255,255,255,0.60)" }}
            >
              +
            </Typography>

            <Link
              href="https://mui.com/"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                px: 1.2,
                py: 0.6,
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.14)",
                fontWeight: 850,
                color: "rgba(255,255,255,0.88)",
                bgcolor: "rgba(255,255,255,0.06)",
                transition:
                  "transform 140ms ease, background-color 140ms ease, border-color 140ms ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  bgcolor: "rgba(255,255,255,0.12)",
                  borderColor: "rgba(255,255,255,0.22)",
                },
              }}
            >
              MUI
            </Link>
          </Stack>

          <Typography
            variant="body2"
            sx={{ mt: 0.5, color: "rgba(255,255,255,0.68)" }}
          >
            © {new Date().getFullYear()}{" "}
            <Box
              component="span"
              sx={{ fontWeight: 900, color: "rgba(255,255,255,0.92)" }}
            >
              Ali Al Dairawi
            </Box>
            . Built with care.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
