import React from "react";

function Search({ searchCourse, courseSearchUserFunction }) {
  return (
    <header className="App-header">
      <h1>X Store</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Products..."
          value={searchCourse}
          onChange={courseSearchUserFunction}
        />
      </div>
    </header>
  );
}

export default Search;
