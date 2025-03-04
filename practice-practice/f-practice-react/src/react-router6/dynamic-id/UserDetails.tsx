import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = (): React.ReactElement => {
  const userId = useParams();

  return (
    <>
      <section className="h-screen w-full bg-red-300 text-slate-800">
        <h1>UserDetails page</h1>
        <h1>User id: {userId?.id}</h1>
      </section>
    </>
  );
};

export default UserDetails;
