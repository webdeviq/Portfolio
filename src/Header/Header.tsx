import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import type { DrawerLink } from "./app.types";

const drawerLinks: DrawerLink[] = [
  { icon: <GitHubIcon />, link: "https://github.com/webdeviq" },
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/ali-d-519711217",
  },
  { icon: <MailIcon />, link: "mailto:alialdairawi@outlook.com" },
];

const getLabel = (link: string) => {
  if (link.includes("github")) return "GitHub";
  if (link.includes("linkedin")) return "LinkedIn";
  if (link.startsWith("mailto:")) return "Email";
  return "Link";
};

const Header = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(10, 14, 28, 0.55)",
        color: "rgba(255,255,255,0.9)", // ✅ this makes icons inherit light color
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid",
        borderColor: "rgba(255,255,255,0.10)",
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          {drawerLinks.map((element) => (
            <Tooltip key={element.link} title={getLabel(element.link)} arrow>
              <IconButton
                component="a"
                href={element.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={getLabel(element.link)}
                sx={{
                  color: "inherit",
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.14)",
                  bgcolor: "rgba(255,255,255,0.06)",
                  borderRadius: 2,
                  transition:
                    "transform 120ms ease, background-color 120ms ease, border-color 120ms ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    bgcolor: "rgba(255,255,255,0.12)",
                    borderColor: "rgba(255,255,255,0.22)",
                  },
                  "& svg": { fontSize: 22, color: "inherit" },
                }}
              >
                {element.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
