import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <header>
        <h1>Course Registration</h1>
      </header>
      <Courses></Courses>
    </>
  );
}

export default App;
