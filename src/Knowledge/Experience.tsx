// Education
// Work History

import { Box, Typography } from "@mui/material";

import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
const Experience = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        pt: 5,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        color="primary.main"
        align="center"
        sx={{ width: "100%" }}
      >
        Knowledge Path
      </Typography>
      <EducationList />
      <ExperienceList />
    </Box>
  );
};

export default Experience;
