# Course Registration Project: Assignment no. 7

## The Answers to The Questions

- [Features] _Three Features in This Project_
- [State_Management] _Managing of State in This Project_

## Features

1. One can select any course as his choice
2. One can select maximum 20 hrs credit
3. Can see total cost in his cart of this selected courses

## State_Management

To manage the states in this project I use React useState() the set it to App.jsx as

```
  const [courses, setCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);
```

in useState() parenthesis the initial values are used relative to the data stored in variables (courses, credit, price), here courses is an array like object getting from JSON data in course.json.
According to state conditions the variables are updated.

When `Select` button is clicked a function is called with parameter (Object) `course`, I check is it already selected or not. If selected then Show a toast to user, otherwise check that the credit is more than 20 or not. If more than 20 then show a toast to user, else set the course to the variable `courses`, total selected credit to `credit` & total selected price to `price` for save the state.
