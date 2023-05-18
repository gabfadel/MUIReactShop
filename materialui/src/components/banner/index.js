import { Typography,useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent } from "../../styles/banner";

export default function Banner(){
    const theme=useTheme();
    const matches= useMediaQuery(theme.breakpoints.down('md'));
    return(
        <BannerContent>
                    <BannerContainer> 
                        <Typography variant='h6'>Huge Collection</Typography></BannerContainer>
       </BannerContent>

    )
}