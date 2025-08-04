import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

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

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <List
              sx={{
                display: "flex",
                alignItems:  "center" ,
                justifyContent: "space-between",
                flexDirection: "row",
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
