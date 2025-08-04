import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";

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
    <List
      sx={{
        pt: 2,
        width: "100%",
        maxWidth: { md: "60%" },
        mx: { md: "auto" }, // centers it horizontally on md and up

        px: { xs: 2, md: 0 }, // optional: adds padding on small screens
      }}
      subheader={
        <ListSubheader sx={{ pl: 0 }}>
          <Typography variant="h6" fontWeight="bold">
            Education
          </Typography>
        </ListSubheader>
      }
    >
      {education.map((edu, index) => (
        <ListItem
          key={index}
          alignItems="flex-start"
          disableGutters
          sx={{ mb: 3 }}
        >
          <ListItemText
            primary={
              <Typography variant="subtitle1" fontWeight="bold">
                {edu.degree}
              </Typography>
            }
            secondary={
              <>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  {edu.school}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {edu.year}
                </Typography>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default EducationList;
