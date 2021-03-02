import React from "react"

export const LocationCard = ({ location }) => (
    <section className="locations">
        <h2>Location # {location.id}</h2>
        <p>{location.address}</p>
        <i>{location.squareFootage} square ft</i><br />
        <p> Wheel Chair Accessible:
            {location.handicapAccessible ? " Yes" : " No"} 
        </p>
    </section>)