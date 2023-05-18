import styled from "@emotion/styled";
import { Box, List, Typography } from "@mui/material";
import "@fontsource/montez"
import { Colors } from "../theme";
import { backgrounds } from "polished";

//container
export const AppBarContainer = styled(Box)(()=>
({

    display:'flex',
    marginTop: 4,
    justifyContent:'center',
    alignItem:'center',
    padding:'2px 8px'
}));

//header
export const AppHeader = styled(Typography)(()=>({
    padding:'4px',
    flexGrow:1,
    fontSize:'4em',
    fontFamily:'"Montez","cursive"',
    color:Colors.secundary,

}))

export const Mylist = styled(List)(({type})=>({
    display: type === 'row'?'flex':'block',
    flexGrow: 3,
    justifyContent:'center',
    allignItems:'center'
}))

export const ActionIconsContainerMobile= styled(List)(({type})=>({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow:3,
    justifyContent:'center',
    alignItems:'center'
}))

export const ActionIconsContainerDesktop= styled(Box)(()=>({
    display:'flex',
    background:Colors.shaft,
    position:'fixed',
    bottom:0,
    left:0,
    width:'100%',
    align:'center',
    zIndex:'99',
    borderTop:`1px solid ${Colors.border}`

}))


