import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from 'yup'

const contactSchemaValidation = Yup.object().shape({
  name:Yup.string().required("Name is Required"),
  email:Yup.string().email("Invalid Email").required("Email is Required"),

})

const AddAndUpdateContact = ({ onClose, isOpen, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactReff = collection(db, "contacts");
      await addDoc(contactReff, contact);
      onClose();
      toast.success("Contact Added Successufully.");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactReff = doc(db, "contacts", id);
      await updateDoc(contactReff, contact);
      onClose();
      toast.success("Contact Updated Successufully.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
        validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name"/>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="border h-10" />
            </div>
            <div className="text-red-500 text-xs">
                <ErrorMessage name="email"/>
              </div>
            <button
              className="bg-orange px-3 py-1.5
            border self-end"
            >
              {isUpdate ? "update" : "add"} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default AddAndUpdateContact;
