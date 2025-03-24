import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={`border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 ${props.className}`}
    />
  );
};

export { Input };
