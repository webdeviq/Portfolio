import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import SideDrawer from "./SideDrawer";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import MenuOptionsList from "./MenuOptionsList";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleOpenDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "inline-flex", md: "none" } }}
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          {openDrawer && (
            <SideDrawer open={openDrawer} onClose={handleOpenDrawer} />
          )}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <MenuOptionsList />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
