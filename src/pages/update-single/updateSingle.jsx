import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./updateSingle.css";
import Logo from "../../assets/images/pecunia_logo_bg.png";

function UpdateSingle() {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState({});
  const [postData, setPostData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/blog/${blogId}`
      );
      const data = await response.json();
      setBlogData(data.blogPost);
      console.log(
        "🚀 ~ file: index.jsx:16 ~ fetchBlog ~ data.blogPost:",
        data.blogPost
      );
    };
    fetchBlog();
  }, []);
  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/blog/getAllBlogPosts`
      );
      const data = await response.json();
      setPostData(data.blogPosts);
    };
    fetchNews();
  }, []);

  const handleClick = (blogId) => {
    navigate(`/research/${blogId}`);
    window.location.reload();
    window.scrollTo(0, 0);
  };

  // Cut short the blog title
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }
  console.log(
    "🚀 ~ file: updateSingle.jsx:52 ~ UpdateSingle ~ blogData:",
    blogData
  );
  return (
    <section className="mt-[250px]">
      {/** Top Most Section */}
      <div className="top-section block mx-[3rem] md:flex justify-between md:mx-[3rem] md:gap-4 lg:gap-8 xl:gap-16 lg:mx-[5rem] xl:mx-[10.9375rem]">
        <div className="text w-[100%] xl:w-[80%]">
          <p>
            {blogData?.category?.title} {blogData?.fellow ? "/" : ""} $
            {blogData.fellow?.name} {blogData?.associatedFellow ? "/" : ""}
            {blogData?.associatedFellow?.name}
          </p>
          <h3 className="md:mt-[70px]">{blogData.title}</h3>
          <h4>{new Date(blogData.createdAt).toLocaleDateString()}</h4>
        </div>
        <div className="sm:mb-8 blog-img-box xl:w-[100%]">
          <img src={blogData.imagePath} alt="" />
        </div>
      </div>

      {/** Content  */}
      <div className="content-container  lg:mx-[5rem]  md:mx-[3rem] xl:mx-[10.9375rem] ">
        <div className="content-text sm:mx-[3rem] py-[5rem] lg:py-[10rem] lg:px-[4rem] xl:px-[7.6875rem]">
          <h3>{blogData.content}</h3>
        </div>
        <div className="flex justify-end px-[7.6875rem] pb-[200px]">
          <div className="share-text flex md:w-[20%]">
            <h4>SHARE ON</h4>
          </div>
          <div className="social-text flex pl-[70px] gap-4">
            <a href="#">
              <h3 className="cursor-pointer">Facebook</h3>
            </a>
            <a href="#">
              <h3 className="cursor-pointer">Twitter</h3>
            </a>
          </div>
        </div>
      </div>

      {/** Related blogs  */}
      <div className="related-wrapper w-[90%] mx-auto">
        <div className="related-text mt-[25px]">
          <p>RELATED NEWS</p>
        </div>
      </div>

      {/** Cards */}

      {/***********************Cards ***************************/}
      <div className="card-wrapper pb-[75px] w-[95%] mx-auto md:flex md:justify-center">
        {postData.length > 0 ? (
          <div className="Cards mt-[50px] mb-[100px] w-[80%] m-auto" id="card">
            <div className="flex flex-wrap justify-between">
              {console.log("Data", postData)}
              {postData.slice(0, 3).map((post, index) => (
                <div
                  className="news-card mt-[70px] cursor-pointer"
                  key={index}
                  onClick={() => handleClick(post.id)}
                >
                  <div className="img-box">
                    <img className="img" src={post.imagePath} alt="" />
                    {console.log(
                      "🚀 ~ file: index.jsx:109 ~ UpdateSingle ~post.imagePath:",
                      post.imagePath
                    )}
                  </div>
                  <div className="news-cat my-auto">
                    <h5>
                      ${post?.category?.title} / ${post?.fellow?.name}
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
              ))}
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>

      {/************************** Index Section ******************************/}
      <div>
        <div className="index flex w-[95%] m-auto">
          <a
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            BACK TO INDEX
          </a>
        </div>
      </div>

      {/************************** Before Footer Logo******************************/}

      <div className="before-footer footer-update py-[16rem]  mt-[10px] w-[95%] mx-auto">
        <img className="m-auto" src={Logo} alt="" width={133} height={139} />
      </div>
    </section>
  );
}

export default UpdateSingle;
