import "./App.css";
import Courses from "./components/Courses/Courses";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

import Swal from "sweetalert2";

function App() {
  const creditBoundary = 20;
  const [courses, setCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelectCourse = (course) => {
    let credit = course.credit;
    let price = course.price;
    courses.map(
      (course) => ((credit += course.credit), (price += course.price))
    );

    const isExist = courses.find((current) => course.id === current.id);

    if (isExist)
      return Swal.fire(
        `The course "${course.course_name}" has already been added. Please select another one.`
      );

    if (credit < 0) return Swal.fire(`Credit can't negative value.`);

    if (credit > creditBoundary)
      return Swal.fire(
        `Sorry, you have only ${
          creditBoundary - credit + course.credit
        } credit remaining`
      );

    setCourses([...courses, course]);
    setCredit(credit);
    setPrice(price);
  };

  const handleRemoveSelection = (course) => {
    const newCourses = courses.filter((current) => current.id !== course.id);

    let newCredit = credit - course.credit;
    let newPrice = price - course.price;

    if (newPrice < 0) newPrice = 0;
    else if (newCredit < 0) newCredit = 0;

    setCredit(newCredit);
    setPrice(newPrice);
    setCourses(newCourses);
  };

  return (
    <>
      <header>
        <h1 className="pt-12 pb-8 font-bold text-center max-sm:text-3xl text-4xl">
          Course Registration
        </h1>
      </header>
      <main className="main-section mx-auto max-sm:px-5 px-14 flex max-sm:flex-col-reverse flex-row gap-6">
        <aside className="max-sm:max-w-full max-w-[75%]">
          <Courses handleSelectCourse={handleSelectCourse}></Courses>
        </aside>
        <aside className="max-sm:max-w-full max-w-[25%]">
          <Cart
            price={price}
            credit={credit}
            courses={courses}
            creditBoundary={creditBoundary}
            handleRemoveSelection={handleRemoveSelection}></Cart>
        </aside>
      </main>
    </>
  );
}

export default App;
