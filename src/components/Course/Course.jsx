import PropTypes from "prop-types";

const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <h3>Course: {course.course_name}</h3>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};
export default Course;
