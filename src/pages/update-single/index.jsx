import React from "react";
import HocCustomScrollbar from "../../components/HocCustomScrollbar";
import UpdateSinglePage from "./updateSingle";

const index = () => {
  const UpdateSinglePageHOC = HocCustomScrollbar(UpdateSinglePage);
  return (
    <div>
      <UpdateSinglePageHOC />
    </div>
  );
};

export default index;
