import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center flex-col gap-5">
      <h2 className="text-4xl text-stone-900 font-bold">
        404 | Page Not Found.
      </h2>
      <button
        onClick={() => navigate("/")}
        className="py-2.5 px-6 bg-stone-900 rounded-3xl text-white text-xl"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
