import React from "react";
import HocCustomScrollbar from "../../components/HocCustomScrollbar";
import FellowSingle from "./fellowSingle";

const index = () => {
  const FellowSingleHOC = HocCustomScrollbar(FellowSingle);
  return (
    <div>
      <FellowSingleHOC />
    </div>
  );
};

export default index;
