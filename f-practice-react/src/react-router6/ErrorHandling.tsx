/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

export default function ErrorHandling(): React.ReactElement {
  const error = useRouteError() as Error;
  console.log(error);

  return (
    <>
      <div className="h-screen w-full bg-red-700 pl-10 text-white">
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{(error as any).statusText || error.message}</i>
        </p>
        <NavLink
          className="font-bold text-amber-300 hover:text-green-300 hover:underline"
          to={"/"}
        >
          Go Home
        </NavLink>
      </div>
    </>
  );
}
