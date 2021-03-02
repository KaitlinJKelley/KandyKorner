import React from "react"

export const EmployeeCard = ({ employee }) => (
    <section class="employeea">
        <h2>{employee.name}</h2>
        <p>{employee.location.name}</p>
    </section>
)