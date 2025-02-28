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
          <div className="flex items-center justify-center h-screen">
            <div className="p-6 text-4xl font-light rounded-lg text-cyan-500">
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
              <div className="flex items-center justify-center h-screen">
                <div className="p-6 text-4xl font-light rounded-lg text-cyan-500">
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
        path: "/about",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <div className="p-6 text-4xl font-light rounded-lg text-cyan-500">
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
        path: "/experiences",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <div className="p-6 text-4xl font-light rounded-lg text-cyan-500">
                  loading...
                </div>
              </div>
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
              <div className="flex items-center justify-center h-screen">
                <div className="p-6 text-4xl font-light rounded-lg text-cyan-500">
                  loading...
                </div>
              </div>
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
              <div className="flex items-center justify-center h-screen">
                <div className="p-6 text-4xl font-light rounded-lg text-cyan-500">
                  loading...
                </div>
              </div>
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
