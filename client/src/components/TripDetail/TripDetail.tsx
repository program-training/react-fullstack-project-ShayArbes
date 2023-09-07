import React, { useState, useEffect, useContext } from "react";
import { Data } from "../conText/tripsContext";
import axios from "axios";
// import { NavContext } from "../conText/navContext";
import { TripContext } from "../conText/tripsContext";
import ButAllTrip from "../Nav/buttons/ButAllTrip";

function TripDetail() {
const [Detail, setDetail] = useState<Data>({});
  const tripContext = useContext(TripContext);

  const { trip } = tripContext;
  

  const fetchData = async () => {
    try {
      if (!trip) throw new Error("trip null");
      const response = await axios.get(
        `http://localhost:3000/api/trips/${trip.id}`
      );
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  console.log(Detail);
  
  return (
    <div>
      <ButAllTrip/>
    <div className="card p-1">
        <div>
          <h1>{Detail.name}</h1>
          <p>{Detail.destination}</p>
          <img className="img-card w-100" src={Detail.image} alt={Detail.name} />
          <p>{Detail.description}</p>
          <p>
            {Detail.startDate} - {Detail.endDate}
          </p>
          <p>Activities:</p>

          <ul>
            {Detail.activities && Detail.activities.map((activity) =>(<li key={activity}>{activity}</li> ))}
          </ul>
          <h5>{Detail.price+"$"}</h5>
        </div>
    </div>


    </div>
  );
}

export default TripDetail;
