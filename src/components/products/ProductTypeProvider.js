import React, { createContext, useState } from "react"

export const ProductTypesContext = createContext()

export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
        .then(res => res.json())
        .then(setProductTypes)
    }

    return (
        <ProductTypesContext.Provider value={{
            productTypes, getProductTypes
        }}>
            {props.children}
        </ProductTypesContext.Provider>
    )
}