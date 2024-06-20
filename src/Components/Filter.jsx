import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <div className="filter-container">
      <label htmlFor="filterStatus">Filter by status: </label>
      <select id="filterStatus" value={filter} onChange={(e) => setFilter(e.target.value)} className="status-dropdown" style={{backgroundColor :'gray'}}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed" >Not Completed</option>
      </select>
    </div>
  );
}

export default Filter;
