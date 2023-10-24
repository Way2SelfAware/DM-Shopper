// React Hook
import React from "react";
// My Imports

const Register = () => {
  return (
    <div>
      {/* Potentially add in formdata? */}
      <form className="register-form">
        <input type="text" label="Username" placeholder="Character Name"></input>
        <br />
        <input type="text" label="Password" placeholder="Password"></input>
        <br />
        {/* <input
          type="text"
          label="Character Name"
          placeholder="Charater Name"
        ></input> */}
        <br />
        <button className="regbtn">Register</button>
        <br />
      </form>
    </div>
  );
};

export default Register;
