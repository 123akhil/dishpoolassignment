import { useState } from "react";
import "./App.css";
import LogIn from "./components/LogIn";

function App() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Please enter the username!",
      label: "Username",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Please enter the password",
      label: "Password",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
 
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white px-14 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-pink-500 text-center font-bold text-3xl my-4">
          Log In
        </h1>
        {inputs.map((input) => (
          <LogIn
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="w-full p-3 rounded-md bg-pink-300 hover:bg-pink-400 text-lg font-medium mb-7 mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
