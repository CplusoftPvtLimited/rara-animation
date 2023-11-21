import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

const index = ({ homeData }) => {
  const [fellowData, setFellowData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  // const [homeData, setHomeData] = useState([]);
  const [selectedBlog, setSelectedBlogs] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER}/profile/getAllProfiles`,
    })
      .then((response) => {
        setFellowData(response.data.profiles);
      })
      .catch((error) => {
        console.log("No profile found", error.message);
      });
  }, []);

  useEffect(() => {
    // setHomeData(data);
    // Define an async function to fetch home data
    const getHome = async () => {
      try {
        const data = homeData;
        const homeBlog = JSON.parse(data.blogs)
          .split(",")
          .map((id) => parseInt(id, 10));
        console.log(
          "*******000000000🚀 ~ file: index.jsx:30 ~ getHome ~ homeBlog:",
          homeBlog
        );
        return homeBlog;
      } catch (error) {
        console.log("Error fetching home data:", error.message);
        return [];
      }
    };

    // Define a function to fetch blog data and filter it
    const fetchAndFilterBlogData = async () => {
      try {
        const [homeBlogIds, blogResponse] = await Promise.all([
          getHome(),
          axios({
            method: "get",
            url: `${process.env.REACT_APP_SERVER}/blog/getAllBlogPosts`,
          }),
        ]);
        console.log(
          "*********00000🚀 ~ file: index.jsx:50 ~ fetchAndFilterBlogData ~ homeBlogIds:",
          homeBlogIds
        );

        const blogData = blogResponse.data.blogPosts;

        // Filter the blog data based on homeBlogIds
        const selectedBlogs = blogData.filter((blog) =>
          homeBlogIds.includes(blog.id)
        );
        setBlogData(selectedBlogs);
      } catch (error) {
        console.log("Error fetching or filtering blog data:", error.message);
      }
    };
    fetchAndFilterBlogData();
  }, []);

  return (
    <div
      className="cContainer -leftWide -rightWide -spLeftSmall -spRightSmall lUpdates"
      id="updates"
    >
      <h2 className="lUpdates-title-inner" data-svg-title="">
        <div className="lUpdates-title-main">
          <svg
            width="822.45"
            height="109.514"
            viewBox="0 0 822.45 109.514"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%" }}
          >
            <g
              id="svgGroup"
              stroke-linecap="round"
              fill-rule="evenodd"
              font-size="9pt"
              stroke="#000"
              stroke-width="0.15"
              fill="#e6e6e6"
              style={{
                stroke: "#000",
                strokeWidth: "0.15",
                fill: "#e6e6e6",
              }}
            >
              <path
                d="M 730.35 58.35 L 790.65 58.35 L 790.65 83.1 A 160.09 160.09 0 0 1 790.555 89.897 C 790.084 100.534 787.28 103.045 770.7 105.45 L 770.7 107.7 L 822.45 107.7 L 822.45 105.45 A 68.503 68.503 0 0 1 816.035 104.328 C 804.626 101.671 804.249 96.64 803.872 83.857 A 2080.003 2080.003 0 0 1 803.85 83.1 L 803.85 30.3 A 2080.003 2080.003 0 0 1 803.872 29.543 C 804.31 14.702 804.748 10.31 822.45 7.95 L 822.45 5.7 L 770.7 5.7 L 770.7 7.95 C 788.426 10.521 790.406 13.214 790.623 25.829 A 265.103 265.103 0 0 1 790.65 30.3 L 790.65 52.05 L 730.35 52.05 L 730.35 30.3 A 160.09 160.09 0 0 1 730.445 23.503 C 730.916 12.866 733.72 10.355 750.3 7.95 L 750.3 5.7 L 698.55 5.7 L 698.55 7.95 A 68.503 68.503 0 0 1 704.965 9.072 C 716.374 11.729 716.751 16.76 717.128 29.543 A 2080.003 2080.003 0 0 1 717.15 30.3 L 717.15 83.1 A 2080.003 2080.003 0 0 1 717.128 83.857 C 716.69 98.698 716.252 103.09 698.55 105.45 L 698.55 107.7 L 750.3 107.7 L 750.3 105.45 C 732.574 102.879 730.594 100.186 730.377 87.571 A 265.103 265.103 0 0 1 730.35 83.1 L 730.35 58.35 Z M 105.15 107.7 L 188.55 107.7 C 191.55 98.7 193.5 89.4 193.65 78 L 191.4 78 A 49.688 49.688 0 0 1 188.248 88.441 C 183.299 99.617 174.363 104.1 159.45 104.1 C 136.644 104.1 136.786 93.528 136.928 84.935 A 121.364 121.364 0 0 0 136.95 82.95 L 136.95 58.35 L 152.55 58.35 A 78.982 78.982 0 0 1 161.038 58.647 C 166.358 59.242 170.419 61.024 172.613 66.361 A 22.792 22.792 0 0 1 174 71.7 L 176.25 71.7 L 176.25 38.25 L 174 38.25 C 172.35 51.15 163.8 52.05 152.55 52.05 L 136.95 52.05 L 136.95 9.3 L 151.5 9.3 C 166.31 9.3 179.974 9.443 181.56 27.527 A 38.347 38.347 0 0 1 181.65 28.8 L 183.9 28.8 L 185.7 5.7 L 105.15 5.7 L 105.15 7.95 A 68.503 68.503 0 0 1 111.565 9.072 C 122.974 11.729 123.351 16.76 123.728 29.543 A 2080.003 2080.003 0 0 1 123.75 30.3 L 123.75 83.1 A 2080.003 2080.003 0 0 1 123.728 83.857 C 123.29 98.698 122.852 103.09 105.15 105.45 L 105.15 107.7 Z M 282.15 107.7 L 365.55 107.7 C 368.55 98.7 370.5 89.4 370.65 78 L 368.4 78 A 49.688 49.688 0 0 1 365.248 88.441 C 360.299 99.617 351.363 104.1 336.45 104.1 C 313.644 104.1 313.786 93.528 313.928 84.935 A 121.364 121.364 0 0 0 313.95 82.95 L 313.95 58.35 L 329.55 58.35 A 78.982 78.982 0 0 1 338.038 58.647 C 343.358 59.242 347.419 61.024 349.613 66.361 A 22.792 22.792 0 0 1 351 71.7 L 353.25 71.7 L 353.25 38.25 L 351 38.25 C 349.35 51.15 340.8 52.05 329.55 52.05 L 313.95 52.05 L 313.95 9.3 L 328.5 9.3 C 343.31 9.3 356.974 9.443 358.56 27.527 A 38.347 38.347 0 0 1 358.65 28.8 L 360.9 28.8 L 362.7 5.7 L 282.15 5.7 L 282.15 7.95 A 68.503 68.503 0 0 1 288.565 9.072 C 299.974 11.729 300.351 16.76 300.728 29.543 A 2080.003 2080.003 0 0 1 300.75 30.3 L 300.75 83.1 A 2080.003 2080.003 0 0 1 300.728 83.857 C 300.29 98.698 299.852 103.09 282.15 105.45 L 282.15 107.7 Z M 689.7 76.2 L 687.6 75.3 C 680.85 91.5 673.05 105.9 653.4 105.9 A 35.085 35.085 0 0 1 650.904 105.811 C 629.952 104.316 609 84.221 609 55.8 C 609 31.803 622.366 10.661 646.323 7.823 A 47.395 47.395 0 0 1 651.9 7.5 C 666.921 7.5 676.301 15.961 680.651 28.612 A 50.162 50.162 0 0 1 682.65 36.6 L 684.9 36.6 L 684.9 12 C 675 6.15 663.45 3.9 652.05 3.9 A 72.298 72.298 0 0 0 627.739 7.848 C 604.305 16.176 591.955 36.448 591.608 56.72 A 51.334 51.334 0 0 0 591.6 57.6 A 50.399 50.399 0 0 0 597.677 82.383 C 607.567 100.201 628.317 109.5 650.85 109.5 C 661.5 109.5 671.85 107.7 681.45 103.05 C 685.05 94.35 687.9 85.35 689.7 76.2 Z M 0 105.45 L 0 107.7 L 52.65 107.7 L 52.65 105.45 A 125.508 125.508 0 0 1 45.854 104.348 C 32.03 101.639 31.8 97.538 31.8 83.1 L 31.8 58.95 A 41.952 41.952 0 0 0 34.868 59.356 C 43.176 60.159 48.041 58.518 53.257 68.708 A 41.533 41.533 0 0 1 53.7 69.6 C 55.915 74.135 60.429 82.007 66.355 89.88 A 108.74 108.74 0 0 0 74.55 99.6 C 83.25 108.6 94.95 108.15 110.85 108.9 L 111.3 106.65 A 58.097 58.097 0 0 1 77.861 82.855 C 71.162 74.122 65.613 64.288 60.6 55.5 L 59.85 54.45 C 70.65 49.65 78.45 42.45 78.45 29.85 A 24.31 24.31 0 0 0 78.207 26.392 C 77.004 18.023 70.343 4.362 37.65 5.4 L 1.05 6.6 L 1.05 8.7 A 59.854 59.854 0 0 1 7.803 9.612 C 17.103 11.552 18.414 16.234 18.578 31.505 A 479.663 479.663 0 0 1 18.6 36.6 L 18.6 83.1 A 2080.003 2080.003 0 0 1 18.578 83.857 C 18.14 98.698 17.702 103.09 0 105.45 Z M 483 105.45 L 483 107.7 L 535.65 107.7 L 535.65 105.45 A 125.508 125.508 0 0 1 528.854 104.348 C 515.03 101.639 514.8 97.538 514.8 83.1 L 514.8 58.95 A 41.952 41.952 0 0 0 517.868 59.356 C 526.176 60.159 531.041 58.518 536.257 68.708 A 41.533 41.533 0 0 1 536.7 69.6 C 538.915 74.135 543.429 82.007 549.355 89.88 A 108.74 108.74 0 0 0 557.55 99.6 C 566.25 108.6 577.95 108.15 593.85 108.9 L 594.3 106.65 A 58.097 58.097 0 0 1 560.861 82.855 C 554.162 74.122 548.613 64.288 543.6 55.5 L 542.85 54.45 C 553.65 49.65 561.45 42.45 561.45 29.85 A 24.31 24.31 0 0 0 561.207 26.392 C 560.004 18.023 553.343 4.362 520.65 5.4 L 484.05 6.6 L 484.05 8.7 A 59.854 59.854 0 0 1 490.803 9.612 C 500.103 11.552 501.414 16.234 501.578 31.505 A 479.663 479.663 0 0 1 501.6 36.6 L 501.6 83.1 A 2080.003 2080.003 0 0 1 501.578 83.857 C 501.14 98.698 500.702 103.09 483 105.45 Z M 205.8 76.35 L 203.1 76.35 L 207.45 101.85 A 49.311 49.311 0 0 0 228.671 109.218 A 48.303 48.303 0 0 0 233.85 109.5 A 45.647 45.647 0 0 0 238.654 109.244 C 254.477 107.568 270.3 97.666 270.3 80.1 C 270.3 57.738 244.564 52.37 231.08 40.661 A 20.401 20.401 0 0 1 223.05 24.75 A 16.025 16.025 0 0 1 226.057 15.199 C 229.228 10.836 234.591 8.25 240.6 8.25 A 21.062 21.062 0 0 1 248.118 9.505 C 256.916 12.837 259.819 22.323 261.75 32.1 L 264.15 32.1 L 265.35 9.6 C 258.75 6 251.1 3.75 243.45 3.75 C 227.4 3.75 210 14.85 210 32.4 A 24.067 24.067 0 0 0 212.091 42.518 C 221.071 62.265 255.9 63.442 255.9 86.7 C 255.9 96.74 249.494 103.024 240.663 104.606 A 25.895 25.895 0 0 1 236.1 105 A 27.524 27.524 0 0 1 213.928 93.445 A 47.938 47.938 0 0 1 205.8 76.35 Z M 438.15 105.45 L 438.15 107.7 L 482.25 107.7 L 482.25 105.45 A 39.797 39.797 0 0 1 477.121 104.174 C 470.018 101.828 467.463 97.807 464.465 90.059 A 154.524 154.524 0 0 1 463.65 87.9 L 430.65 0 A 29.234 29.234 0 0 1 424.202 5.743 A 26.857 26.857 0 0 1 419.7 8.1 A 4.85 4.85 0 0 1 420.332 10.588 C 420.332 12.473 419.492 14.574 418.653 16.798 A 63.812 63.812 0 0 0 418.05 18.45 L 409.05 42.9 L 392.1 87.15 C 387.6 98.473 386.191 101.647 374.005 105.103 A 100.66 100.66 0 0 1 372.75 105.45 L 372.75 107.7 L 413.85 107.7 L 413.85 105.45 A 69.522 69.522 0 0 0 412.229 105.221 C 406.1 104.416 398.154 103.8 396.915 97.14 A 10.327 10.327 0 0 1 396.75 95.25 A 20.015 20.015 0 0 1 397.086 91.909 C 398.461 83.979 403.695 71.436 405.9 64.95 L 440.1 64.95 C 443.894 75.166 449.393 88.79 449.688 95.322 A 11.732 11.732 0 0 1 449.7 95.85 A 8.39 8.39 0 0 1 449.084 99.14 C 447.374 103.203 442.416 104.475 438.15 105.45 Z M 31.8 56.4 L 31.8 8.55 C 46.294 8.412 60.534 14.371 62.713 28.999 A 27.128 27.128 0 0 1 63 33 A 20.192 20.192 0 0 1 60.27 43.459 C 54.932 52.491 42.681 56.287 31.8 56.4 Z M 514.8 56.4 L 514.8 8.55 C 529.294 8.412 543.534 14.371 545.713 28.999 A 27.128 27.128 0 0 1 546 33 A 20.192 20.192 0 0 1 543.27 43.459 C 537.932 52.491 525.681 56.287 514.8 56.4 Z M 438.15 58.05 L 408.45 58.05 L 422.55 19.05 L 438.15 58.05 Z"
                vector-effect="non-scaling-stroke"
              />
            </g>
          </svg>
        </div>
        <div
          className="cSubTitle -left lUpdates-title-sub"
          data-subtitle="true"
          style={{ overflow: "hidden" }}
        >
          {/* <div
            className="cFlatText cSubTitle-inner"
            data-flat-text=""
            style={{ padding: "0px 19.2px", transform: "scaleX(1.05)" }}
          >
            <span
              className="cSubTitle-text"
              data-subtitle-item=""
              style={{ transform: "translate(0px, 0%)" }}
            >
              更
            </span>
            <span
              className="cSubTitle-text"
              data-subtitle-item=""
              style={{ transform: "translate(0px, 0%)" }}
            >
              新
            </span>
            <span
              className="cSubTitle-text"
              data-subtitle-item=""
              style={{ transform: "translate(0px, 0%)" }}
            >
              情
            </span>
            <span
              className="cSubTitle-text"
              data-subtitle-item=""
              style={{ transform: "translate(0px, 0%)" }}
            >
              報
            </span>
          </div> */}
        </div>
      </h2>

      <div
        className="lUpdates-ornament -view"
        data-scroll=""
        data-scroll-speed="-0.7"
        style={{
          transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
        }}
      >
        <picture>
          <source
            srcset="https://rara.ritsumei.ac.jp/assets/img/index/news/b-news_illust.png.webp"
            type="image/webp"
          />
          <img
            src="https://rara.ritsumei.ac.jp/assets/img/index/news/b-news_illust.png"
            width="487"
            height="517"
            alt=""
            loading="lazy"
          />
        </picture>
      </div>

      {/* list */}
      {/* <ul className="lUpdates-List">
        <li className="cUpdatesItem -wide">
          <a
            className="cUpdatesItem-inner"
            href="https://rara.ritsumei.ac.jp/updates/2897/"
          >
            <div className="cUpdatesItem-thumbnail">
              <img
                className="cUpdatesItem-image"
                src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2023/08/Nakagawa-Kitaba.jpg"
                alt=""
              />
            </div>
            <div className="cUpdatesItem-detail">
              <p className="cUpdatesItem-category">
                <span className="category">研究活動レポート</span>
                <span className="slash">/</span>{" "}
                <span className="category">中川 毅</span>{" "}
                <span className="slash">/</span>{" "}
                <span className="category">北場 育子</span>{" "}
              </p>
              <h3 className="cUpdatesItem-articleTitle">
                中川毅フェローと北場育子アソシエイトフェローが国際学会で分析サービス事業POLARISの国際的な受注開始を発表
              </h3>
              <div className="cUpdatesItem-bottom">
                <p className="cUpdatesItem-date">2023 / 08 / 03</p>
                <p className="cUpdatesItem-more">VIEW DETAIL</p>
              </div>
            </div>
          </a>
        </li>

        <li className="cUpdatesItem -wide">
          <a
            className="cUpdatesItem-inner"
            href="https://rara.ritsumei.ac.jp/updates/2890/"
          >
            <div className="cUpdatesItem-thumbnail">
              <img
                className="cUpdatesItem-image"
                src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2023/08/fujita.jpg"
                alt=""
              />
            </div>
            <div className="cUpdatesItem-detail">
              <p className="cUpdatesItem-category">
                <span className="category">研究活動レポート</span>
                <span className="slash">/</span>{" "}
                <span className="category">藤田 聡</span>{" "}
              </p>
              <h3 className="cUpdatesItem-articleTitle">
                藤田聡アソシエイトフェローがABEMAヒルズに出演
              </h3>
              <div className="cUpdatesItem-bottom">
                <p className="cUpdatesItem-date">2023 / 08 / 02</p>
                <p className="cUpdatesItem-more">VIEW DETAIL</p>
              </div>
            </div>
          </a>
        </li>

        <li className="cUpdatesItem -wide">
          <a
            className="cUpdatesItem-inner"
            href="https://rara.ritsumei.ac.jp/updates/2885/"
          >
            <div className="cUpdatesItem-thumbnail">
              <img
                className="cUpdatesItem-image"
                src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2023/07/thum.jpg"
                alt=""
              />
            </div>
            <div className="cUpdatesItem-detail">
              <p className="cUpdatesItem-category">
                <span className="category">お知らせ</span>{" "}
                <span className="slash">/</span>{" "}
                <span className="category">研究活動レポート</span>
                <span className="slash">/</span>{" "}
                <span className="category">佐伯 和人</span>{" "}
              </p>
              <h3 className="cUpdatesItem-articleTitle">
                佐伯和人フェローが立命館大学宇宙地球探査研究センター（ESEC）初主催イベントに登壇
              </h3>
              <div className="cUpdatesItem-bottom">
                <p className="cUpdatesItem-date">2023 / 07 / 31</p>
                <p className="cUpdatesItem-more">VIEW DETAIL</p>
              </div>
            </div>
          </a>
        </li>
      </ul> */}

      <ul className="lUpdates-Blog-List">
        {blogData.map((blog, index) => (
          <li className="cUpdatesItem -wide" key={index}>
            <a className="cUpdatesItem-inner" href={`/research/${blog.id}`}>
              <div className="cUpdatesItem-thumbnail">
                <img
                  className="cUpdatesItem-image"
                  src={blog.imagePath}
                  alt=""
                />
              </div>
              <div className="cUpdatesItem-detail">
                <p className="cUpdatesItem-category">
                  <span className="category">
                    {blog?.category?.title} / {blog?.fellow?.name}
                  </span>
                </p>
                <h3 className="cUpdatesItem-articleTitle">{blog.title}</h3>
                <div className="cUpdatesItem-bottom">
                  <p className="cUpdatesItem-date">
                    {new Date(blog.activationDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </p>
                  <a id="blog_link" href={`/research/${blog.id}`}>
                    <p className="cUpdatesItem-more">VIEW DETAIL</p>
                  </a>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="lUpdates-linkArea">
        <a className="lUpdates-link" href="/research">
          VIEW ALL UPDATES
        </a>
      </div>
    </div>
  );
};

export default index;
