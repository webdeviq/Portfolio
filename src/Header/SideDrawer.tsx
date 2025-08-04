import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";
import MenuOptionsList from "./MenuOptionsList";

type Props = {
  open: boolean;
  onClose: () => void;
};

const SideDrawer: React.FC<Props> = ({ open, onClose }: Props) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <MenuOptionsList />
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer anchor="left" open={open} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
export default SideDrawer;
