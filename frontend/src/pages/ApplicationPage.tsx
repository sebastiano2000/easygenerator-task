import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const ApplicationPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    console.log("User logged out");
    navigate("/signin");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      <h1 className="text-2xl font-bold">Welcome to the application.</h1>
      <div className="flex space-x-4">
        <Link to="/signin">
          <Button className="bg-blue-500 text-white py-2 px-4 rounded">
            Sign In
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-green-500 text-white py-2 px-4 rounded">
            Sign Up
          </Button>
        </Link>
      </div>
      <Button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Logout
      </Button>
    </div>
  );
};

export default ApplicationPage;
