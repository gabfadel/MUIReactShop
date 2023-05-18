import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, AppBarContainer, AppHeader, Mylist } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";

export default function AppBarDesktop(matches) {

  return (
    <AppBarContainer>
      <AppHeader>myBag</AppHeader>
      <Mylist type="row">
        <ListItemText primary='home' />
        <ListItemText primary='Categories' />
        <ListItemText primary='Products' />
        <ListItemText primary='Contact Us' />
        
        <ListItemButton>
        <SearchIcon />
          
          <ListItemIcon>
           
          </ListItemIcon>
        </ListItemButton>
      </Mylist>
      <Actions matches={matches} />
    </AppBarContainer>
  );
}
