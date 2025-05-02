/* eslint-disable react/react-in-jsx-scope */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = lazy(() => import("../layouts/Layout"));
const Home = lazy(() => import("../pages/Home"));
const Contact = lazy(() => import("../pages/Contact"));
const About = lazy(() => import("../pages/About"));
const Resister = lazy(() => import("../pages/Resister"));
const Login = lazy(() => import("../pages/Login"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h2>error 404 not found</h2>,
    element: (
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <div className="rounded-lg p-6 text-4xl font-light text-red-500">
              loading...
            </div>
          </div>
        }
      >
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <div className="flex h-screen items-center justify-center">
                <div className="rounded-lg p-6 text-4xl font-light text-red-500">
                  loading...
                </div>
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense
            fallback={
              <div className="flex h-screen items-center justify-center">
                <div className="rounded-lg p-6 text-4xl font-light text-red-500">
                  loading...
                </div>
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense
            fallback={
              <div className="flex h-screen items-center justify-center">
                <div className="rounded-lg p-6 text-4xl font-light text-red-500">
                  loading...
                </div>
              </div>
            }
          >
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={
              <div className="flex h-screen items-center justify-center">
                <div className="rounded-lg p-6 text-4xl font-light text-red-500">
                  loading...
                </div>
              </div>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/resister",
        element: (
          <Suspense
            fallback={
              <div className="flex h-screen items-center justify-center">
                <div className="rounded-lg p-6 text-4xl font-light text-red-500">
                  loading...
                </div>
              </div>
            }
          >
            <Resister />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense
            fallback={
              <div className="flex h-screen items-center justify-center">
                <div className="rounded-lg p-6 text-4xl font-light text-red-500">
                  loading...
                </div>
              </div>
            }
          >
            <Login />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
