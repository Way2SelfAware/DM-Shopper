import React from "react";

const Register = () => {
  return (
    <div>
      {/* Potentially add in formdata? */}
      <form>
        <input type="text" label="Username"></input> <br />
        <input type="text" label="Password"></input> <br />
        <input type="text" label="Character Name"></input> <br />
      </form>
    </div>
  );
};

export default Register;
