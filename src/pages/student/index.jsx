import React from "react";
import HocCustomScrollbar from "../../components/HocCustomScrollbar";
import StudentPage from "./student";

const index = () => {
  const StudentPageHOC = HocCustomScrollbar(StudentPage);
  return (
    <div>
      <StudentPageHOC />
    </div>
  );
};

export default index;
