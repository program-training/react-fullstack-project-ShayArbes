import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavContext } from "../conText/navContext";
import { Data } from "../conText/tripsContext";

function Trips() {
  const tempSetoption = useContext(NavContext);
  const { option, setOption } = tempSetoption;

  const [data, setData] = useState<Data[]>([]);
  const [count, setCount] = useState(0);

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
          authorization: "test-token",
        },
      });
    } catch (error) {
      console.log(error);
    }
    setCount(count + 1);
  };
  return (
    <div>
      <div>
        <button
          className="m-3 btn btn-primary"
          onClick={() => {
            setOption("CreateTrip");
          }}
        >
          Create Trip
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setOption("Home");
          }}
        >
          Home
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100 p-0">
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
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser(item.id);
                  }}
                >
                  Delete
                </button>
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
