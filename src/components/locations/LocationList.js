import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
	getLocations()
    }, [])


  return (
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {
    locations.map(location => <LocationCard key={location.id} location={location} />)
    }
    </div>
  )
}