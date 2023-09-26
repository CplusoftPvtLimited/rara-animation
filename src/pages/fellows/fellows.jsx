import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pic from "../../assets/images/pic.jpg";
import Footer from "../../assets/images/fellow-beforefooter.png";
import websiteIcon from "../../assets/images/website-icon.svg";
import Logo from "../../assets/images/b-logo-rara.svg";
// import graphics1 from "../../assets/images/graphic03-2.png";
// import graphics2 from "../../assets/images/graphic04-2.png";
// import graphics3 from "../../assets/images/graphics05-2.svg";

function Fellows() {
  const [fellowsData, setFellowsData] = useState([]);
  const [fellows, setFellows] = useState([]);
  const [associateFellow, setAssociateFellows] = useState([]);
  const [fellowsCount, setFellowsCount] = useState(0);
  const [associateFellowsCount, setAssociateFellowsCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFellowData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER}/profile/getAllProfiles`
        );
        const data = await response.json();
        setFellowsData(data.profiles);

        let fellows = [];
        let associateFellows = [];
        let fellowsCount = 0;
        let associateFellowsCount = 0;

        data.profiles.forEach((fellow) => {
          if (fellow.jobPost === "RARA Fellow") {
            fellows.push(fellow);
            fellowsCount++;
          }
          if (fellow.jobPost === "RARA Associate Fellow") {
            associateFellows.push(fellow);
            associateFellowsCount++;
          }
        });

        setFellows(fellows);
        setFellowsCount(fellowsCount);
        setAssociateFellows(associateFellows);
        setAssociateFellowsCount(associateFellowsCount);
      } catch (err) {
        console.error("Error fetching fellows data:", err);
      }
    };
    fetchFellowData();
  }, []);

  const handleViewDetails = (fellowId) => {
    navigate(`/fellow/${fellowId}`);
  };

  return (
    <section className="mt-[45px]">
      {/************************** RARA Fellow Section ******************************/}
      <div className="top-bar lg:flex lg:justify-between" id="fellow">
        <div className="flex">
          <div class="bullet-point"></div>
          <h2 className="rara-text">FELLOWS</h2>
        </div>
        <h3 className="my-auto">{fellowsCount} Pecunia Fellows</h3>
      </div>

      {/************************** RARA Fellow Profile Section ******************************/}

      <div className="rows-wrapper px-[20px] lg:px-[0px]">
        {fellows.length === 0 ? (
          <div className="mx-auto my-[50px]">
            <p>Loading...</p>
          </div>
        ) : (
          fellows.map(
            (fellow, index) =>
              index % 3 === 0 && (
                <div key={`row-${index}`} className="row">
                  <div className="fellows-container flex gap-4 w-[95%] mx-auto">
                    {/* Generate three boxes for each row */}
                    {fellows.slice(index, index + 3).map((fellow) => (
                      <div
                        key={fellow.id}
                        className="fellow-box"
                        onClick={() => handleViewDetails(fellow.id)}
                      >
                        <div className="job-post">
                          <h5>{fellow.jobPost}</h5>
                        </div>
                        <div className="graphics-2div flex ml-[110px] mb-[-70px] z-50  ">
                          <img
                            className="graphics-2 z-50"
                            src={fellow.graphic2}
                            alt=""
                          />
                        </div>
                        <div className="relative">
                          <div className="graphics-3div graphics-3box flex z-50  ">
                            <img
                              className="graphics-3 z-50"
                              src={fellow.graphic3}
                              alt=""
                            />
                          </div>
                          <div className="thumbnail-container">
                            <div className="thumbnail-wrapper w-[18rem] h-[31.25rem] m-auto rounded-[25px]">
                              <img
                                className="thumbnail-image"
                                src={fellow.thumbnailPath}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="graphics-1div flex justify-end mt-[-90px] mr-[70px] ">
                            <img
                              className="graphics-1"
                              src={fellow.graphic1}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mt-[25px] pl-[40px]">
                          <h4>{fellow.nameEnglish}</h4>
                          <p>{fellow.name}</p>
                          <h6 className="tag">{fellow.tagLine}</h6>
                        </div>
                        <div className="flex justify-end">
                          <div
                            className="flex justify-end"
                            onClick={() => handleViewDetails(fellow.id)}
                          >
                            <a
                              href="#"
                              className="det-btn text-[10px] lg:text-[12px]"
                            >
                              VIEW DETAILS
                            </a>
                            <div className="bullet"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )
        )}
      </div>

      {/************************** RARA Associate Fellow Section ******************************/}
      <div className="mid-bar lg:flex lg:justify-between" id="associate-fellow">
        <div className="flex">
          <div class="bullet-point"></div>
          <h2 className="rara-text">ASSOCIATE FELLOWS</h2>
        </div>
        <h3 className="my-auto">
          {associateFellowsCount} Pecunia Associate Fellows
        </h3>
      </div>

      {/************************** RARA Assosiate Profile Section ******************************/}

      <div className="rows-wrapper px-[20px] lg:px-[0px]">
        {associateFellow.length === 0 ? (
          <div className="mx-auto my-[50px]">
            <p>Loading...</p>
          </div>
        ) : (
          associateFellow.map(
            (fellow, index) =>
              index % 3 === 0 && (
                <div key={`row-${index}`} className="row">
                  <div className="fellows-container flex gap-4 w-[95%] mx-auto">
                    {/* Generate three boxes for each row */}
                    {associateFellow.slice(index, index + 3).map((fellow) => (
                      <div
                        key={fellow.id}
                        className="fellow-box"
                        onClick={() => handleViewDetails(fellow.id)}
                      >
                        <div className="job-post">
                          <h5>{fellow.jobPost}</h5>
                        </div>
                        <div className="graphics-2div flex ml-[110px] mb-[-70px] z-50  ">
                          <img
                            className="graphics-2 z-50"
                            src={fellow.graphic2}
                            alt=""
                          />
                        </div>
                        <div className="relative">
                          <div className="graphics-3div graphics-3box flex z-50  ">
                            {console.log("*********Graphices", fellow.graphic3)}
                            <img
                              className="graphics-3 z-50"
                              src={fellow.graphic3}
                              alt=""
                            />
                          </div>
                          <div className="thumbnail-container">
                            <div className="thumbnail-wrapper w-[18rem] h-[31.25rem] m-auto rounded-[25px]">
                              <img
                                className="thumbnail-image"
                                src={fellow.thumbnailPath}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="graphics-1div flex justify-end mt-[-90px] mr-[70px] ">
                            <img
                              className="graphics-1"
                              src={fellow.graphic1}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mt-[25px] pl-[40px]">
                          <h4>{fellow.nameEnglish}</h4>
                          <p>{fellow.name}</p>
                          <h6 className="tag">{fellow.tagLine}</h6>
                        </div>
                        <div className="flex justify-end">
                          <div
                            className="flex justify-end"
                            onClick={() => handleViewDetails(fellow.id)}
                          >
                            <a
                              href="#"
                              className="det-btn text-[10px] lg:text-[12px]"
                            >
                              VIEW DETAILS
                            </a>
                            <div className="bullet"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )
        )}
      </div>
      {/* 
      {console.log(
        "🚀 ~ file: fellows.jsx:15 ~ Fellows ~ fellowsData:",
        fellowsData
      )}
      {console.log("🚀 ~ file: fellows.jsx:16 ~ Fellows ~ fellows:", fellows)}
      {console.log(
        "🚀 ~ file: fellows.jsx:17 ~ Fellows ~ associateFellows:",
        associateFellow
      )} */}

      {/************************** RARA Student Fellows Section ******************************/}
      <div
        className="bottom-bar lg:flex lg:justify-between"
        id="student-fellow"
      >
        <div className="flex">
          <div class="bullet-point"></div>
          <h2 className="rara-text">STUDENT FELLOWS</h2>
        </div>
        <h3 className="my-auto">Pecunia Student Fellows</h3>
      </div>

      {/************************** RARA Student Fellows Content ******************************/}

      <div className="w-[100%]  my-[150px]">
        <div className=" px-[30px] lg:flex lg:justify-center ">
          <div className="my-auto w-[50%]">
            <p className=" text-[14px] lg:text-[16px]">
              Our Fellowship Program isn't just an opportunity; it's an
              invitation to be part of a global hub of visionaries. Here, you'll
              find a nurturing ecosystem that encourages creative thinking,
              fosters groundbreaking research, and amplifies the voices of those
              committed to making a real difference. Your journey into the world
              of impactful finance and research begins with a single step:
              applying for the Pecunia Fellowship Program. Your ideas, your
              dedication, and your unique perspective could be the missing piece
              of the puzzle needed to drive our shared mission forward. Apply
              Today
            </p>
            <div className="website-btn mt-8">
              <a href="/student">
                {" "}
                VIEW WEBSITE{" "}
                <img
                  className="inline"
                  src={websiteIcon}
                  alt=""
                  width={20}
                />{" "}
              </a>
            </div>
          </div>
          <div>
            <img src={Footer} alt="" />
          </div>
        </div>
      </div>

      {/************************** Before Footer Logo******************************/}

      <div className="before-footer py-[16rem]">
        <img className="m-auto" src={Logo} alt="" width={133} height={139} />
      </div>
    </section>
  );
}

export default Fellows;
