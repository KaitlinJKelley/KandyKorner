import React from "react"

export const ProductCard = ({ product }) => (
    <section className="product">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Category: {product.productType.category}</p>
    </section>)