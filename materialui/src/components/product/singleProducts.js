import { Stack } from "@mui/material";
import { Product, ProductMetaWrapper, ProductImage, ProductActionButton, ProductActionsWrapper, ProductFavButton, ProductAddToCart } from "../../styles/product";
import ProductMeta from "./productMeta";
import FavoriteIcon  from "@mui/icons-material/Favorite"
import ShareIcon  from "@mui/icons-material/Share"
import { FitScreen } from "@mui/icons-material";
import { useState } from "react";

export default function SingleProduct({product, matches}){
  
    const[showOptions, setShowOptions]=useState(false);

    const handleMouseEnter=()=>{setShowOptions(true);}  
      const handleMouseLeave=()=>{setShowOptions(false);}
   return(
<Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <ProductImage src={product.image} />
    <ProductFavButton isFav={0}>
        <ProductFavButton />
    </ProductFavButton>
    {showOptions && <ProductAddToCart show={showOptions} variant="contained" >Add to Cart</ProductAddToCart>}
    <ProductMeta product={product} matches={matches} />
    <ProductActionsWrapper show={showOptions}>
        <Stack direction="column">
        <ProductFavButton isFav={1}>
            <FavoriteIcon />
            </ProductFavButton>

            <ProductActionButton>
                <FitScreen color="primary" />
            </ProductActionButton>
        </Stack>
    </ProductActionsWrapper>
    <ProductAddToCart variant="contained"> Add To Card</ProductAddToCart>
    <ProductMeta product={product} matches={matches} />

    
</Product>
    )
    }