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
    // ADD CONDITIONAL TO MAKE SURE ALL FIELDS ARE COMPLETE
    const handleInputChange = (event) => { 
        const newEmployee = {...employee}
         let selectedVal = event.target.value

         //  handles booleans (manager and fullTime)
         if(event.target.id.includes("null")) {
             const [property,] = event.target.id.split("__")

                if(event.target.value === "true") {
                   const boolean = true
                //    debugger
                   newEmployee[property] = boolean
                } else {
                    const boolean = false
                    newEmployee[property] = boolean
                }
                setEmployee(newEmployee)
         } else 
        //  handles integers
         if(event.target.id === "locationId" || event.target.id === "hourlyRate") {
            // If user backspaces, this conditional prevents NaN from being rendered
            if(selectedVal === "") {
                selectedVal = 0
            }

            selectedVal = parseInt(selectedVal)
            newEmployee[event.target.id] = selectedVal
            setEmployee(newEmployee)
        } else {
            
            newEmployee[event.target.id] = selectedVal
            setEmployee(newEmployee)
            console.log(newEmployee)
        }

    }

    const handleSaveEmployeeClick = () => {
        addEmployee(employee)
        .then(history.push("/employees"))
    }

    return (
        <form>
            <fieldset>
                <label htmlFor="name"></label>
                <input type="text" id="name" onChange={handleInputChange} Required value={employee.name} placeholder="Employee Name"/>
            </fieldset>
            <fieldset>
                <label htmlFor="location"></label>
                <select id="locationId" onChange={handleInputChange}>
                    <option value="0"> Select a location</option>
                    {
                        locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)
                    }
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="level"></label>
                <select id="manager__null" onChange={handleInputChange}>
                    <option value="0"> Select a level</option>
                    <option value="true"> Manager</option>
                    <option value="false"> Staff</option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="fte"></label>
                <select id="fullTime__null" onChange={handleInputChange}>
                    <option value="0"> Select an FTE status</option>
                    <option value="true"> Full Time</option>
                    <option value="false"> Part Time</option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="hourlyRate" ></label>
                <input id="hourlyRate" Required value={employee.hourlyRate} onChange={handleInputChange} placeholder="Hourly Rate of Pay"></input>
            </fieldset>
            <button onClick={handleSaveEmployeeClick}>Save Employee</button>

        </form>
        
    )
}