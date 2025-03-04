import React from "react";

const ProtectedComponent = (): React.ReactElement => {
  return (
    <>
      <section className="h-screen w-full bg-blue-300 text-slate-800">
        <h1>Protected component page</h1>
        <p>page of Home</p>
      </section>
    </>
  );
};

export default ProtectedComponent;
