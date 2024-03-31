import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import Home from '../Home/Home';
import Pagination from '../Pagination/Pagination'; 
import navHeading from "../../image/navbar-img.jpg";
import SecNavbar from '../SecNavbar.jsx/SecNavbar';

function Navbar() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("India");
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Number of items to display per page
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSearch = () => {
    setText(searchInput);
    setCurrentPage(1); // Reset to the first page when initiating a new search
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${text}&from=2024-02-28&sortBy=publishedAt&apiKey=a75947d210d34b888c6e261f3cc982f1`);
        const responseData = await response.json();
        if (responseData.articles) {
          setData(responseData.articles);
          // Cache the API response
          localStorage.setItem('cachedData', JSON.stringify(responseData.articles));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // If there's an error fetching data, try to retrieve data from cache
        const cachedData = localStorage.getItem('cachedData');
        if (cachedData) {
          setData(JSON.parse(cachedData));
        }
      }
    };

    fetchData();
  }, [text, fromDate, toDate]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  }

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate index of the last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage;

  // Calculate index of the first item of the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get current page items
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  //Select a dropdown
  const handleSearchByCategory = (category) =>{
    setText(category);
    setCurrentPage(1);
  }

  return (
    <div className="navbar">
      <div className="nav-content">
        <div className="header container">      
          <div className="l-heading">
            <img src={navHeading} alt="" className="nav-img" />
          </div>
          <div className="search-bar">
            <input className="news-input" placeholder="e.g. Science" type="search" value={searchInput} onChange={handleInputChange} onKeyDown={(event) => {if (event.key === 'Enter') {handleSearch();}}}/>
            <button className="nav-button" type="button" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
      <SecNavbar onSearch={handleSearchByCategory} setFromDate={setFromDate} setToDate={setToDate} setCout={handleSearchByCategory}/>
      <Home data={currentItems} />
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
      )}
    </div>
  )
}

export default Navbar;
