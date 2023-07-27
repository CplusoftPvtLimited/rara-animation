import React from "react";
import { useEffect, useState } from "react";
import Profile from "../../assets/images/profile.jpg";
import "./index.css";
import { BiLogoTwitter } from "react-icons/bi";
import Circle from "../../assets/images/fellow-circle.png"

function FellowSingle() {
  const [fellow, setFellow] = useState({});

  useEffect(() => {
    const fetchFellow = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/profile/12`
      );
      const data = await response.json();
      setFellow(data.profile);
    };
    fetchFellow();
  }, []);

  return (
    <section>
      <div className="flex justify-between">
        <div className="max-w-[50%] m-auto pl-[175px]">
          {" "}
          {/** Left */}
          <div>
            {fellow.name && <p className="profile-name">{fellow.name}</p>}
          </div>
          <div className="flex gap-8 mt-4">
            {fellow.nameEnglish && (
              <p className="profile-nameJapnese">{fellow.nameEnglish}</p>
            )}
            {fellow.jobPost && (
              <p className="text-[12px] my-auto"> {fellow.jobPost}</p>
            )}
          </div>
          <div className="mt-[70px]">
            <BiLogoTwitter style={{ fontSize: "24px", color: "#acacac" }} />
          </div>
        </div>
        <div className="w-[50%]">
          {" "}
          {/** Right */}
          <img className="profile-pic" src={Profile} alt="" />
        </div>
      </div>

      {/************************** 2nd section ******************************/}

      <div className="flex justify-between w-[95%] m-auto">
        <div className="pl-[150px] mt-8">
          {fellow.tagLine && <p>{fellow.tagLine}</p>}
        </div>
        <div className="circle-container mt-[-75px]">
          <div className="scroll-circle">
            <p>SCROLL</p>
          </div>
        </div>
      </div>

      {/************************** 3rd section ******************************/}

      <div className="flex w-[95%] m-auto mt-[75px]">
        <div className="pl-[150px] mt-8 w-[50%]">
          <img src={Circle} alt="" />
        </div>
        <div className="fellow-profile w-[50%] pt-6">
            <div className="profile-desc">
            <h5>FELLOW PROFILE</h5>
            <p className="">{fellow.profileDesc}</p>
            </div>

            <div className="fellow-website pt-6">
            <h5>SEE ALSO</h5>
            <div className="flex justify-between py-10">
            <h3 className="">Vision Care Co., Ltd.</h3>
            <h6 className="">Visit site</h6>
            </div>
            </div>
        </div>
      </div>

      {/************************** 3rd section ******************************/}

      <div className="mt-24">

      </div>
    </section>
  );
}

export default FellowSingle;
