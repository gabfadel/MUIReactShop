import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/Products";

export default function ProductMeta ({product, matches}){

    return(
        <ProductMetaWrapper>
            <Typography variant={matches?'h6':'h5'} lineheight={2}>{product.name}</Typography>
        </ProductMetaWrapper>
    )
}