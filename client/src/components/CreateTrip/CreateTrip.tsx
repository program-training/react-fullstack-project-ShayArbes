import React, { useRef } from "react";
import { Data } from "../conText/tripsContext";



function CreateTrip() {
  let data:Data;
  const name = useRef(null);
  const destination = useRef(null);
  const activities = useRef(null);
  const startDate = useRef(null);
  const endDate = useRef(null);
  const price = useRef(null);
  const description = useRef(null);
  const handleSubmit =(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if (name.current)
    
    data.name = name.current.value
  }
  return (
    <div className="card bg-success text-light" style={{ width: "55vw" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <label className="form-label">name</label>
          <input ref={name} type="text" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">destination</label>
          <input ref={destination} type="text" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">activities</label>
          <input ref={activities} type="text" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">start Date</label>
          <input ref={startDate} type="date" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">end Date</label>
          <input ref={endDate} type="date" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">price</label>
          <input ref={price} type="number" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">description</label>
          <textarea ref={description} className="form-control"></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          submit
        </button>
      </form>
    </div>
  );
}

export default CreateTrip;
