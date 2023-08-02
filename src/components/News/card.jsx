import React from "react";
import "./index.css";
import Image from "../../assets/images/news-image.jpg";
import {useState, useEffect } from 'react'
function Card() {
const [newsData, setNewsData] = useState([])
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 21;
useEffect (() => {
    const fetchNews = async() => {
        const response = await fetch ('http://localhost:4500/api/news/getAllNews')
        const data = await response.json()
        setNewsData(data.items)
    }
    fetchNews()
}, [])

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <section>
      <div className="filter-1 flex mt-[150px] mx-auto w-[80%] py-[50px] gap-32 pr-[150px]">
        <div className="filter-by-date my-auto">
          <h5>Sort by date</h5>
        </div>
        <div className="flex gap-8">
          <button className="filter-btn">All News</button>
          <button className="filter-btn">Latests</button>
          <button className="filter-btn">Old to new</button>
          <button className="filter-btn">更新情報</button>
        </div>
      </div>

      <div className="filter-2 flex mx-auto w-[80%] py-[50px] gap-32 pr-[150px]">
        <div className="filter-by-date my-auto">
          <h5>Sort by date</h5>
        </div>
        <div className="flex gap-8">
          <button className="filter-btn">All News</button>
          <button className="filter-btn">Latests</button>
          <button className="filter-btn">Old to new</button>
          <button className="filter-btn">更新情報</button>
        </div>
      </div>

      {/***********************Cards ***************************/}
      <div className="Cards mt-[50px] mb-[100px] w-[80%] m-auto" id="card">
        <div className="flex flex-wrap justify-between">
            {newsData.slice(startIndex, endIndex).map((news, index) => (
                <a href={news.link}>
          <div className="news-card mt-[70px] cursor-pointer">
            <div className="img-box">
              <img className="img" src={Image} alt="" />
            </div>
            <div className="news-cat my-auto" key={index}>
              <h5>研究活動レポート / 松村 浩由</h5>
            </div>
            <div className="mt-[30px]">
            <p>{truncateText(news.title, 85)}</p>
            </div>
            <div className="date-box flex mt-[90px] justify-between">
              <div>
                <p className="date">{new Date(news.isoDate).toLocaleDateString()}</p>
              </div>
              <div> <a href={news.link}>
                <h5 className="text-[10px] lg:text-[11px]">VIEW DETAILS</h5>
                </a>
              </div>
            </div>
          </div>
          </a>
          ))}
        </div>
      </div>

        {/* Pagination */}
        <div className="pagination-box flex justify-center mb-2 w-[90%] m-auto">
        {Array.from({ length: Math.ceil(newsData.length / itemsPerPage) }).map((_, index) => (
            <a href="#card">
          <button key={index} onClick={() => setCurrentPage(index + 1)} className="pagination mr-12">
            {index + 1}
          </button>
          </a>
        ))}
      </div>

    </section>
  );
}

export default Card;
