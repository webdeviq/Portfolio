import { Box, Container, Divider, Typography } from "@mui/material";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";

const Experience = () => {
  return (
    <Box sx={{ py: { xs: 6, sm: 8 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            textAlign: "center",
            mb: 1,
            letterSpacing: 0.2,
            color: "rgba(255,255,255,0.92)",
            textShadow: "0 10px 30px rgba(0,0,0,0.35)",
          }}
        >
          Knowledge Path
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            mb: 4,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Education and professional experience focused on terminal operations,
          enterprise systems, and full-stack delivery.
        </Typography>

        <EducationList />

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.12)" }} />

        <ExperienceList />
      </Container>
    </Box>
  );
};

export default Experience;
