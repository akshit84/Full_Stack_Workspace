import React from "react";
import { useNavigate } from "react-router";

const Contact = () => {

  const navigate = useNavigate()
  return (
    <div>
      <div>
        <h1 className="text-3xl">Contact Page</h1>
      </div>
      <div className="flex justify-center items-center w-full pb-5 gap-5">
        <button onClick={() => navigate('info')}>Contact Info</button>
        <button onClick={() => navigate('form')}>Contact Form</button>
      </div>
    </div>
  );
};

export default Contact;
