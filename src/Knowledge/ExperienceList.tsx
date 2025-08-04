import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";

const experiences = [
  {
    title: "TOS Developer",
    company: "BGT ICTSI Iraq",
    location: "Port Operations | Global Terminal Industry",
    date: "2022 – Present",
    details: [
      "Designing and developing internal web applications using C#, .NET, React, and TypeScript to support and streamline terminal operations.",
      "Building full-stack solutions to modernize legacy workflows across the port environment.",
      "Working closely with operations to develop tools for container tracking, gate activity, and EDI automation using Navis N4.",
      "Writing optimized SQL queries and generating data reports to support billing, planning, and dispatch.",
      "Customizing and troubleshooting the Navis N4 TOS platform, including EDI configurations, XSLT documents, and yard planning logic.",
      "Collaborating with cross-functional teams to deliver scalable, responsive, and maintainable software for daily terminal operations.",
    ],
  },

  {
    title: "Data Administrator",
    company: "McKesson",
    location: "Detroit, Michigan, U.S.",
    date: "Dec 2020 – Jun 2022",
    details: [
      "Managed the daily logging and tracking of incoming and outgoing pharmaceutical materials with a focus on accuracy and timeliness.",
      "Designed and maintained a basic inventory tracking system using Microsoft Excel, including formulas and structured data entry for team use.",
      "Provided professional, daily communication with clients and partners across the pharmaceutical industry, maintaining service quality under pressure.",
      "Handled high-volume multitasking during peak hours with strong typing skills and attention to detail.",
      "Troubleshot and resolved internal IT-related technical issues, supporting staff across multiple departments.",
    ],
  },
];

const ExperienceList = () => {
  return (
    <List
      sx={{
        pt: 2,
        width: "100%",
        maxWidth: { md: "60%" },
        mx: { md: "auto" },
        px: { xs: 2, md: 0 },
      }}
      subheader={
        <ListSubheader sx={{ pl: 0 }}>
          <Typography variant="h6" fontWeight="bold">
            Experience
          </Typography>
        </ListSubheader>
      }
    >
      {experiences.map((exp, index) => (
        <ListItem
          key={index}
          alignItems="flex-start"
          disableGutters
          sx={{ mb: 3 }}
        >
          <ListItemText
            primary={
              <Typography variant="subtitle1" fontWeight="bold">
                {exp.title} | {exp.company}
              </Typography>
            }
            secondary={
              <>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {exp.location} — {exp.date}
                </Typography>
                <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
                  {exp.details.map((point, i) => (
                    <li key={i}>
                      <Typography variant="body2" component="span">
                        {point}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ExperienceList;
