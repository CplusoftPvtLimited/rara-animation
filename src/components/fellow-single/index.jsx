import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Profile from "../../assets/images/profile.jpg";
import "./index.css";
import { BiLogoTwitter } from "react-icons/bi";
import Circle from "../../assets/images/fellow-circle.png";
import partialBall from "../../assets/images/partial-ball.png";
import BlogImage from "../../assets/images/blog-img.jpeg";
import BackIcon from "../../assets/images/b-back_icon.svg";
import image1 from "../../assets/images/slider/slider1.jpg";
import image2 from "../../assets/images/slider/slider2.jpg";
import image3 from "../../assets/images/slider/slider3.jpg";
import image4 from "../../assets/images/slider/slider4.jpg";
import Logo from '../../assets/images/b-logo-rara.svg'


function FellowSingle() {
   const { fellowId } = useParams();
   console.log ('********Id from params', fellowId)
  const [fellow, setFellow] = useState({});
  const [blogData, setBlogData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const fetchFellow = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/profile/${fellowId}`
      );
      const data = await response.json();
      setFellow(data.profile);
    };
    fetchFellow();

    const fetchBlogs = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/blog/getAllBlogPosts`
      );
      const data = await response.json();
      setBlogData(data.blogPosts);
      console.log ("***********Blog", blogData)
    };
    fetchBlogs();
  }, []);

    // Sort blogData based on publicationDate in descending order
    const sortedBlogs = blogData.sort((a, b) =>
    new Date(b.publicationDate) - new Date(a.publicationDate)
  );

  // Show only the latest three blogs
  const latestThreeBlogs = sortedBlogs.slice(0, 3);

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
              <div className="flex gap-3">
                <h6 className="my-auto">Visit site</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/************************** 4th section ******************************/}

      <div className="mt-[300px] w-[70%] m-auto px-[20px]">
        <div>
          <h2 className="text-[25px]">{fellow.heading}</h2>
          <p className="text-[17px] mt-6">{fellow.paragraph}</p>
        </div>
      </div>

      {/************************** Background Image Section ******************************/}

      <div className="flex justify-end mt-[100px] h-[800px]">
        <div className="bg-fellow w-[90%] flex justify-between pl-[35px]">
          <div>
            <img className="mt-[40px] " src={Circle} alt="" />
          </div>
          <div>
            <img className="mt-[500px]" src={partialBall} alt="" />
          </div>
        </div>
      </div>

      {/************************** Blog Section ******************************/}

      <div className="reports mt-[400px] flex w-[95%] m-auto px-[50px] pt-[50px] gap ">
        <div className="w-[40%]">
          <h4>最新の研究活動レポート</h4>
        </div>
        <div className="w-[60%]  mb-[100px] mt-[80px]">
          {latestThreeBlogs.map((blog) => (
            <div key={blog.id} className="flex mt-[40px]">
              <div className="blog">
                <img className="bog-img" src={BlogImage} alt="" />
              </div>
              <div className="blog-inner mt-[7px]">
                <p>研究活動レポート / 小西 聡 / 高橋 政代</p>
                <h3 className="mt-[55px]">{blog.title}</h3>
                <div className="date-box flex mt-[55px] justify-between">
                  <div>
                    <p>{new Date(blog.publicationDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h3>VIEW DETAILS</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="all-report flex justify-end mt-[150px]">
            <a href="">VIEW ALL REPORT</a>
          </div>
        </div>
      </div>

      {/************************** Slider Section ******************************/}

      <div className="w-[95%] m-auto px-[50px]">
      <div className="title mt-[75px]">
        <h4>紹介写真</h4>
      </div>
      <div className="slider-parent pt-[75px] pb-[125px]">
      <div className="slider w-[60%]">
        <div
          className="slider-container"
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
        >
          {/* Repeat the images three times for infinite scrolling */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={index === currentSlide || index === currentSlide - 1 ? "" : "partial"}
            />
          ))}
          {/* Repeating the images to achieve the infinite slider effect */}
          {images.map((image, index) => (
            <img
              key={`duplicate-${index}`}
              src={image}
              alt={`Slide ${index}`}
              className={index === currentSlide || index === currentSlide - 1 ? "" : "partial"}
            />
          ))}
        </div>
        <div className="flex gap-8 mt-[10px]">
        <div className="slider-prev" onClick={handlePrevSlide}>
         <p>Next</p> 
        </div>
        <div className="slider-next" onClick={handleNextSlide}>
          <p>Previous</p> 
        </div>
        </div>
      </div>
      </div>
    </div>


      {/************************** Index Section ******************************/}
      <div>
        <div className="index flex w-[95%] m-auto">
          <a>BACK TO INDEX</a>
        </div>
      </div>

          {/************************** Before Footer Logo******************************/}

      <div className="before-footer py-[16rem]  mt-[10px] w-[95%] mx-auto">        
        <img className="m-auto" src={Logo} alt="" width={133} height={139} />
      </div>


    </section>
  );
}

export default FellowSingle;
