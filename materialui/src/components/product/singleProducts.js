import { Product, ProductMetaWrapper, Productimage } from "../../styles/Products";
import ProductMeta from "./productMeta";


export default function SingleProduct({product, matches}){
    return(
<Product>
    <Productimage src={product.image} />
    <ProductMeta product={product} matches={matches} />

    
</Product>
    )
    }