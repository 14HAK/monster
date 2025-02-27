/* eslint-disable react/react-in-jsx-scope */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("./Layout"));
const About = lazy(() => import("../pages/About"));
const Experience = lazy(() => import("../pages/Experience"));
const Projects = lazy(() => import("../pages/Projects"));
const Skills = lazy(() => import("../pages/Skills"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h2>error 404 not found</h2>,
    element: (
      <Suspense
        fallback={
          <h2 className="mb-14 flex items-center justify-center text-3xl font-light text-cyan-900">
            loading...
          </h2>
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
              <h2 className="mb-14 flex items-center justify-center text-3xl font-light text-cyan-900">
                loading...
              </h2>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={
              <h2 className="mb-14 flex items-center justify-center text-3xl font-light text-cyan-900">
                loading...
              </h2>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/experiences",
        element: (
          <Suspense
            fallback={
              <h2 className="mb-14 flex items-center justify-center text-3xl font-light text-cyan-900">
                loading...
              </h2>
            }
          >
            <Experience />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense
            fallback={
              <h2 className="mb-14 flex items-center justify-center text-3xl font-light text-cyan-900">
                loading...
              </h2>
            }
          >
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/skills",
        element: (
          <Suspense
            fallback={
              <h2 className="mb-14 flex items-center justify-center text-3xl font-light text-cyan-900">
                loading...
              </h2>
            }
          >
            <Skills />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
