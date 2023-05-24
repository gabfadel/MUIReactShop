import { Typography,useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTittle } from "../../styles/banner";
import Promotions from "../promotions";

export default function Banner(){
    const theme=useTheme();
    const matches= useMediaQuery(theme.breakpoints.down('md'));
    return(
        <BannerContainer> 
            <BannerImage src="/images/banner/banner.png" />
               <BannerContent>
                 
                        <Typography variant='h6'>Huge Collection</Typography>
                        <BannerTittle variant="h2">New Bags</BannerTittle>
                        <BannerDescription variant="subtitle">
                            Gabriel's Mui Project Shopping
                        </BannerDescription>
                        <BannerShopButton color="primary">SHOW NOW</BannerShopButton>
                       
                       
       </BannerContent>
       </ BannerContainer> 

    )
}