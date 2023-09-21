import React from "react";
import HocCustomScrollbar from "../../components/HocCustomScrollbar";
import Homepage from "./home";

const index = () => {
  const HomepageHOC = HocCustomScrollbar(Homepage);
  return (
    <div>
      <HomepageHOC />
    </div>
  );
};

export default index;
