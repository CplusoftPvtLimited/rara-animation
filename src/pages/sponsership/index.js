import React from "react";
import SponsershipPage from "./Sponsership";
import HocCustomScrollbar from "../../components/HocCustomScrollbar";

const index = () => {
  const DonationpageHOC = HocCustomScrollbar(SponsershipPage);
  return (
    <div>
      <DonationpageHOC />
    </div>
  );
};

export default index;
