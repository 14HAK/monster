import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import("../components/Header.tsx"));
const Footer = lazy(() => import("../components/Footer.tsx"));

export default function AppLayout(): React.ReactElement {
  return (
    <>
      <header>
        <Suspense
          fallback={<span className="mx-52 my-52 text-6xl">loading...</span>}
        >
          <Header />
        </Suspense>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Suspense
          fallback={<span className="mx-52 my-52 text-6xl">loading...</span>}
        >
          <Footer />
        </Suspense>
      </footer>
    </>
  );
}
