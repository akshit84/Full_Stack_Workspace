import React from "react";

const NotFoundContact = () => {
  return (
    <>
      <div className="flex m-auto h-[80vh] gap-4 justify-center items-center">
        <div>
          <img src="/contact.png" alt="contact logo" />
        </div>
        <h3 className="text-white text-2xl font-semibold">Conatct not Found</h3>
      </div>
    </>
  );
};

export default NotFoundContact;
