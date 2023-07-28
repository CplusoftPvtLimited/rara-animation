import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pic from "../../assets/images/pic.jpg";
import Footer from "../../assets/images/fellow-beforefooter.png";
import websiteIcon from "../../assets/images/website-icon.svg";
import Logo from "../../assets/images/b-logo-rara.svg";

function Fellows() {
  const [fellowsData, setFellowsData] = useState([]);
  const [fellows, setFellows] = useState([]);
  const [associateFellows, setAssociateFellows] = useState([]);
  const [fellowsCount, setFellowsCount] = useState(0);
  const [AssociateFellowsCount, setAssociateFellowsCount] = useState(0);
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

        data.profiles.forEach((fellow) => {
          if (fellow.jobPost === "RARA Fellow") {
            fellows.push(fellow);
            fellowsCount++;
          } else if (fellow.jobPost === "Associate RARA fellow") {
            associateFellows.push(fellow);
            AssociateFellowsCount++;
          }
        });

        setFellows(fellows);
        setFellowsCount(fellowsCount);
        setAssociateFellows(associateFellows);
        setAssociateFellowsCount(AssociateFellowsCount);
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
      <div className="top-bar flex justify-between">
        <div className="flex">
          <div class="bullet-point"></div>
          <h2 className="rara-text">RARAフェロー</h2>
        </div>
        <h3 className="my-auto">{fellowsCount} RARA FELLOWS</h3>
      </div>

      {/************************** RARA Fellow Profile Section ******************************/}
      <div className="rows-wrapper">
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
                    {fellowsData.slice(index, index + 3).map((fellow) => (
                      <div key={fellow.id} className="fellow-box">
                        <div className="job-post">
                          <h5>{fellow.jobPost}</h5>
                        </div>
                        <div>
                          <img className="thumbnail" src={Pic} alt="" />
                        </div>
                        <div className="mt-[25px] pl-[40px]">
                          <h4>{fellow.name}</h4>
                          <p>{fellow.nameEnglish}</p>
                          <h6 className="tag">{fellow.tagLine}</h6>
                        </div>
                        <div className="flex justify-end">
                          <div
                            className="flex justify-end"
                            onClick={() => handleViewDetails(fellow.id)}
                          >
                            <a href="#">VIEW DETAILS</a>
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
      <div className="associate-bar flex justify-between">
        <div className="flex">
          <div class="bullet-point"></div>
          <h2 className="rara-text">RARAアソシエイトフェロー</h2>
        </div>
        <h3 className="my-auto">{AssociateFellowsCount} RARA FELLOWS</h3>
      </div>

      {/************************** RARA Assosiate Profile Section ******************************/}

      <div className="rows-wrapper">
        {fellows.length === 0 ? (
          <div className="mx-auto my-[50px]">
            <p className="text-center">No Associate Fellow Found</p>
          </div>
        ) : (
          fellowsData.map(
            (fellow, index) =>
              index % 3 === 0 && (
                <div key={`row-${index}`} className="row">
                  <div className="fellows-container flex gap-4 w-[95%] mx-auto">
                    {/* Generate three boxes for each row */}
                    {fellowsData.slice(index, index + 3).map((fellow) => (
                      <div
                        key={fellow.id}
                        className="fellow-box"
                        onClick={() => handleViewDetails(fellow.id)}
                      >
                        <div className="job-post">
                          <h5>{fellow.jobPost}</h5>
                        </div>
                        <div>
                          <img className="thumbnail" src={Pic} alt="" />
                        </div>
                        <div className="mt-[25px] pl-[40px]">
                          <h4>{fellow.name}</h4>
                          <p>{fellow.nameEnglish}</p>
                          <h6 className="tag">{fellow.tagLine}</h6>
                        </div>
                        <div className="flex justify-end">
                          <div
                            className="flex justify-end"
                            onClick={() => handleViewDetails(fellow.id)}
                          >
                            <a href="#">VIEW DETAILS</a>
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

      {/************************** RARA Student Fellows Section ******************************/}
      <div className="associate-bar flex justify-between">
        <div className="flex">
          <div class="bullet-point"></div>
          <h2 className="rara-text">RARA学生フェロー</h2>
        </div>
        <h3 className="my-auto">RARA STUDENT FELLOWS</h3>
      </div>

      {/************************** RARA Student Fellows Content ******************************/}

      <div className="w-[100%]  my-[150px]">
        <div className="flex justify-center ">
          <div className="my-auto">
            <p className="text-[19px]">
              RARA学生フェローとして選抜された博士後期課程学生には、
              <br />
              RARAを基盤に個々の研究力を向上させ、
              <br />
              分野の異なる国内外の研究者と交わる中で、
              <br />
              国際性と学際性、さらに複眼的視野を兼ね備えた
              <br />
              博士人材へと成長していくことを期待します。
            </p>
            <div className="website-btn mt-8">
              <a href="#id">
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

      <div className="before-footer py-[16rem] border border-[#aaa]">
        <img className="m-auto" src={Logo} alt="" width={133} height={139} />
      </div>
    </section>
  );
}

export default Fellows;
