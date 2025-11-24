import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaUserEdit } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";

export const ContactCard = ({ contact }) => {
  return (
    <>
      <div
        key={contact.id}
        className="flex bg-yellow justify-around items-center p-2 rounded-lg"
      >
        <div className="flex gap-1">
          <CgProfile className="text-orange text-4xl" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <FaUserEdit className="" />
          <IoMdTrash className=" text-orange" />
        </div>
      </div>
    </>
  );
};
