import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext)

  useEffect(() => {
	getProducts()
    }, [])


  return (
    <div className="products">
      <h1>Inventory Coming Soon!</h1>
      {console.log("productList: Render", products)}
      {
    products.map(product => <productCard key={product.id} product={product} />)
    }
    </div>
  )
}