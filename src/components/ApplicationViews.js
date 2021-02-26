import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationCard } from "./locations/LocationCard"
import { NavBar } from "./nav/NavBar"
import { LocationProvider } from "./locations/LocationProvider"

export const ApplicationViews = () => (
    <>
        <Route exact path ="/">
            {/* <NavBar /> */}
        </Route>
        <LocationProvider>
            <Route exact path ="/locations">
                <LocationList />
            </Route>
        </LocationProvider>
        <Route exact path ="/products">
            {/* <ProductList /> */}
        </Route>
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