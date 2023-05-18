import { IconButton } from "@mui/material";
import { AppBarContainer, AppHeader } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Actions from "./actions";

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
};

export default function AppBarMobile({ matches }) {
  return (
    <div style={styles.container}>
      <AppBarContainer>
        <IconButton><MenuIcon /></IconButton>
        <AppHeader textAlign={'center'} variant='h4'>My Bags</AppHeader>
        <IconButton><SearchIcon /></IconButton>
      </AppBarContainer>
      <div style={styles.actions}>
        <Actions matches={matches} />
      </div>
    </div>
  );
}
