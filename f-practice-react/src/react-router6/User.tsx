import React from "react";
import { NavLink } from "react-router-dom";

interface TUSERS {
  name: string;
  age: number;
  id: number;
}

const User = (): React.ReactElement => {
  const users: TUSERS[] = [
    { name: "dulon mahadi mollah", age: 29, id: 1 },
    { name: "mahim mollah", age: 21, id: 2 },
    { name: "mahadi mollah", age: 18, id: 3 },
    { name: "razib mia", age: 38, id: 4 },
  ];
  return (
    <>
      <section className="h-screen w-full bg-cyan-700 text-slate-800">
        <h1 className="py-5 text-3xl font-bold">User page: user list</h1>
        <div className="grid grid-cols-3 gap-10">
          {users?.map((user, index) => {
            return (
              <div className="bg-teal-300 px-8 py-4" key={index}>
                <h3 className="mb-1 text-xl text-green-900">{user?.name}</h3>
                <p className="text-md mb-0.5">{user?.age}</p>
                <p className="text-sm font-light">
                  <NavLink
                    to={`${user?.id}`}
                    className="cursor-pointer hover:h-5 hover:w-5 hover:rounded-full hover:bg-red-500 hover:p-0.5 hover:text-slate-800"
                  >
                    userId: {user?.id}
                  </NavLink>
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default User;
