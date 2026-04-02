import React from "react";

function Filter({ setFilter }) {
  return (
    <div className="filter">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
    </div>
  );
}

export default Filter;