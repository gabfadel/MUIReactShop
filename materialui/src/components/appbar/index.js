import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppBarMobile from "./appbarMobile";
import AppBarDesktop from "./appbarDesktop";

export default function AppBar(){
    const theme=useTheme();
    const matches= useMediaQuery(theme.breakpoints.down('md'));
    return(<>
        {matches? <h1><AppBarMobile matches={matches}/> </h1>:<h1><AppBarDesktop matches={matches} /></h1>}
        </>
    );
}
