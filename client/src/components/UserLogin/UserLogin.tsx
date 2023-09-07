import React, { useRef, useContext } from "react";
import axios from "axios";
import { NavContext } from "../conText/navContext";
function UserLogin() {
  const tempSetoption = useContext(NavContext);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const logeIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newUser = {
      email: emailRef.current?.value,
      password: passRef.current?.value,
    };

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login",newUser);
      localStorage.setItem('token', JSON.stringify(response.data.responseObj.token));
      console.log(response.data.responseObj.token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          tempSetoption.setOption("Home");
        }}
      >
        Home
      </button>
      <div className="card">
        <h2>loge in</h2>
        <form onSubmit={(e)=>{logeIn(e)}}>
          <div className="form-outline mb-4">
            <input ref={emailRef} type="email" id="form2Example1" className="form-control" />
            <label className="form-label">Email address</label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              ref={passRef}
            />
            <label className="form-label">Password</label>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            loge in
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
