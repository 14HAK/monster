/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext } from "react";

interface TUSER {
  name: string;
  email: string;
}

const MyContext = createContext<TUSER>({
  name: "Mahbub islam",
  email: "mahbub12@gmail.com",
});

const Context2: React.FC = ({ children }: any) => {
  const user = { name: "Mahbub islam", email: "mahbub12@gmail.com" };
  return <MyContext.Provider value={user}>{children}</MyContext.Provider>;
};

export default Context2;

export const Context: React.FC = () => {
  const data = useContext(MyContext);
  console.log(data);
  return (
    <>
      <h2>manana</h2>
    </>
  );
};
