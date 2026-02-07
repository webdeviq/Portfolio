import { Box, Chip, Paper, Stack, Typography, keyframes } from "@mui/material";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

const education = [
  {
    degree: "Certificate in Full Stack Web Development",
    school: "Bryan University",
    year: "2020 – 2021",
  },
  {
    degree: "Associate's Degree in Software Engineering",
    school: "Bryan University",
    year: "2021 – 2022",
  },
];

const EducationList = () => {
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            color: "rgba(255,255,255,0.90)",
          }}
        >
          Education
        </Typography>

        <Chip
          label={`${education.length} items`}
          size="small"
          sx={{
            fontWeight: 850,
            color: "rgba(255,255,255,0.85)",
            bgcolor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.16)",
            backdropFilter: "blur(10px)",
          }}
        />
      </Stack>

      <Stack spacing={2}>
        {education.map((edu, idx) => (
          <Paper
            key={`${edu.degree}-${idx}`}
            elevation={0}
            sx={{
              p: 2.2,
              borderRadius: 3,
              bgcolor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 14px 50px rgba(0,0,0,0.28)",
              animation: `${fadeUp} 500ms ease-out forwards`,
              animationDelay: `${idx * 80}ms`,
              opacity: 0,
              transition:
                "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background-color 160ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 18px 65px rgba(0,0,0,0.36)",
                borderColor: "rgba(255,255,255,0.22)",
                bgcolor: "rgba(255,255,255,0.10)",
              },
            }}
          >
            <Stack spacing={0.6}>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.90)",
                }}
              >
                {edu.degree}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 750,
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                {edu.school}
              </Typography>

              <Typography
                variant="caption"
                sx={{ color: "rgba(255,255,255,0.60)" }}
              >
                {edu.year}
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default EducationList;
