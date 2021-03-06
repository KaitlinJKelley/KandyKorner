import React from "react"

export const OrderView = ({ productName, products }) => (
    <section>
        <h2>{productName}</h2>
        <p>Quantity: {products.length}</p>
        <p>Line Total: ${(products[0].product.price * products.length).toFixed(2)}</p>
    </section>
)
   