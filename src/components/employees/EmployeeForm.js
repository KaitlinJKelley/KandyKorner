import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeForm = () => {
    const { getLocations } = useContext(LocationContext)
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
                <label htmlfor="name" placeholder="Employee Name"></label>
                <input id="name"></input>
            </fieldset>
            <fieldset>
                <label htmlfor="location"></label>
                <select>
                    <option value="0"> Select a location</option>
                    {/* {map locations to create options} */}
                </select>
            </fieldset>
            <fieldset>
                <label htmlfor="level"></label>
                <select>
                    <option value="0"> Select a level</option>
                    <option id="manager__true" value="true"> Manager</option>
                    <option id="manager__false" value="false"> Staff</option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlfor="fte"></label>
                <select>
                    <option value="0"> Select an FTE status</option>
                    <option id="fullTime__true" value="true"> Full Time</option>
                    <option id="fullTime__false" value="false"> Part Time</option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlfor="hourlyRate" placeholder="Hourly Rate of Pay"></label>
                <input id="hourlyRate"></input>
            </fieldset>

        </form>
    )
}