import Course from "../Course/Course";
import { useState, useEffect } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  console.log(courses);
  return (
    <div>
      <h1>Courses: {courses.length}</h1>
      {courses.map((course, idx) => (
        <Course key={idx} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses;
