import { Product, Productimage } from "../../styles/Products";


export default function SingleProduct({product, matches}){
    return(
<Product>
    <Productimage src={product.image} />

    
</Product>
    )
    }