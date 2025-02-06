import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps): React.ReactElement {
  const isAuthenticate: boolean = false;

  if (!isAuthenticate) {
    console.log("you are not protected user!");
    return <Navigate to={"/"} replace />;
  }

  return <>{children}</>;
}
