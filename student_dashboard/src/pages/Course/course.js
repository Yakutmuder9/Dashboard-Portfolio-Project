import { useState, useEffect } from "react";
import CourseStore from "./Coursestore/CourseStore";
function Course() {
  const [enrolled, setEnrlled] = useState([]);

  return (
    <div className="course ">
      <CourseStore />
    </div>
  );
}

export default Course;
