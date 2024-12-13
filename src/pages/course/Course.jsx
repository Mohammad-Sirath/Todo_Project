import React from "react";
import "./Course.css";
import { courseData } from "../../data";
import { useParams } from "react-router-dom";
function Course() {
  const courseId = useParams().courseId;
  console.log(courseId);
  const courseInfo = courseData.find((course) => course.id == courseId);
  return (
    <div>
      <h1>This is Course page!</h1>
    </div>
  );
}

export default Course;
