import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavContext } from "../conText/navContext";
import { Data, } from "../conText/tripsContext";
import {TripContext} from "../conText/tripsContext"

function Trips() {
  const tempSetOption = useContext(NavContext);
  const { setOption } = tempSetOption;

  const [data, setData] = useState<Data[]>([]);
  const [count, setCount] = useState(0);





  const tripContext = useContext(TripContext);
  const { setTrip } = tripContext;

 

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Data[]>(
        "http://localhost:3000/api/trips"
      );
      setData(response.data);
    };

    fetchData();
  }, [count]);

  const deleteUser = async (id: string) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/trips/${id}`, {
        headers: {
          authorization: JSON.parse(localStorage.getItem('token') as string),
        },
      });
    } catch (error) {
      console.log(error);
    }
    setCount(count + 1);
  };
  return (
    <div>
      <div className="btn-group m-3">
      <button
          className="btn btn-primary m-2"
          onClick={() => {
            setOption("NewTripForm");
          }}
        >
          NewTrip
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            setOption("Home");
          }}
        >
          Home
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((item) => (
          <div className="col" key={item.id} onClick={()=>{
            console.log(item);
            
            setTrip(item);
            setOption("TripDetail");
            
          }}>
            <div className="card h-100 p-0 shadow-lg">
              <img src={item.image} className="card-img-top h-100" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p>{item.destination}</p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit fugiat praesentium voluptatem quas odio maxime porro
                  nulla eaque, eligendi cumque ducimus non saepe veniam
                  voluptate harum dicta natus animi sed!
                </p>
                <div className="btn-group">
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTrip(item);
                    setOption("UpdateTripForm");
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteUser(item.id);
                  }}
                >
                  Delete
                </button>
                </div>
                <div className="card-footer text-muted mt-2 ">{item.startDate} - {item.endDate}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trips;
