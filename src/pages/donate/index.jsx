import React from "react";
import HocCustomScrollbar from "../../components/HocCustomScrollbar";
import DonationPage from "./Donate";

const index = () => {
  const DonationpageHOC = HocCustomScrollbar(DonationPage);
  return (
    <div>
      <DonationpageHOC />
    </div>
  );
};

export default index;
