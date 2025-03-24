import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={`px-4 py-2 font-semibold rounded ${props.className}`}>
      {props.children}
    </button>
  );
};

export { Button };
