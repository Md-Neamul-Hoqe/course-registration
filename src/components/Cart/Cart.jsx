import PropTypes from "prop-types";
const Cart = ({ price, credit, courses }) => {
  console.log(courses);
  return (
    <div className="bg-white p-6 rounded-xl">
      <h3 className="text-lg text-blue-500 leading-7 font-bold border-b-2 py-2">
        Credit Hour Remaining {20 - credit} hr
      </h3>
      <div className="border-b-2 py-4">
        <h2 className="text-xl font-bold ">Course Name</h2>
        <ol className="text-[#1C1B1B]/60 py-5 leading-7 text-base list-inside list-decimal">
          {courses.map((course, idx) => {
            return <li key={idx}>{course.course_name}</li>;
          })}
        </ol>
      </div>

      <h5 className="border-b-2 py-4 text-[#1C1B1B]/80">
        Total Credit Hour : {credit}
      </h5>

      <h5 className="border-b-2 py-4 text-[#1C1B1B]/80">
        Total Price : {price} USD
      </h5>
    </div>
  );
};

Cart.propTypes = {
  courses: PropTypes.array.isRequired,
  credit: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
export default Cart;
