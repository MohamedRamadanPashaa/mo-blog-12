"use client";

import { useState } from "react";

const SignUp = () => {
  // name email birthdate password passwordConfirm

  const [name, setName] = useState({
    value: "",
    isValid: false,
    touched: false,
  });

  const [email, setEmail] = useState({
    value: "",
    isValid: false,
    touched: false,
  });

  const handleNameChange = (e) => {
    setName((prev) => ({
      ...prev,
      value: e.target.value,
      isValid: e.target.value.trim().length >= 3, // true or false
    }));
  };

  const handleEmailChange = (e) => {
    setEmail((prev) => ({
      ...prev,
      value: e.target.value,
      isValid: e.target.value.includes("@"), // true or false
    }));
  };

  const handleNameTouched = () => {
    setName((prev) => ({ ...prev, touched: true }));
  };

  const handleEmailTouched = () => {
    setEmail((prev) => ({ ...prev, touched: true }));
  };

  return (
    <form>
      <h3>Create New Account</h3>
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Write your full name"
          value={name.value}
          onChange={handleNameChange}
          onBlur={handleNameTouched}
        />
        <p>
          {!name.isValid && name.touched
            ? "Name should be at least 3 chars"
            : ""}
        </p>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Write your email"
          value={email.value}
          onChange={handleEmailChange}
          onBlur={handleEmailTouched}
        />
        <p>
          {!email.isValid && email.touched
            ? "Please provide a valid email"
            : ""}
        </p>
      </div>
    </form>
  );
};

export default SignUp;
