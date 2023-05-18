import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { padding } from "polished";
import { Colors } from "../theme";
import { maxWidth } from "@mui/system";
import { Typography,useMediaQuery } from "@mui/material";

export const BannerContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "0px 0px",
    background: Colors.light_gray,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  
export const BannerContent = styled(Box) (()=>({
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    maxWidth:420,
    padding:'30px'
}));


export const BannerTittle = styled(Typography)((theme)=>({
    lineHeight:1.5,
    fontSize:'72px',
    MarginBottom:'20px',
    [theme.breakpoints.down("sm")]: {
        fontSize:'42px'
      },
}));

export const BannerDescription = styled(Typography)((theme)=>({
    lineHeight:1.5,
    letterSpacing:1.25,
    MarginBottom:'3em',
    [theme.breakpoints.down("sm")]: {
        fontSize:'42px'
      },
      lineHeight:1.15,
      letterSpacing:1.15,
      MarginBottom:'1.5em',
}));