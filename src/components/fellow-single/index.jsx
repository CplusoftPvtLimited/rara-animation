import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Profile from "../../assets/images/profile.jpg";
import "./index.css";
import { BiLogoTwitter } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
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
  const [fellow, setFellow] = useState({});
  const [blogData, setBlogData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
  

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
    };
    fetchBlogs();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    // Sort blogData based on publicationDate in descending order
    const sortedBlogs = blogData.sort((a, b) =>
    new Date(b.publicationDate) - new Date(a.publicationDate)
  );

  // Show only the latest three blogs
  const latestThreeBlogs = sortedBlogs.slice(0, 3);

  return (
    <section>
      <div className="pl-[30px] mt-[100px] lg:flex lg:justify-between w-[100%] lg:mt-[0px]">
        <div className="lg:max-w-[50%] lg:m-auto lg:pl-[175px] w-[75%] lg;w-[100%]">
          {/** Left */}
          <div>
            {fellow.name && <p className="profile-name">{fellow.nameEnglish}</p>}
          </div>
          <div className="flex gap-8 mt-4">
            {fellow.nameEnglish && (
              <p className="profile-nameJapnese">{fellow.name}</p>
            )}
            {fellow.jobPost && (
              <p className="text-[10px] lg:text-[12px] my-auto"> {fellow.jobPost}</p>
            )}
          </div>
          <div className="flex gap-2">
          { fellow.twitterUrl ?<a href={fellow.twitterUrl}>
          <div className="mt-[40px] lg:mt-[70px]">
            <BiLogoTwitter style={{ fontSize: "24px", color: "#acacac" }} />
          </div></a> : null
          }
           { fellow.facebookUrl ?<a href={fellow.twitterUrl}>
          <div className="mt-[40px] lg:mt-[70px]">
            <RiFacebookFill style={{ fontSize: "24px", color: "#acacac" }} />
          </div></a> : null
          }
          </div>
          <div className="my-16 lg:mt-32">
          {fellow.tagLine && <p>{fellow.tagLine}</p>}
        </div>
        </div>
        <div className="w-[100%]  lg:w-[50%]">
          {/** Right */}
          <img className="profile-pic" src={fellow.imagePath} alt="" />
        </div>
      </div>

      {/************************** 2nd section ******************************/}

      {isMobile ? null :
      <div className="flex justify-between w-[95%] m-auto">
        <div></div>
        <a href="#profile">
        <div className="circle-container mt-[-105px]">
          <div className="scroll-circle">
            <p>SCROLL</p>
          </div>
        </div>
        </a>
      </div>
     }

      {/************************** 3rd section ******************************/}

      <div className="lg:flex w-[95%] m-auto mt-[40px] lg:mt-[75px]">
        <div className="py-2 w-[95%] lg:pl-[150px] lg:w-[50%]">
          <img className="red-circle" src={Circle} alt="" />
        </div>
        <div className="fellow-profile w-[95%] lg:w-[50%] pt-6">
          <div className="profile-desc">
            <h5 id="profile">FELLOW PROFILE</h5>
            <p className="">{fellow.profileDesc}</p>
          </div>
          { fellow.websiteUrl ?
          <div className="fellow-website pt-6">
            <h5>SEE ALSO</h5>
            <div className="lg:flex lg:justify-between py-10">
            <a href={fellow.websiteUrl}>
              <h3 className="">Vision Care Co., Ltd.</h3>
              </a>
              <div className="">
                <a href={fellow.websiteUrl}>
                <h6 className="my-auto">Visit site</h6>
                </a>
              </div>
            </div>
          </div> : null
      }
        </div>
      </div>
    

      {/************************** 4th section ******************************/}

      <div className="w-[80%] mt-[150px] lg:mt-[300px] lg:w-[70%] m-auto lg:px-[20px]">
        <div>
          <h2 className="text-[25px]">{fellow.heading}</h2>
          <p className="text-[17px] mt-6">{fellow.paragraph}</p>
        </div>
      </div>

      {/************************** Background Image Section ******************************/}

      <div className="flex justify-end mt-[100px] lg:h-[800px]">
        <div className="bg-fellow w-[90%] flex justify-between pl-[35px]">
          <div>
            <img className="w-[50%] lg:w-auto lg:mt-[40px] " src={Circle} alt="" />
          </div>
          <div>
            <img className="w-[40%] mt-[100px] lg:w-auto  lg:mt-[500px]" src={partialBall} alt="" />
          </div>
        </div>
      </div>

      {/************************** Blog Section ******************************/}

      <div className="reports mt-[150px] px-[30px] lg:mt-[400px] lg:flex w-[95%] m-auto lg:px-[50px] pt-[50px] gap ">
        <div className=" w-[100%] lg:w-[40%]">
          <h4>最新の研究活動レポート</h4>
        </div>
        <div className=" w-[100%] mt-[80px] lg:w-[60%]  lg:mb-[100px]">
          {latestThreeBlogs.map((blog) => (
            <div key={blog.id} className=" lg:flex mt-[40px]">
              <div className="blog">
                <img className="bog-img" src={blog.imagePath} alt="" />
              </div>
              <div className="blog-inner mt-[7px]">
                {/* <p> 研究活動レポート / {fellow.category} / {fellow.profile</p> */}
                <p>研究活動レポート / 小西 聡 / 高橋 政代</p>
                <h3 className="mt-[30px] lg:mt-[55px]">{blog.title}</h3>
                <div className="date-box flex mt-[55px] justify-between">
                  <div>
                    <p>{new Date(blog.publicationDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] lg:text-[14px]">VIEW DETAILS</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="all-report flex justify-center pt-[75px] pb-[175px] lg:justify-end lg:mt-[150px]">
            <a href="">VIEW ALL REPORT</a>
          </div>
        </div>
      </div>

      {/************************** Slider Section ******************************/}

      <div className="w-[90%] m-auto lg:px-[50px]">
      <div className="title mt-[75px]">
        <h4>紹介写真</h4>
      </div>
      <div className="slider-parent pt-[75px] pb-[125px]">
      <div className="slider w-[100%] lg:w-[60%]">
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
