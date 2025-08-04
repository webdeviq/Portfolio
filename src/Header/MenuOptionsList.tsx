

import type { DrawerLink } from "./app.types";


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
