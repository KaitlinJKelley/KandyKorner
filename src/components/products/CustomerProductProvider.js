import React, { createContext, useState } from "react"

export const CustomerProductsContext = createContext()

export const CustomerProductsProvier = (props) => {

    const [customerProducts, setCustomerProducts] = useState([])

    const getCustomerProducts = () => {
        return fetch("http://localhost:8088/customerProducts")
        .then(response => response.json())
        .then(setCustomerProducts)
    }

    const addCustomerProduct = productObj => {
        return fetch("http://localhost:8088/customerProducts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(getCustomerProducts)
    }

    return (
        <CustomerProductsContext.Provider value={{
            customerProducts, getCustomerProducts, addCustomerProduct
        }}>
            {props.children}
        </CustomerProductsContext.Provider>
    )
}