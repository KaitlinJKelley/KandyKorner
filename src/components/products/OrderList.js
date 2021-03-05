import React, { useContext, useEffect, useState } from "react"
import { authHelper } from "../../auth/authHelper"
import { CustomerProductsContext } from "./CustomerProductProvider"
import { ProductCard } from "./ProductCard"

export const OrderList = () => {
    const { customerProducts, getCustomerProducts } = useContext(CustomerProductsContext)

    useEffect(() => {
        getCustomerProducts()
    }, [])

    const customerId = parseInt(authHelper.getCurrentUserId())
    // debugger

    const loggedInCustomerProducts = customerProducts.filter(cp => cp.customerId === customerId)

    return (
        <div>
          {
              loggedInCustomerProducts.map(loggedInCP => {
                  console.log("loggedInCP list" ,loggedInCP)
                  return <ProductCard key={loggedInCP.id} product={loggedInCP.product}/>
              })
        }  
        </div>
    )


}