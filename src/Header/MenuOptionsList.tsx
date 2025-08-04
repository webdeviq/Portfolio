import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import type { DrawerLink } from "./app.types";

const drawerLinks: DrawerLink[] = [
  { icon: <GitHubIcon />, link: "https://github.com/webdeviq" },
  {
    icon: <LinkedInIcon />,

    link: "https://www.linkedin.com/in/ali-d-519711217",
  },
  {
    icon: <MailIcon />,

    link: "mailto:alialdairawi@outlook.com",
  },
];

const MenuOptionsList = () => {
  return (
    <List
      sx={{
        pt: { xs: 2, md: 0 },

        display: { md: "flex" },
        alignItems: { md: "center" },
        justifyContent: { md: "space-between" },
      }}
    >
      {drawerLinks.map((element) => (
        <ListItem key={element.link} disablePadding>
          <ListItemButton
            component="a"
            href={element.link}
            target="_blank"
            rel="noopener"
          >
            <ListItemIcon>{element.icon}</ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuOptionsList;
