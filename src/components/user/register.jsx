import React from "react";

const Register = () => {
  return (
    <div>
      {/* Potentially add in formdata? */}
      <form>
        <input type="text" label="Username" placeholder="Username"></input>
        <br />
        <input type="text" label="Password" placeholder="Password"></input>
        <br />
        <input
          type="text"
          label="Character Name"
          placeholder="Charater Name"
        ></input>
        <br />
        <button>Register</button>
        <br />
      </form>
    </div>
  );
};

export default Register;
