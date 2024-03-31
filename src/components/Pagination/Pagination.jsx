import React from 'react';
import "./Pagination.css";

function Pagination({ currentPage, totalPages, paginate }) {
  return (
    <div className="pagination section">
      <div className="container">
        <button className="butt" disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)}>Prev</button>
        <span>{currentPage} / {totalPages}</span>
        <button className="butt" disabled={currentPage === totalPages} onClick={() => paginate(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
