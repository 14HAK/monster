// 1. useNavigation: Provides information about the current navigation state (idle, loading, submitting).
// 2. Conditional UI: The spinner (or any loading indicator) shows when a new route is being loaded.
import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";

export default function Navigation(): React.ReactElement {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <header>
        <h1>My Advanced Router App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/posts/1">Post Details</Link>
        </nav>
      </header>
      {isLoading && <div className="spinner">Loading...</div>}
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
}
