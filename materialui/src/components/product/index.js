import { useTheme } from "@mui/material/styles";
import { Grid, UseMediaQuery, useMediaQuery } from "@mui/material";
import {products} from "../../data"
import { Container } from "@mui/system";
import SingleProduct from "./singleProducts";


export default function Products(){

    const theme = useTheme();
    const matches=
    useMediaQuery(theme.breakpoints.down('md'))

    const renderProducts = products.map(product =>(
        <Grid item key={product.id} display="flex" flexDirection={"column"}
        alignItems="center">
        <SingleProduct product= {product} matches={matches} />
        </Grid>
    ))
    return(<Container><Grid
    container
    justifyContent={"center"}
    sx={{margin:'20 px 4px 18px 4px'}}
    
    ></Grid></Container>);
}