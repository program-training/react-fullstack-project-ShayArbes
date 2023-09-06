import React, { useRef, useContext } from "react";
import axios from "axios";
import { TripContext } from "../conText/tripsContext";
import { NavContext } from "../conText/navContext";

function CreateTrip() {
  const { setTrip } = useContext(TripContext);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const destinationRef = useRef<HTMLInputElement | null>(null);
  const startDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const activitiesRef = useRef<HTMLInputElement | null>(null);

  const tempSetoption = useContext(NavContext);
  const { option, setOption } = tempSetoption;

  const handleCreateTrip = async () => {
    const newTrip = {
      name: nameRef.current?.value,
      destination: destinationRef.current?.value,
      startDate: startDateRef.current?.value,
      endDate: endDateRef.current?.value,
      description: descriptionRef.current?.value,
      price: priceRef.current?.value,
      image: imageRef.current?.value,
      activities: activitiesRef.current?.value.split(","),
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/trips",
        newTrip,
        {
          headers: {
            authorization: "test-token",
          },
        }
      );

      if (response.status === 201) {
        const createdTrip = response.data;
        setTrip(createdTrip);
      } else {
        console.error("Failed to create trip");
      }
    } catch (error) {
      console.error("Error creating trip:", error);
    }
  };
  return (
    <div>
      <button
        className="m-3 btn btn-primary"
        onClick={() => {
          setOption("AllTrips");
        }}
      >
        All trips
      </button>
      <div
        className="card text bg-light shadow-lg"
        style={{ fontSize: "20px" }}
      >
        <form onSubmit={handleCreateTrip}>
          <div className="form-outline mb-4">
            <label className="form-label">name</label>
            <input ref={nameRef} type="text" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">destination</label>
            <input ref={destinationRef} type="text" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">activities</label>
            <input ref={activitiesRef} type="text" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">img</label>
            <input ref={imageRef} type="text" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">start Date</label>
            <input ref={startDateRef} type="date" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">end Date</label>
            <input ref={endDateRef} type="date" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">price</label>
            <input ref={priceRef} type="number" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">description</label>
            <textarea ref={descriptionRef} className="form-control"></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTrip;
