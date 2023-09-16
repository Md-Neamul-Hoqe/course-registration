# Course Registration Project: Assignment no. 7

## The Answers to The Questions

1. [_Three Features in This Project_](#Features)
2. [_Managing of State in This Project_](#State_Management)

### Features

1. **Course Selection:** Users can select any course of their choice up to 20 hrs Credit.

2. **Deselect Courses:** Users can remove selected courses clicking on the course name in the cart [Credit & Price will auto update].

3. **Cart View:** Users can view the total cost & Total-Remaining Credit of the courses they've selected in the cart.

### State_Management

In this project, I use React's useState() to manage the states, and then I set it in the App.jsx file as

```
  const [courses, setCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);
```

In the `useState()` build-in function, the initial values are used in relation to the data stored in variables `courses`, `credit`, and `price`. In this context, `courses` is an array-like object obtained from JSON data in the file [course.json](./public/courses.json). `credit` & `price` are number typed with initial value `0`.

> **Course Selection**

When the `Select` button is clicked, a function `handleSelectCourse()` is invoked with an object parameter - named `course`. The function first checks whether the course is already selected. If it is, a toast message is displayed to the user indicating that the course is already selected.

If the course is not already selected, the function proceeds to check whether the total credit of the selected courses [including this course] is greater than 20. If greater than 20, a toast message is displayed to the user to inform them of this condition.

If the available credit is not greater than 20, the function updates the `courses` variable to include the selected course, updates the `credit` variable to reflect the total selected credits, and updates the `price` variable to represent the total selected price. This is done in order to save the current state.

To summarize, the function checks if a course is already selected, checks if the available credit is above 20, and if neither of these conditions apply, it updates the state with the selected course, credit, and price.

> **Course Deselection**

To deselect any course from the cart, click on the course name displayed in the cart. A function `handleRemoveSelection()` control the deselection process & manage auto update `credit` & `price` state.
