import React from "react";
import HocCustomScrollbar from "../../components/HocCustomScrollbar";
import NewsPage from "./news";

const index = () => {
  const NewsPageHOC = HocCustomScrollbar(NewsPage);
  return (
    <div>
      <NewsPageHOC />
    </div>
  );
};

export default index;
