import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { IoSearch } from "react-icons/io5";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ContactCard } from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer } from "react-toastify";
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  const [contacts, setcontacts] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsReff = collection(db, "contacts");

        onSnapshot(contactsReff, (snapshot) => {
          const contactsLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setcontacts(contactsLists);
          return contactsLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsReff = collection(db, "contacts");

    onSnapshot(contactsReff, (snapshot) => {
      const contactsLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactsLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase()),
      );
      setcontacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="relative flex grow items-center">
            <IoSearch className="absolute ml-1 text-3xl text-white" />
            <input
              onChange={filterContacts}
              type="text"
              className="h-10 grow rounded-md border border-white bg-transparent pl-9 text-white"
            />
          </div>
          <div>
            <AiFillPlusCircle
              onClick={onOpen}
              className="cursor-pointer text-5xl text-white"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
