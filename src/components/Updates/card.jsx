import React from "react";
import "./index.css";
import { TweenMax, Power3 } from "gsap";
import Image from "../../assets/images/news-image.jpg";
import { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
function Card() {
  const [postData, setPostData] = useState([]);
  const [fellowData, setFellowData] = useState([]);
  const [fellowArray, setFellowArray] = useState([]);
  const [associateFellowArray, setAssociateFellowArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("All News");
  const [sortFellowOption, setSortFellowOption] = useState("All Fellows");
  const [sortedPostData, setSortedPostData] = useState([]);
  const [fellowToggle, setFellowToggle] = useState(false);
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        "http://localhost:4500/api/blog/getAllBlogPosts"
      );
      const data = await response.json();
      setPostData(data.blogPosts);
      setSortedPostData(data.blogPosts);
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const fetchFellow = async () => {
      const response = await fetch(
        "http://localhost:4500/api/profile/getAllProfiles"
      );
      const data = await response.json();
      setFellowData(data.profiles);

      const fellowSorting = data.profiles.filter((profile) => {
        return profile.jobPost === "RARA Fellow";
      });

      const associateFellowSorting = data.profiles.filter((profile) => {
        return profile.jobPost === "Associate Fellow";
      });

      setFellowArray(fellowSorting);
      setAssociateFellowArray(associateFellowSorting);
    };
    fetchFellow();
  }, []);

  useEffect(() => {
    const filterSection = document.querySelector(".filter-3");

    if (fellowToggle) {
      TweenMax.set(filterSection, { display: "block", opacity: 0, height: 0 });
      TweenMax.to(filterSection, 0.9, {
        // Adjust duration for opening animation
        opacity: 1,
        height: "auto",
        ease: Power3.easeInOut, // Easing function for opening
        onComplete: () => {
          filterSection.style.height = "auto"; // Set height to auto after animation
        },
      });
    } else {
      TweenMax.to(filterSection, 0.7, {
        // Adjust duration for closing animation
        opacity: 0,
        height: 0,
        ease: Power3.easeIn, // Easing function for closing
      });
    }
  }, [fellowToggle]);

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
  const filterByCategoryAndFellows = (categoryOption, fellowOption) => {
    let filteredData = postData;

    // Apply category filter
    if (categoryOption !== "All News") {
      filteredData = filteredData.filter(
        (post) => post.category === categoryOption
      );
    }
    // Apply fellow filter
    if (fellowOption !== "All Fellows") {
      filteredData = filteredData.filter(
        (post) => post.fellow === fellowOption
      );
    }
    setSortedPostData(filteredData);
  };

  // Handle Active Button
  const handleSortingOption = (categoryOption, fellowOption) => {
    setSortOption(categoryOption);
    setSortFellowOption(fellowOption);
    filterByCategoryAndFellows(categoryOption, fellowOption);
  };

  const fellowToggleHandler = () => {
    setFellowToggle(!fellowToggle);
  };

  const uniqueFellows = new Set(fellowArray.map((post) => post.name));
  const uniqueAssociateFellows = new Set(
    associateFellowArray.map((post) => post.name)
  );

  return (
    <section>
      <div className="filter-1 mt-[75px] lg:mt-[150px] mx-auto w-[90%] lg:w-[80%] py-[50px] gap-32 pr-[150px lg:flex ">
        <div className="filter-by-date my-auto">
          <h5>SORT BY CATEGORY</h5>
        </div>
        <div className="flex gap-2 lg:gap-8 mt-[25px] lg:mt-auto">
          <button
            className={`filter-btn ${
              sortOption === "All News" ? "active" : " "
            }`}
            onClick={() => handleSortingOption("All News", sortFellowOption)}
          >
            ALL NEWS
          </button>
          <button
            className={`filter-btn ${
              sortOption === "RARA Commons" ? "active" : " "
            }`}
            onClick={() =>
              handleSortingOption("RARA Commons", sortFellowOption)
            }
          >
            RARA Commons
          </button>
          <button
            className={`filter-btn ${
              sortOption === "お知らせ" ? "active" : " "
            }`}
            onClick={() => handleSortingOption("お知らせ", sortFellowOption)}
          >
            お知らせ
          </button>
          <button
            className={`filter-btn ${sortOption === "コラム" ? "active" : " "}`}
            onClick={() => handleSortingOption("コラム", sortFellowOption)}
          >
            コラム
          </button>
        </div>
      </div>
      {/*********************** Sort By Fellow ***************************/}

      {console.log("Fellow Array", fellowArray)}
      <div className="filter-2 mx-auto w-[90%] lg:w-[80%] py-[50px] justify-between pr-[150px lg:flex ">
        <div className="filter-by-date my-auto md:flex gap-32 ">
          <h5 className="my-auto">SORT BY FELLOWS</h5>
          <button
            className={`plus-btn mt-[20px] md:mt-0 block filter-btn ${
              sortFellowOption === "All Fellows" ? "active" : ""
            }`}
            onClick={() => handleSortingOption(sortOption, "All Fellows")}
          >
            ALL FELLOWS
          </button>
        </div>
        <div className="toggle-wrapper">
          <div
            className="w-[50%] sm:w-auto flex justify-end md:gap-8 cursor-pointer mt-[50px] md:mt-0"
            onClick={() => fellowToggleHandler()}
          >
            <p>フェローで絞り込む</p>
            {fellowToggle ? (
              <HiMinus className="m-auto" />
            ) : (
              <HiPlus className="m-auto" />
            )}
          </div>
        </div>
      </div>
      {/***********************Toggle Section ***************************/}
      {fellowToggle ? (
        <div className="filter-3 mx-auto w-[80%] py-[50px] pr-[150px] lg:pl-[100px] ">
          <div className="lg:flex lg:gap-32">
            <div className="filter-by-fellow my-auto">
              <h5>Fellows</h5>
            </div>

            <div className="flex gap-4 lg:gap-8 mt-[25px] lg:mt-auto">
              {Array.from(uniqueFellows).map((fellow, index) => (
                <button
                  key={index}
                  className={`filter-btn ${
                    sortFellowOption === fellow ? "active" : ""
                  }`}
                  onClick={() => handleSortingOption(sortOption, fellow)}
                >
                  {fellow}
                </button>
              ))}
            </div>
          </div>
          {/**Associate Fellows filter section */}
          <div className="lg:flex gap-4 lg:gap-16 mt-10">
            <div className="filter-by-fellow my-auto">
              <h5>Associate Fellows</h5>
            </div>

            <div className="flex gap-8 mt-[25px] lg:mt-auto">
              {Array.from(uniqueAssociateFellows).map((fellow, index) => (
                <button
                  key={index}
                  className={`filter-btn ${
                    sortFellowOption === fellow ? "active" : ""
                  }`}
                  onClick={() => handleSortingOption(sortOption, fellow)}
                >
                  {fellow}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {/***********************Cards ***************************/}
      {postData.length > 0 ? (
        <div className="Cards mt-[50px] mb-[100px] w-[80%] m-auto" id="card">
          <div className="flex flex-wrap justify-between">
            {console.log("Data", postData)}
            {sortedPostData.slice(startIndex, endIndex).map((post, index) => (
              <a href={post.link}>
                <div className="news-card mt-[70px] cursor-pointer" key={index}>
                  <div className="img-box">
                    <img className="img" src={post.imagePath} alt="" />
                  </div>
                  <div className="news-cat my-auto">
                    <h5>
                      ${post.category} / ${post.fellow}
                    </h5>
                  </div>
                  <div className="mt-[30px]">
                    <p>{truncateText(post.title, 80)}</p>
                  </div>
                  <div className="date-box flex mt-[90px] justify-between">
                    <div>
                      <p className="date">
                        {new Date(post.publicationDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex">
                      {/* <a href={post.link}> */}
                      <h5 className="text-[10px] lg:text-[11px]">
                        VIEW DETAILS
                      </h5>
                      <div className="bullet"></div>
                      {/* </a> */}
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
        {Array.from({ length: Math.ceil(postData.length / itemsPerPage) }).map(
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
