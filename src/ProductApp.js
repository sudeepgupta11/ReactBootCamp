import React from "react"
import ProductList from "./ProductsList"
import Product from "./Product"

function ProductApp(){
    const listOfProducts=ProductList.map(products =>
        <Product
            id={products.id}
            product={products}
        />
    )

    return (
        <div>
            {listOfProducts}
        </div>
    )
}

export default ProductApp