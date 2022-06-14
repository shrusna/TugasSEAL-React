import React from "react";

const TextInput = ({ type = "text", placeholder = "input here", ...props }) => {
  return <input type={type} placeholder={placeholder} {...props} />;
};

export default TextInput;
