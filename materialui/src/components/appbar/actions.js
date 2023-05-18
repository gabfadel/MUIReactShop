import { Divider, ListItemButton, ListItemIcon, colors } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, AppBarContainer, AppHeader, Mylist } from "../../styles/appbar";
import { Colors } from "../../styles/theme";



export default function Actions({ matches }) {
  
const Component = matches? ActionIconsContainerMobile:
ActionIconsContainerDesktop; 

  return (
<Component>    <Mylist type="row">
      <ListItemButton
      sx={{
        justifyContent:'center',
      }}>
        <ListItemIcon
        sx={{
            display:'flex',
            justifyContent:'center',
            color: matches && Colors.secundary
        }}
        >
          <ShoppingCartIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" />
      <ListItemButton
      sx={{
        justifyContent:'center',
      }}>
        <ListItemIcon
        sx={{
            display:'flex',
            justifyContent:'center',
            color: matches && Colors.secundary

        }}
        >
          <FavoriteBorderIcon />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton
      sx={{
        justifyContent:'center',
      }}>
        <ListItemIcon
        sx={{
            display:'flex',
            justifyContent:'center',
            color: matches && Colors.secundary

        }}
        >
          <PersonIcon />
        </ListItemIcon>
      </ListItemButton>
    </Mylist></Component>

  );
}
