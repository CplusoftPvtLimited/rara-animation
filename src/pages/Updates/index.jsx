import React from "react";
import HocCustomScrollbar from "../../components/HocCustomScrollbar";
import UpdatesPage from "./updates";

const index = () => {
  const UpdatesPageHOC = HocCustomScrollbar(UpdatesPage);
  return (
    <div>
      <UpdatesPageHOC />
    </div>
  );
};

export default index;
