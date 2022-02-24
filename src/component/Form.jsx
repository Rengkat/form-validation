import React, { useEffect, useState } from "react";
const Form = () => {
  const [details, setDetails] = useState({
    surname: "",
    firstName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(details);
    setError(validation(details));
  };
  useEffect(() => {
    // console.log(error);
    // if (Object.keys(error).length === 0) {
    //   console.log(details);
    // }
  }, [error]);
  const validation = (values) => {
    const errors = {};
    if (!values.surname) {
      errors.surname = "Surname is required!";
    }
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "password too short!";
    } else if (values.password.length > 10) {
      errors.password = "Passord too long!";
    }
    return errors;
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* {Object.keys(error).length == 0 ? <p>Sign in successfully</p> : ""} */}
      <li>
        <label>Surname:</label>
        <p>{error.surname}</p>
        <input
          type="text"
          name="surname"
          onChange={handleChange}
          value={details.surname}
        />
      </li>
      <li>
        <label>First Name:</label>
        <p>{error.firstName}</p>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={details.firstName}
        />
      </li>
      <li>
        <label>Email:</label>
        <p>{error.email}</p>
        <input
          type="email"
          name="email"
          id=""
          value={details.email}
          onChange={handleChange}
        />
      </li>
      <li>
        <label>Password:</label>
        <p>{error.password}</p>
        <input
          type="password"
          name="password"
          id=""
          value={details.password}
          onChange={handleChange}
        />
      </li>
      <button type="submit">Sing Up</button>
    </form>
  );
};

export default Form;
