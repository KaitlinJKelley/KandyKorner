import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeCard } from "./EmployeeCard"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, []) 

    const history = useHistory()

    return (
        <>
        <button onClick={() => {history.push("/employees/create")}}>Add Employee</button>
        <div>
            {
            employees.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)
            }
        </div>
        </>
    )
}