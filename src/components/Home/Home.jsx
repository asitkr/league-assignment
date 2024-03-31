import React from 'react';
import ScrollUp from '../ScrollUp/ScrollUp';
import "./Home.css";

function Home({ data }) {
  // Check if data is undefined or null
  if (!data) {
    return <p></p>;
  }

  // Data is fetched and not empty
  return (
    <div className="home section">
      <div className="container">
        <div className="card">
          {data.map((item, i) => (
            <a key={i} href={item.url} className="card-link"> {/* Apply card-link class */}
              <div className='card-data'>
                <img src={item.urlToImage} alt="" />
                <div className="card-content">
                  <h3 className="news-title">{item.title}</h3>
                  <h6 className="news-source">{item.source.name} - {new Date(item.publishedAt).toLocaleString("en-US", {
                    timeZone: "Asia/Jakarta"
                  })}</h6>
                  <p className="news-desc">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <ScrollUp/>
      </div>
    </div>
  );
}

export default Home;
