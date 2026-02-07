import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
  keyframes,
} from "@mui/material";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const About = () => {
  return (
    <Box
      sx={{
        pt: { xs: 2, sm: 1 },
        px: 2,
        maxWidth: 960,
        mx: "auto",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.2, sm: 3 },
          borderRadius: 4,
          border: "1px solid",
          bgcolor: "rgba(255,255,255,0.10)",
          borderColor: "rgba(255,255,255,0.14)",

          backdropFilter: "blur(10px)",
          animation: `${fadeUp} 500ms ease-out forwards`,
          opacity: 0,
        }}
      >
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography
            variant="h5"
            sx={{
              fontWeight: 950,
              letterSpacing: 0.3,
              fontSize: { xs: "1.35rem", sm: "1.7rem" },
              color: "rgba(255,255,255,0.92)",
              textShadow: "0 8px 28px rgba(0,0,0,0.35)",
            }}
          >
            About Me
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={1}
            sx={{ pb: 0.5 }}
          >
            {[
              "TOS / Navis N4",
              "N4 Billing",
              "C# / .NET",
              "SQL Server",
              "React / TS",
              "EDI / XML / XSLT",
              "SAP Workflows",
              "Java",
            ].map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  fontWeight: 850,
                  borderRadius: 2,
                  color: "rgba(255,255,255,0.88)",
                  bgcolor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.16)",

                  backdropFilter: "blur(10px)",
                  transition:
                    "transform 140ms ease, background-color 140ms ease, border-color 140ms ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    bgcolor: "rgba(255,255,255,0.12)",
                    borderColor: "rgba(255,255,255,0.24)",
                  },
                }}
              />
            ))}
          </Stack>

          <Typography
            variant="body1"
            color="rgba(255,255,255,0.75)"
            sx={{ lineHeight: 1.85, maxWidth: 860 }}
          >
            I’m a TOS-focused software developer in the terminal industry,
            building and supporting production systems used daily by operations
            and commercial teams. I specialize in{" "}
            <Box
              component="span"
              sx={{ fontWeight: 900, color: "primary.main" }}
            >
              Navis N4
            </Box>{" "}
            and{" "}
            <Box
              component="span"
              sx={{ fontWeight: 900, color: "primary.main" }}
            >
              N4 Billing
            </Box>
            , delivering solutions that improve reliability, automation, and
            visibility across port workflows.
          </Typography>

          <Typography
            variant="body1"
            color="rgba(255,255,255,0.75)"
            sx={{ lineHeight: 1.85, maxWidth: 860 }}
          >
            My work spans backend development with{" "}
            <Box
              component="span"
              sx={{ fontWeight: 900, color: "secondary.main" }}
            >
              C# / .NET
            </Box>{" "}
            and{" "}
            <Box
              component="span"
              sx={{ fontWeight: 900, color: "secondary.main" }}
            >
              SQL Server
            </Box>
            , plus frontend delivery using{" "}
            <Box
              component="span"
              sx={{ fontWeight: 900, color: "secondary.main" }}
            >
              React
            </Box>{" "}
            and{" "}
            <Box
              component="span"
              sx={{ fontWeight: 900, color: "secondary.main" }}
            >
              TypeScript
            </Box>
            . I also work heavily with EDI integrations (XML/XSLT) and
            reporting, and I’m continuously expanding in{" "}
            <Box
              component="span"
              sx={{ fontWeight: 900, color: "secondary.main" }}
            >
              Java
            </Box>
            .
          </Typography>

          <Typography
            variant="body2"
            color="rgba(255,255,255,0.75)"
            sx={{
              opacity: 0.95,
              lineHeight: 1.75,
              maxWidth: 820,
            }}
          >
            I enjoy solving real operational problems, keeping systems stable,
            and shipping clean, maintainable solutions teams can trust.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 0.5,
              px: 3,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 900,
            }}
            component="a"
            href="/AliAlDairawi_TOSApplicationDeveloperFeb26.pdf"
            download="Ali_Al_Dairawi_Resume_August_2026"
          >
            Download Resume
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default About;
