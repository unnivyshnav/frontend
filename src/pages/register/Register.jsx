import "./Register.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import validation from "./validation";

export default function Register() {
  // Manage form Vlaues//

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  // flag for succesful submit
  const [isSubmit, setIsSubmit] = useState(false);

  // Manage form errors
  const [formError, setFormerrors] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormerrors(validation(formValues));
    setIsSubmit(true);
    setError(false);
    if (Object.keys(formError).length === 0 && isSubmit) {
      try {
        const username = formValues.username;
        const password = formValues.password;
        const email = formValues.email;
        const res = await axios.post(
          "https://myblogapion.herokuapp.com/auth/register",
          {
            username,
            email,
            password,
          }
        );
        res.data && window.location.replace("/login");
      } catch (err) {
        setError(true);
      }
    }
  };

  // Succesful Signup
  useEffect(() => {}, [formError]);
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          required=""
          value={formValues.username}
          className="registerInput"
          placeholder="Enter Your Username..."
          onChange={handleChange}
        />
        <p className="error">{formError.username}</p>
        <label>Email</label>
        <input
          type="email"
          name="email"
          required=""
          value={formValues.email}
          className="registerInput"
          placeholder="Enter Your Email..."
          onChange={handleChange}
        />
        <p className="error">{formError.email}</p>
        <label>Password</label>
        <input
          type="password"
          name="password"
          required=""
          value={formValues.password}
          className="registerInput"
          placeholder="Enter Your Password..."
          onChange={handleChange}
        />
        <p className="error">{formError.password}</p>
        <button className="registerButton" type="submit">
          REGISTER
        </button>
      </form>
      <button className="registerLoginButton">
        {" "}
        <Link to="/login" className="link">
          LOGIN
        </Link>
      </button>
      {error && <span>Something Went Wrong!</span>}
    </div>
  );
}
