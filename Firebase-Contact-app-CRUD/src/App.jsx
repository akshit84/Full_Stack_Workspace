import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { IoSearch } from "react-icons/io5";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { ContactCard } from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

const App = () => {
  const [contacts, setcontacts] = useState([]);

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  }
  const onClose = () =>{
    setOpen(false)
  }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsReff = collection(db, "contacts");
        const contactSnapShot = await getDocs(contactsReff);
        const contactsLists = contactSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setcontacts(contactsLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex grow relative items-center">
            <IoSearch className="ml-1 text-3xl text-white absolute" />
            <input
              type="text"
              className="bg-transparent border border-white rounded-md h-10 grow text-white pl-9"
            />
          </div>
          <div>
            <AiFillPlusCircle onClick={onOpen} className="text-5xl cursor-pointer text-white" />
          </div>
        </div>
        <div className="mt-4 gap-3 flex flex-col">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
    </>
  );
};

export default App;
