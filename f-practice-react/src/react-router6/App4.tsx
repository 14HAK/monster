import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = lazy(() => import("./layout/AppLayout"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const User = lazy(() => import("./dynamic-id/User"));
const UserDetails = lazy(() => import("./dynamic-id/UserDetails"));
const Search = lazy(() => import("./components/Search"));
const ErrorHandling = lazy(() => import("./components/ErrorHandling"));
const ProtectedComponent = lazy(() => import("./protected/ProtectedComponent"));
const ProtectedRoute = lazy(() => import("./protected/ProtectedRoute"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <Suspense
        fallback={<span className="mx-52 my-52 text-6xl">loading...</span>}
      >
        <ErrorHandling />
      </Suspense>
    ),
    element: (
      <Suspense
        fallback={<span className="mx-52 my-52 text-6xl">loading...</span>}
      >
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={<span className="mx-52 my-52 text-6xl">loading...</span>}
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense
            fallback={<span className="mx-52 my-52 text-6xl">loading...</span>}
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense
            fallback={<span className="mx-52 my-52 text-6xl">loading...</span>}
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={<span className="mx-52 my-52 text-6xl">loading...</span>}
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/user",
        element: (
          <Suspense
            fallback={<span className="mx-52 my-52 text-6xl">loading...</span>}
          >
            <User />
          </Suspense>
        ),
      },
      {
        path: "/user/:id",
        element: (
          <Suspense
            fallback={<span className="mx-52 my-52 text-6xl">loading...</span>}
          >
            <UserDetails />
          </Suspense>
        ),
      },
      {
        path: "/search/:query?",
        element: (
          // optional
          <Suspense
            fallback={<span className="mx-52 my-52 text-6xl">loading...</span>}
          >
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/protected-route",
        element: (
          // optional
          <Suspense
            fallback={<span className="mx-52 my-52 text-6xl">loading...</span>}
          >
            <ProtectedRoute>
              <Suspense
                fallback={
                  <span className="mx-52 my-52 text-6xl">loading...</span>
                }
              >
                <ProtectedComponent />
              </Suspense>
            </ProtectedRoute>
          </Suspense>
        ),
      },
    ],
  },
]);

const App4 = (): React.ReactElement => {
  return <RouterProvider router={router} />;
};

export default App4;
