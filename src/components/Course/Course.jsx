import PropTypes from "prop-types";
import "./Course.css";

const Course = ({ course, handleSelectCourse }) => {
  // console.log(course);
  return (
    <div className="bg-white p-4 rounded-xl">
      <figure>
        <img
          className="rounded-lg md:max-h-[12vw] lg:max-h-[10vw] 2xl:max-h-[6vw] w-full"
          src={course.image}
          alt={course.course_name}
        />
      </figure>
      <div className="py-4">
        <h3 className="mb-3 text-lg text-[#1C1B1B] font-semibold">
          {course.course_name}
        </h3>
        <div className="text-sm text-[#1C1B1B]/60 leading-6">
          {course.details}
        </div>
      </div>
      <div className="flex items-center text-[#1C1B1B]/60 justify-between pb-5">
        <span>
          <i className="fa fa-dollar text-[#1C1B1B]"></i> Price: {course.price}
        </span>
        <span>
          <i className="fa-solid fa-book-open text-[#1C1B1B]"></i> Credit:{" "}
          {course.credit} hr
        </span>
      </div>
      <button
        onClick={() => handleSelectCourse(course)}
        className="w-full bg-blue-600 text-white text-lg font-semibold">
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectCourse: PropTypes.func.isRequired,
};
export default Course;
