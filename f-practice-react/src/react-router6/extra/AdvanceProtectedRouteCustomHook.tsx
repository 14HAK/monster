// /* eslint-disable @typescript-eslint/no-explicit-any */
// // 1. Advanced Error Handling and Boundaries
// // 2. Custom Hooks with React Router

// //? Route-Specific Error Boundary [routes/ProtectedArea.tsx]:
// import React from "react";
// import { createBrowserRouter, Outlet, useRouteError } from "react-router-dom";

// export default function ProtectedArea(): React.ReactElement {
//   return (
//     <div>
//       <h2>Protected Content</h2>
//       <Outlet />
//     </div>
//   );
// }

// export function ProtectedErrorBoundary() {
//   const error = useRouteError();
//   return (
//     <div>
//       <h2>Access Error</h2>
//       <p>There was an error accessing this area.</p>
//       <p>
//         <i>{(error as any).statusText || (error as any).message}</i>
//       </p>
//     </div>
//   );
// }

// //? Router Configuration: [routes/App.tsx]:
// import AppLayout from "../AppLayout";
// import ProtectedArea, { ProtectedErrorBoundary } from "./routes/ProtectedArea";
// import SecretPage from "./routes/SecretPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       // ...other routes
//       {
//         path: "protected",
//         element: <ProtectedArea />,
//         errorElement: <ProtectedErrorBoundary />,
//         children: [{ path: "secret", element: <SecretPage /> }],
//       },
//     ],
//   },
// ]);

// //? custom hooks: hooks/useRequireAuth.tsx:
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function useRequireAuth(isAuthenticated, redirectTo = "/login") {
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate(redirectTo, { replace: true });
//     }
//   }, [isAuthenticated, navigate, redirectTo]);
// }

// //? custom hooks: SecretPage.tsx:
// import useRequireAuth from "../hooks/useRequireAuth";

// export default function SecretPage({ isAuthenticated }) {
//   useRequireAuth(isAuthenticated);
//   return (
//     <div>
//       <h2>Secret Page</h2>
//       <p>This content is only visible to authenticated users.</p>
//     </div>
//   );
// }

// * first ctrl + a then uncomment all:
