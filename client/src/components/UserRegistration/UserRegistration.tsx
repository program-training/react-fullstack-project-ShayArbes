import React, { useRef, useContext } from "react";
import axios from "axios";
import { NavContext } from "../conText/navContext";

function UserRegistration() {
    const tempSetoption = useContext(NavContext);
    const userNameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);

    const singUp= async ()=>{
        const newUser = {
            email: emailRef.current?.value,
            password: passRef.current?.value,
        }

        try {
            const response = await axios.post(
              "http://localhost:3000/api/auth/register",newUser);
             console.log(response.data.responseObj.token);
    }catch(error){console.log();
    }
}
  return (
    <div>
                <button
    className="btn btn-primary m-2"
    onClick={() => {
        tempSetoption.setOption("Home");
    }}
  >Home</button>
      <div className="vh-100 card">
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

        <form onSubmit={singUp} className="mx-1 mx-md-4">
          <div className="d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <input  type="text" id="form3Example1c" className="form-control" />
              <label className="form-label">Your Name</label>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="email"
                id="form3Example3c"
                className="form-control"
                ref={emailRef}
              />
              <label className="form-label">Your Email</label>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="password"
                id="form3Example4c"
                className="form-control"
                ref={passRef}
              />
              <label className="form-label">Password</label>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="password"
                id="form3Example4cd"
                className="form-control"
              />
              <label className="form-label">Repeat your password</label>
            </div>
          </div>

          <div className="form-check d-flex justify-content-center mb-5">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example3c"
            />
            <label className="form-check-label">
              I agree all statements in <a href="#!">Terms of service</a>
            </label>
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button type="submit" className="btn btn-primary btn-lg">
              Register
            </button>
          </div>
        </form>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
          className="img-fluid"
          alt="Sample image"
        ></img>

        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"></div>
      </div>
    </div>
  );
}

export default UserRegistration;
