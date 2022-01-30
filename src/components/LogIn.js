import React from "react";

const LogIn = (props) => {
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  return (
    <div className="flex flex-col w-[280px] ">
      <label className="font-medium text-gray-400">{label}</label>
      <input
        className="p-4 my-3 border border-solid border-gray-300 rounded-md"
        {...inputProps}
        onChange={onChange}
      />
      <span className="text-sm p-1 text-red-600 ">{errorMessage}</span>
    </div>
  );
};

export default LogIn;
