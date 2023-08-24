import React from "react";
import "./index.css";
import Image from "../../assets/images/news-image.jpg";
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
      const response = await fetch("http://localhost:4500/api/news/getAllNews");
      const data = await response.json();
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
        </div>
      </div>

      {/***********************Cards ***************************/}
      {newsData.length > 0 ? (
        <div className="Cards mt-[50px] mb-[100px] w-[80%] m-auto" id="card">
          <div className="flex flex-wrap justify-between">
            {console.log(sortOption, sortedNewsData)}
            {sortedNewsData.slice(startIndex, endIndex).map((news, index) => (
              <a href={news.link}>
                <div className="news-card mt-[70px] cursor-pointer" key={index}>
                  {/* <div className="img-box">
                    <img className="img" src={Image} alt="" />
                  </div> */}
                  {/* <div className="news-cat my-auto">
                    <h5>研究活動レポート / 松村 浩由</h5>
                  </div> */}
                  <div className="mt-[30px]">
                    <p>{truncateText(news.title, 80)}</p>
                  </div>
                  <div className="date-box flex mt-[90px] justify-between">
                    <div>
                      <p className="date">
                        {new Date(news.isoDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      {" "}
                      <a href={news.link}>
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
        <div>Loading...</div>
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
