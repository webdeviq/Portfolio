import { Avatar, Stack, Link } from "@mui/material";
import { blue } from "@mui/material/colors";

const skills = [
  { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
  { name: "TS", url: "https://www.typescriptlang.org/docs/" },
  { name: "Navis N4", url: "https://kaleris.com" },
  { name: "SQL", url: "https://www.w3schools.com/sql/" },
];

const Skills = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      flexWrap="wrap"
      justifyContent="center"
      pt={3}

    >
      {skills.map((skill) => (
        <Link
          key={skill.name}
          href={skill.url}
          target="_blank"
          rel="noopener"
          underline="none"
        >
          <Avatar
            sx={{
              bgcolor: blue[400],
              variant: "square",
              width: {xs: 60},
              height: 72,
              fontSize: { xs: 12 , md: 14},
              fontWeight: "bold",
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            {skill.name}
          </Avatar>
        </Link>
      ))}
    </Stack>
  );
};

export default Skills;
