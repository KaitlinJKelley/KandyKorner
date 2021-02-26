import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import { ProductTypesContext } from "./ProductTypeProvider"


export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes } = useContext(ProductTypesContext)

  useEffect(() => {
	getProductTypes()
  .then(getProducts)
    }, [])


  return (
    <div className="products">
      {console.log("productList: Render", products)}
      {
      products.map(product => {
      const productType = productTypes.find(type => type.id === product.productTypeId)
      console.log('prodType: ', productType);
      
      return <ProductCard key={product.id} product={product} productType={productType} />
    })
    }
    </div>
  )
}