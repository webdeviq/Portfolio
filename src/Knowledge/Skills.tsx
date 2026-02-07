import { Box, Link, Stack, Typography, keyframes } from "@mui/material";

const skills = [
  { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
  { name: "Navis N4", url: "https://kaleris.com" },
  { name: "SQL Server", url: "https://www.w3schools.com/sql/" },
  { name: ".NET", url: "https://learn.microsoft.com/en-us/dotnet/" },
  { name: "Java", url: "https://docs.oracle.com/en/java/" },
  { name: "XML / EDI", url: "https://en.wikipedia.org/wiki/EDIFACT" },
];

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Skills = () => {
  return (
    <Box sx={{ pt: { xs: 4, sm: 5 }, px: 2 }}>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: 900,
          mb: 2,
          letterSpacing: 0.2,
          color: "rgba(255,255,255,0.92)",
          textShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        Skills
      </Typography>

      <Stack
        direction="row"
        spacing={1.5}
        flexWrap="wrap"
        justifyContent="center"
        sx={{ rowGap: 1.5 }}
      >
        {skills.map((skill, idx) => (
          <Link
            key={skill.name}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ display: "inline-flex" }}
          >
            <Box
              sx={{
                px: 2,
                py: 1.2,
                minWidth: { xs: 120, sm: 140 },
                borderRadius: 2,

                // ✅ dark glass card
                bgcolor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 14px 40px rgba(0,0,0,0.22)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                userSelect: "none",

                transition:
                  "transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease, border-color 160ms ease",
                animation: `${fadeUp} 500ms ease-out forwards`,
                animationDelay: `${idx * 60}ms`,
                opacity: 0,

                "&:hover": {
                  transform: "translateY(-3px)",
                  bgcolor: "rgba(255,255,255,0.12)",
                  borderColor: "rgba(255,255,255,0.22)",
                  boxShadow: "0 18px 60px rgba(0,0,0,0.32)",
                },
                "&:active": {
                  transform: "translateY(-1px) scale(0.99)",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "0.9rem", sm: "0.95rem" },
                  color: "rgba(255,255,255,0.90)",
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Skills;
