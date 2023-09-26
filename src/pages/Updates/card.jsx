import React, { useRef } from "react";
import "./updates.css";
import { TweenMax, Power3 } from "gsap";
import Image from "../../assets/images/news-image.jpg";
import { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Card() {
  const [postData, setPostData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
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
  const navigate = useNavigate();
  const [regionFilter, setRegionFilter] = useState("All Regions");

  const scrollContainer = document.querySelector(".custom-container");
  const targetElementRef = useRef(null); // Ref for the element to scroll into view

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/blog/getAllBlogPosts`
      );
      const data = await response.json();
      console.log("🚀 ~ file: card.jsx:38 ~ fetchNews ~ data:", data.blogPosts);
      setPostData(data.blogPosts);
      setSortedPostData(data.blogPosts);
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/category`);
      const data = await response.json();
      console.log("🚀 ~ file: card.jsx:42 ~ fetchCategory ~ data:", data);
      setCategoryData(data);
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchFellow = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/profile/getAllProfiles`
      );
      const data = await response.json();
      setFellowData(data.profiles);

      const fellowSorting = data.profiles.filter((profile) => {
        return !profile.jobPost?.includes("Associate");
      });

      const associateFellowSorting = data.profiles.filter((profile) => {
        return profile.jobPost?.includes("Associate");
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
    if (text.length > 12) {
      return text.slice(0, 20) + "...";
    }
    return text;
  }

  // Scroll page to top when page changes
  const scrollToTop = () => {
    window.scrollTo(500, 500);
  };

  // Filter Buttons Setup
  const filterByCategoryAndFellows = (
    categoryOption,
    fellowOption,
    regionOption
  ) => {
    // Filter data based on category
    let filteredData = postData;
    const selectedCategoryId = categoryData.find(
      (category) => category.title === categoryOption
    )?.id;

    if (categoryOption !== "All News") {
      filteredData = filteredData.filter(
        (post) => post.category == selectedCategoryId
      );
    }

    // Filter data based on fellow
    const selectedFellowId = fellowData.find(
      (fellow) => fellow.name === fellowOption
    )?.id;

    if (fellowOption !== "All Fellows") {
      filteredData = filteredData.filter(
        (post) => post.fellow?.id == selectedFellowId
      );
    }

    // Filter data based on region
    if (regionOption !== "All Regions") {
      filteredData = filteredData.filter((post) => {
        const postRegion = post.region.toLowerCase();
        const selectedRegion = regionOption.toLowerCase();

        // Check if the post's region exactly matches the selected region
        if (postRegion === selectedRegion) {
          return true;
        }

        // If not, check if the post's country falls into the selected continent
        const countryContinent = getContinentForCountry(post.country);
        return countryContinent.toLowerCase() === selectedRegion;
      });
    }

    // Update sorted data with filtered results
    setSortedPostData(filteredData);
  };

  // Function to get continent for a given country (you'll need a library for this)
  const getContinentForCountry = (country) => {
    // Implement logic to map country to continent, you can use a library like "countryjs" or create a custom mapping.
  };

  // Handle Active Button
  const handleSortingOption = (
    categoryOption,
    fellowOption,
    selectedRegionOption
  ) => {
    setSortOption(categoryOption);
    setSortFellowOption(fellowOption);
    setRegionFilter(selectedRegionOption);
    filterByCategoryAndFellows(
      categoryOption,
      fellowOption,
      selectedRegionOption
    );
  };

  const fellowToggleHandler = () => {
    setFellowToggle(!fellowToggle);
  };

  const handleClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  const uniqueFellows = new Set(fellowArray.map((post) => post.name));
  const uniqueCategory = new Set(
    categoryData.map((category) => category.title)
  );
  const uniqueAssociateFellows = new Set(
    associateFellowArray.map((post) => post.name)
  );

  let scrollPos = 0;

  function updateScrollbar() {
    const scrollbar = document.querySelector(".c-scrollbar_thumb");
    const scrollbarHeight =
      (scrollContainer.offsetHeight * scrollContainer.offsetHeight) /
      scrollContainer.scrollHeight;

    gsap.set(scrollbar, {
      height: scrollbarHeight,
      y:
        (scrollPos * (scrollContainer.offsetHeight - scrollbarHeight)) /
        (scrollContainer.scrollHeight - scrollContainer.offsetHeight),
    });
  }
  const scrollToElement = () => {
    const targetElement = targetElementRef.current;
    if (scrollContainer && targetElement) {
      const targetPos = targetElement.offsetTop - scrollContainer.offsetTop; // Calculate relative position

      scrollPos = scrollContainer.scrollTop + targetPos;

      gsap.to(scrollContainer, {
        scrollTop: scrollPos,
        overwrite: "auto",
        onUpdate: updateScrollbar,
        duration: 0.5,
        onComplete: () => {
          ScrollTrigger.update();
        },
      });
    }
  };

  return (
    <section ref={targetElementRef}>
      <div className="filter-1 mt-[75px] lg:mt-[150px] mx-auto w-[90%] lg:w-[85%] py-[50px] gap-32 pr-[150px lg:flex ">
        <div className="filter-by-date my-auto">
          <h5>SORT BY FOCUS AREAS</h5>
        </div>
        <div className="flex flex-wrap gap-2 lg:gap-8 mt-[25px] lg:mt-auto">
          <button
            className={`filter-btn ${
              sortOption === "All News" ? "active" : ""
            }`}
            onClick={() =>
              handleSortingOption("All News", sortFellowOption, regionFilter)
            }
          >
            ALL NEWS
          </button>
          {Array.from(uniqueCategory).map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${
                sortOption === category ? "active" : ""
              }`}
              onClick={() =>
                handleSortingOption(category, sortFellowOption, regionFilter)
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-container filter-2 flex flex-wrap gap-16 py-[50px] w-[85%] mx-auto">
        <div className="filter-by-date my-auto">
          <h5>SORT BY REGION</h5>
        </div>
        <div className="flex flex-wrap gap-2 lg:gap-8 mt-[25px] w-[80%] lg:mt-auto">
          <button
            className={`filter-btn ${
              regionFilter === "All Regions" ? "active" : ""
            }`}
            onClick={() =>
              handleSortingOption(sortOption, sortFellowOption, "All Regions")
            }
          >
            ALL REGIONS
          </button>
          <button
            className={`filter-btn ${
              regionFilter === "Africa" ? "active" : ""
            }`}
            onClick={() =>
              handleSortingOption(sortOption, sortFellowOption, "Africa")
            }
          >
            AFRICA
          </button>
          <button
            className={`filter-btn ${regionFilter === "Asia" ? "active" : ""}`}
            onClick={() =>
              handleSortingOption(sortOption, sortFellowOption, "Asia")
            }
          >
            ASIA
          </button>
          <button
            className={`filter-btn ${
              regionFilter === "Central America" ? "active" : ""
            }`}
            onClick={() =>
              handleSortingOption(
                sortOption,
                sortFellowOption,
                "Central America"
              )
            }
          >
            CENTRAL AMERICA
          </button>
          <button
            className={`filter-btn ${
              regionFilter === "Europe" ? "active" : ""
            }`}
            onClick={() =>
              handleSortingOption(sortOption, sortFellowOption, "Europe")
            }
          >
            EUROPE
          </button>
          <button
            className={`filter-btn ${
              regionFilter === "Middle East" ? "active" : ""
            }`}
            onClick={() =>
              handleSortingOption(sortOption, sortFellowOption, "Middle East")
            }
          >
            MIDDLE EAST
          </button>
          <button
            className={`filter-btn ${
              regionFilter === "North America" ? "active" : ""
            }`}
            onClick={() =>
              handleSortingOption(sortOption, sortFellowOption, "North America")
            }
          >
            NORTH AMERICA
          </button>
          <button
            className={`filter-btn ${
              regionFilter === "South America" ? "active" : ""
            }`}
            onClick={() =>
              handleSortingOption(sortOption, sortFellowOption, "South America")
            }
          >
            SOUTH AMERICA
          </button>
          <button
            className={`filter-btn ${
              regionFilter === "Pacific" ? "active" : ""
            }`}
            onClick={() =>
              handleSortingOption(sortOption, sortFellowOption, "Pacific")
            }
          >
            PACIFIC
          </button>
        </div>
      </div>

      {/*********************** Sort By Fellow ***************************/}

      {console.log("Fellow Array", uniqueAssociateFellows)}
      <div className="filter-2 mx-auto w-[90%] lg:w-[85%] py-[50px] md:flex-wrap justify-between pr-[150px lg:flex ">
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
        <div className="filter-3 mx-auto w-[85%] py-[50px] pr-[150px] lg:pl-[100px] ">
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
      {postData && postData.length > 0 ? (
        <div className="Cards mt-[50px] mb-[100px] w-[85%] mx-auto" id="card">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:ml-12 xl:gap-8">
            {console.log("Data", postData)}
            {sortedPostData.slice(startIndex, endIndex).map((post, index) => (
              <div
                className="news-card cursor-pointer flex flex-col"
                key={index}
                onClick={() => handleClick(post.id)}
              >
                <div className="img-box">
                  <img className="img" src={post.imagePath} alt="" />
                </div>
                <div className="news-cat my-auto">
                  <h5>
                    ${post?.category?.title} {post?.fellow ? "/" : ""} $
                    {post.fellow?.name} {post?.associatedFellow ? "/" : ""}
                    {post?.associatedFellow?.name}
                  </h5>
                </div>
                <div className="mt-auto">
                  <p>{truncateText(post.title, 80)}</p>
                </div>
                <div className="date-box flex justify-between mt-2">
                  <div>
                    <p className="date">
                      {new Date(post.publicationDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex">
                    {/* <a href={post.link}> */}
                    <h5 className="text-[10px] lg:text-[11px] view-details-link">
                      VIEW DETAILS
                    </h5>
                    <div className="bullet"></div>
                    {/* </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      {/* Pagination */}
      <div className="pagination-box flex justify-center mb-2 w-[90%] m-auto">
        {postData &&
          postData.length > 0 &&
          Array.from({ length: Math.ceil(postData.length / itemsPerPage) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1);
                  scrollToElement();
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
