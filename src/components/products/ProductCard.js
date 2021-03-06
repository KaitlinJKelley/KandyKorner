import React, { useContext, useState } from "react"
import { CustomerProductsContext } from "../Orders/CustomerProductProvider"  
import { authHelper } from "../../auth/authHelper" 


export const ProductCard = ({ product, productType }) => {
    const { addCustomerProduct } = useContext(CustomerProductsContext)
    
    const [customerProduct, setCustomerProduct] = useState(
        {
            productId: 0,
            customerId: 0
        })

    const handlePurchaseClick = (event) => {
        const newCustomerProduct = { ...customerProduct }

        newCustomerProduct.productId = parseInt(event.target.id)
        newCustomerProduct.customerId = parseInt(authHelper.getCurrentUserId())
        
        addCustomerProduct(newCustomerProduct)
    }
    
    return (
    <section className="product">
        <h2>{product.name}
        <button id={`${product.id}`} onClick={handlePurchaseClick}>Purchase</button>    
        </h2>
        <p>Price: {product.price}</p>
        <p>Category: {productType.category}</p>
    </section>
    )}