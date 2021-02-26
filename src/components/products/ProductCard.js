import React from "react"

export const ProductCard = ({ product, productType }) => (
    <section className="product">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Category: {productType.category}</p>
    </section>)