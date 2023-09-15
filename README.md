# Course Registration Project: Assignment no. 7

## The Answers to The Questions

1. [_Three Features in This Project_](#Features)
2. [_Managing of State in This Project_](#State_Management)

### Features

1. **Course Selection:** Users can select any course of their choice.

2. **Credit Limit:** Users can select a maximum of 20 hours of credit.

3. **Total Cost:** Users can view the total cost of the courses they've selected in their cart.

### State_Management

In this project, I use React's useState() to manage the states, and then I set it in the App.jsx file as

```
  const [courses, setCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);
```

In the `useState()` build-in function, the initial values are used in relation to the data stored in variables `courses`, `credit`, and `price`. In this context, `courses` is an array-like object obtained from JSON data in the file [course.json](./public/courses.json).

When the "Select" button is clicked, a function is invoked with an object parameter named `course`. The function first checks whether the course is already selected. If it is, a toast message is displayed to the user indicating that the course is already selected.

If the course is not already selected, the function proceeds to check whether the available credit is greater than 20. If the available credit is indeed greater than 20, a toast message is displayed to the user to inform them of this condition.

If the available credit is not greater than 20, the function updates the `courses` variable to include the selected course, updates the `credit` variable to reflect the total selected credits, and updates the `price` variable to represent the total selected price. This is done in order to save the current state.

To summarize, the function checks if a course is already selected, checks if the available credit is above 20, and if neither of these conditions apply, it updates the state with the selected course, credit, and price.

in useState() parenthesis the initial values are used relative to the data stored in variables (courses, credit, price), here `courses` is an array like object getting from JSON data in [course.json](./public/courses.json).
According to state conditions the variables are updated.

When `Select` button is clicked a function is called with parameter (Object) `course`, I check is it already selected or not. If selected then Show a toast to user, otherwise check that the credit is more than 20 or not. If more than 20 then show a toast to user, else set the course to the variable `courses`, total selected credit to `credit` & total selected price to `price` for save the state.
