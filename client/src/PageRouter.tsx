import { useContext } from 'react'
import Home from './components/Home/Home'

import {NavContext} from "./components/conText/navContext"
import Trips from './components/Trips/Trips';
import CreateTrip from './components/CreateTrip/CreateTrip';

function PageRouter() {
    const {option} = useContext(NavContext);
     
    

  return (
    <>
   
      {option === "Home" && < Home/>}
      {option === "AllTrips" && <Trips/>}
      {option === "CreateTrip" && <CreateTrip/>}

    

    </>
  )
}

export default PageRouter