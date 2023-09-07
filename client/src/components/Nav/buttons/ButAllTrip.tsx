import React,{useContext} from 'react'
import { NavContext } from "../../conText/navContext";


function ButAllTrip() {
    const tempSetoption = useContext(NavContext);
  return (
    <div>
        <button
    className="btn btn-primary m-2"
    onClick={() => {
        tempSetoption.setOption("AllTrips");
    }}
  >All trips</button></div>
  )
}

export default ButAllTrip

