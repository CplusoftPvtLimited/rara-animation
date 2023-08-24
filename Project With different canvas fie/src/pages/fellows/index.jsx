import React from "react";
import HocCustomScrollbar from "../../components/HocCustomScrollbar";
import Fellows from "./fellow";

const index = () => {
  const FellowspageHOC = HocCustomScrollbar(Fellows);
  return (
    <div>
      <FellowspageHOC />
    </div>
  );
};

export default index;
