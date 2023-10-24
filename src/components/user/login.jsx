import React from "react";

const Login = () => {
  return (
    <div>
      <form className="register-form">
        <input
          type="text"
          label="Username"
          placeholder="Character Name"
        ></input>
        <br />
        <input type="text" label="Password" placeholder="Password"></input>
        <br />
        <button className="logbtn">Login</button>
        <br />
      </form>
    </div>
  );
};
export default Login;
