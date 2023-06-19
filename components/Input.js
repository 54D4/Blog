import React from "react";

const Input = ({ name }) => {
  return (
    <div className="flex flex-col">
      <label>{name}</label>
      <input
        type={name}
        name={name}
        id={name}
        placeholder={name}
        className="p-4 rounded-md my-4 border"
      />
    </div>
  );
};

export default Input;
