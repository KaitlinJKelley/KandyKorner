import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeForm = () => {
    const { locations, getLocations } = useContext(LocationContext)
    const { addEmployee } = useContext(EmployeeContext) 

    const history = useHistory()
    const [employee, setEmployee] = useState({
        "name": "",
        "locationId": 0,
        "manager": undefined,
        "fullTime": undefined,
        "hourlyRate": 0,
    })

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <form>
            <fieldset>
                <label htmlFor="name" ></label>
                <input id="name" placeholder="Employee Name"></input>
            </fieldset>
            <fieldset>
                <label htmlFor="location"></label>
                <select>
                    <option value="0"> Select a location</option>
                    {
                        locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)
                    }
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="level"></label>
                <select>
                    <option value="0"> Select a level</option>
                    <option id="manager__true" value="true"> Manager</option>
                    <option id="manager__false" value="false"> Staff</option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="fte"></label>
                <select>
                    <option value="0"> Select an FTE status</option>
                    <option id="fullTime__true" value="true"> Full Time</option>
                    <option id="fullTime__false" value="false"> Part Time</option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="hourlyRate" ></label>
                <input id="hourlyRate" placeholder="Hourly Rate of Pay"></input>
            </fieldset>

        </form>
    )
}