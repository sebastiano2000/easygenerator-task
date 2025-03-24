import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return <div className={`bg-white rounded shadow ${className}`}>{children}</div>;
};

const CardContent = ({ children, className = "" }: CardContentProps) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export { Card, CardContent };
