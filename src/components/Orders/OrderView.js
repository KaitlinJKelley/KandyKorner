import React from "react"

export const OrderView = ({ productName, products }) => (
    <section>
        <h2>{productName}</h2>
        <p>Quantity: {products.length}</p>
        <p>Price/unit: ${products[0].product.price}</p>
    </section>
)
   