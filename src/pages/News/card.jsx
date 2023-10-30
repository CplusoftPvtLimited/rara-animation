import React from "react";
import "./index.css";
import Image from "../../assets/images/Logo.png";
import { useState, useEffect } from "react";

function Card() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("latest");
  const [sortedNewsData, setSortedNewsData] = useState([]);
  const itemsPerPage = 21;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/news/getAllNews`
      );
      const data = await response.json();
      console.log("***🚀 ~ file: card.jsx:21 ~ fetchNews ~ data:", data);
      setNewsData(data.items);
      setSortedNewsData(data.items);
    };
    fetchNews();
  }, []);

  // Cut short the blog title
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  // Scroll page to top when page changes
  const scrollToTop = () => {
    window.scrollTo(500, 500);
  };

  // Filter Buttons Setup
  const filterNewsData = (option) => {
    switch (option) {
      case "latest":
        setSortedNewsData([...newsData].sort((a, b) => b.pubDate - a.pubDate));
        break;
      case "oldest":
        setSortedNewsData(
          [...newsData].sort(
            (a, b) => new Date(a.isoDate) - new Date(b.isoDate)
          )
        );
        break;
      default:
        setSortedNewsData(newsData);
        break;
    }
  };

  // Handle Active Button
  const handleSortingOption = (option) => {
    setSortOption(option);
    filterNewsData(option);
  };

  return (
    <section>
      <div className="filter-1 mt-[75px] lg:mt-[150px] mx-auto w-[80%] py-[50px] gap-32 pr-[150px lg:flex ">
        <div className="filter-by-date my-auto">
          <h5>Sort by</h5>
        </div>
        <div className="flex gap-8 mt-[25px] lg:mt-auto">
          <button
            className={`filter-btn ${sortOption === "latest" ? "active" : " "}`}
            onClick={() => handleSortingOption("latest")}
          >
            Latests
          </button>
          <button
            className={`filter-btn ${sortOption === "oldest" ? "active" : " "}`}
            onClick={() => handleSortingOption("oldest")}
          >
            Old to new
          </button>
          {/* <button
            className={`filter-btn ${sortOption === "Active" ? "active" : " "}`}
            onClick={() => handleSortingOption("Active")}
          >
            Active
          </button> */}
        </div>
      </div>

      {/***********************Cards ***************************/}
      {newsData.length > 0 ? (
        <div className="Cards mt-[50px] mb-[100px] w-[80%] m-auto" id="card">
          <div className="flex flex-wrap justify-between">
            {console.log(sortOption, sortedNewsData)}
            {sortedNewsData.slice(startIndex, endIndex).map((news, index) => (
              <a
                href={news.link}
                target="_blank"
                style={{ color: "#383838", textDecoration: "none" }}
              >
                <div
                  className="news-card mt-[70px] cursor-pointer"
                  key={index}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {/* Set a fixed height for the card container, adjust as needed */}
                  <div className="img-box">
                    <img className="img" src={Image} alt="" />
                  </div>
                  <div className="news-cat my-auto">
                    <h5>Research activity report</h5>
                  </div>
                  <div className="mt-[30px] flex-grow">
                    <p>{truncateText(news.title, 80)}</p>
                  </div>
                  <div className="date-box flex justify-between mt-[10px]">
                    <div>
                      <p className="date">
                        {new Date(news.isoDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      {" "}
                      <a
                        href={news.link}
                        style={{ color: "#383838", textDecoration: "none" }}
                      >
                        <h5 className="text-[10px] lg:text-[11px]">
                          VIEW DETAILS
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto my-[50px] text-center">
          <p>No Feed Found</p>
        </div>
      )}

      {/* Pagination */}
      <div className="pagination-box flex justify-center mb-2 w-[90%] m-auto">
        {Array.from({ length: Math.ceil(newsData.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index + 1);
                scrollToTop();
              }}
              className={`pagination ${
                currentPage === index + 1 ? "bold-text" : ""
              } mr-12`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </section>
  );
}

export default Card;
