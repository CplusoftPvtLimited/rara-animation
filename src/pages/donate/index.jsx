import React from "react";
import DonationPage from "./Donate";
import HocCustomScrollbar from "../../components/HocCustomScrollbar";

const index = () => {
  const DonationpageHOC = HocCustomScrollbar(DonationPage);
  return (
    <div>
      <DonationpageHOC />
    </div>
  );
};

export default index;
