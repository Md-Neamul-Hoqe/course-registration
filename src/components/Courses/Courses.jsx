import Course from "../Course/Course";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Courses = ({ handleSelectCourse }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);


  return (
    <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {courses.map((course, idx) => (
        <Course
          key={idx}
          course={course}
          handleSelectCourse={handleSelectCourse}></Course>
      ))}
    </section>
  );
};

Courses.propTypes = {
  handleSelectCourse: PropTypes.func.isRequired,
};
export default Courses;
