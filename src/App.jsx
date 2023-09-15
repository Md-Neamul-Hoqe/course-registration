import "./App.css";
import Courses from "./components/Courses/Courses";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

import Swal from "sweetalert2";

function App() {
  const [courses, setCourses] = useState([]);

  const handleSelectCourse = (course) => {
    let credit = course.credit;
    courses.map((course) => (credit += course.credit));
    // console.log(course.id);
    if (credit > 20) Swal.fire("Credit is completed.");
    const isExist = courses.find((current) => course.id === current.id);
    if (!isExist) setCourses([...courses, course]);
    // console.log(courses);
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
          <Cart courses={courses}></Cart>
        </aside>
      </main>
    </>
  );
}

export default App;
