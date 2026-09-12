Project Name : TechStack Builder

A Little Description
TechStack Builder is a web application that helps developers explore different technologies and build their own personalized technology stack. Users can select technologies and easily manage their selected stack.

Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* react toastify
* JSON / API

3 Key Features

1. Explore Technologies — Browse different technologies and their details.
2. Build Your Stack — Add technologies to create a personalized tech stack.
3. Manage Your Stack — Remove technologies from the stack and update the selection easily.


<!-- =================================================== -->
React Questions & Answers

 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React UI easier to write and understand.

2. What is the difference between props and state?

**Props** are data passed from parent to child.
**State** is data managed inside a component.

3. What does the `useState` hook do, and where did you use it?

`useState` stores and updates data in a component. I used it to manage my selected technologies and stack.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component renders. I used it to load technology data from the JSON file.

5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item and update the list correctly.

 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it to show an empty stack message when no technology is selected.

 7. How do you pass data from a parent to a child, and how does a child send something back?

We pass data from parent to child using props. A child can send data back by calling a function passed through props**.
