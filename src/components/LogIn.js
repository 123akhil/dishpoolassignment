import React, { useState, useEffect } from "react";

const LogIn = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };
  return (
    <form
      className="bg-white px-14 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <h1 className="text-pink-500 text-center font-bold text-3xl my-4">
        Login Form
      </h1>
      <div className="flex flex-col w-[280px] ">
        <label className="font-medium text-gray-400">Username</label>
        <input
          className="p-4 my-3 border border-solid border-gray-300 rounded-md"
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
        />
        <span className="text-sm p-1 text-red-600 ">{formErrors.username}</span>
        <label className="font-medium text-gray-400">Password</label>
        <input
          className="p-4 my-3 border border-solid border-gray-300 rounded-md"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <span className="text-sm p-1 text-red-600 ">{formErrors.password}</span>
      </div>
      <button
        type="submit"
        className="w-full p-3 rounded-md bg-pink-300 hover:bg-pink-400 text-lg font-medium mb-7 mt-3"
      >
        Submit
      </button>
    </form>
  );
};

export default LogIn;
