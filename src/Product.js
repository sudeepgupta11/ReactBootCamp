import React from "react"

function Product(props){
    return(
        <div>
            <h1>Product: {props.product.name}</h1>
            <h3>Price: {props.product.price.toLocaleString("en-US", { style: "currency", currency: "INR"})}</h3>
            <h5>Description: {props.product.description}</h5>
            <hr></hr>
        </div>
    )
}

export default Product