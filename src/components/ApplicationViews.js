import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductList } from "./products/ProductList"
import { ProductProvider } from "./products/ProductProvider"

export const ApplicationViews = () => (
    <>
        <Route exact path ="/">
            
        </Route>
        <LocationProvider>
            <Route path ="/locations">
                <LocationList />
            </Route>
        </LocationProvider>
        <ProductProvider>
            <Route exact path ="/products">
                <ProductList />
            </Route>
        </ProductProvider>
        <Route exact path ="/employees">
            {/* <EmployeeList /> */}
        </Route>
        <Route exact path ="/productTypes">
            {/* <ProductTypeList /> */}
        </Route>
        <Route exact path ="/customers">
            {/* <CustomerList /> */}
        </Route>
    </>
)