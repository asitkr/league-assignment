import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SecNavbar.css";

function SecNavbar({ onSearch, setFromDate, setToDate, setCountry }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [fromDate, setFromDateLocal] = useState('');
    const [toDate, setToDateLocal] = useState('');
    const [online, setOnline] = useState(navigator.onLine); // Check online status

    useEffect(() => {
        const handleOnline = () => {
            setOnline(true);
            toast.success('You are online \u{1F30D}');
        };
        const handleOffline = () => {
            setOnline(false);
            toast.error('You are offline \u{1F6AB}');
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleFromDateChange = (event) => {
        setFromDateLocal(event.target.value);
    };

    const handleCountryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleToDateChange = (event) => {
        const selectedDate = new Date(event.target.value);
        selectedDate.setDate(selectedDate.getDate() - 2);

        // Convert the date to a string in the format "YYYY-MM-DD"
        const formattedDate = selectedDate.toISOString().split('T')[0];
        setToDateLocal(formattedDate);
    };

    const handleSearchClick = () => {
        if (selectedCategory || (fromDate && toDate)) {
            setFromDate(fromDate);
            setToDate(toDate);
            onSearch(selectedCategory);
        }
    };

    return (
        <div className="secNavbar section">
            <div className="nav-filter-content container">
                {/*Selecting different Categories*/}
                <div className="filteration-data">
                    <p htmlFor="category">Select a category:</p>
                    <select id="category" value={selectedCategory} onChange={handleCategoryChange} className='n-input news-input'>
                        <option value="">Select...</option>
                        <option value="Music">Music</option>
                        <option value="Education">Education</option>
                        <option value="Coding">Coding</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crypto">Crypto</option>
                        <option value="Fashion">Fashion</option>
                    </select>
                </div>
                {/*Selecting Date from and to*/}
                <div className="date-selector">
                    <div className="form-date">
                        <p>From: </p>
                        <input type="date" name="" id="" className='n-input news-input' onChange={handleFromDateChange} />
                    </div>
                    <div className="to-date">
                        <p>To: </p>
                        <input type="date" name="" id="" className='n-input news-input' onChange={handleToDateChange} />
                    </div>
                </div>
                {/*Enter Countries Name*/}
                <div className="country-name">
                    <p>Please Add country: </p>
                    <input type="text" placeholder='e.g Italy' className='n-input news-input' onChange={handleCountryChange} />
                </div>
                {/*Search a Data*/}
                <div className="submit">
                    <button className="search-button" type="submit" onClick={handleSearchClick}>Search</button>
                </div>
                {/* Toast Container */}
                <ToastContainer />
            </div>
        </div>
    );
}

export default SecNavbar;
