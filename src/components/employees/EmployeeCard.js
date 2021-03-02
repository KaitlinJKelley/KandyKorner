import React from "react"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h2>{employee.name}</h2>
        <p><b>Location:</b> {employee.location.name}</p>
    </section>
)