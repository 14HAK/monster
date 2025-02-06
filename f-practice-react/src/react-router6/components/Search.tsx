import React from "react";
import { useParams } from "react-router-dom";

export default function Search(): React.ReactElement {
  // "query" is optional in this case.
  const { query } = useParams();

  return (
    <div>
      <h2>Search Page</h2>
      {query ? (
        <p>Showing results for: {query}</p>
      ) : (
        <p>Please enter a search query.</p>
      )}
    </div>
  );
}
