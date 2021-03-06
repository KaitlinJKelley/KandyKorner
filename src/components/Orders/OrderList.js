import React, { useContext, useEffect, useState } from "react"
import { authHelper } from "../../auth/authHelper"
import { CustomerProductsContext } from "./CustomerProductProvider"
import { OrderView } from "./OrderView"



export const OrderList = () => {
    const { customerProducts, getCustomerProducts } = useContext(CustomerProductsContext)

    useEffect(() => {
        getCustomerProducts()
    }, [])

    const customerId = parseInt(authHelper.getCurrentUserId())

    const loggedInCustomerProducts = customerProducts.filter(cp => cp.customerId === customerId)
    // debugger
    const productNameArray = [...new Set(loggedInCustomerProducts.map(cp => cp.product.name))]
    
    return (
        <div>
          {
              productNameArray.map(productName => {
                    
                return <OrderView key={Math.random()} products={loggedInCustomerProducts.filter(cp => cp.product.name === productName)} productName={productName}/>
              })
        }  
        </div>
    )


}