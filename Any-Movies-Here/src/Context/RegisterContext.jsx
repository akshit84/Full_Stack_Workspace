import { createContext, useState } from "react";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("registeredUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const registerUser = ({ uname, email, pass }) => {
    const newUser = { uname, email, pass };
    setUser(newUser);
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
  };

  const checkLogin = (email, pass) => {
    if (!user) return false;
    return user.email === email && user.pass === pass;
  };


  const context = { user, registerUser, checkLogin, setUser };

  return (
    <RegisterContext.Provider value={context}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext