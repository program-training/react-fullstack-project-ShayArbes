import { useContext } from 'react'
import Home from './components/Home/Home'

import {NavContext} from "./components/conText/navContext"
import Trips from './components/Trips/Trips';
import NewTripForm from './components/NewTripForm/NewTripForm';
import TripDetail from "./components/TripDetail/TripDetail";
import UpdateTripForm from "./components/UpdateTripForm/UpdateTripForm";
import UserRegistration from "./components/UserRegistration/UserRegistration"
import UserLogin from './components/UserLogin/UserLogin';

function PageRouter() {
    const {option} = useContext(NavContext);
     
    

  return (
    <>
      
      {option === "Home" && < Home/>}
      {option === "AllTrips" && <Trips/>}
      {option === "NewTripForm" && <NewTripForm/>}
      {option === "TripDetail" && <TripDetail/>}
      {option === "UpdateTripForm" && <UpdateTripForm/>}
      {option === "UserRegistration" && <UserRegistration/>}
      {option === "UserLogin" && <UserLogin/>}
      
    

    </>
  )
}

export default PageRouter