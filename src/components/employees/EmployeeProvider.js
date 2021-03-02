import React, { useContext, useState } from "react"

export const EmployeeContext = useContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees/?_expand=location")
        .then(response => response.json)
        .then(setEmployees)
    }

    const addEmployee = () => {
        
    }
}