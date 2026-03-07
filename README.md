# Student Management Portal React

A React + Vite mini project built for React Assessment 5. The project demonstrates JSX rendering, reusable components, props, controlled forms, React Hooks, routing, API integration, and CRUD operations using JSON Server.

## Features

- React project setup using Vite
- JSX rendering with lists, tables, and conditional display
- Reusable components such as Header, Footer, Sidebar, and StudentCard
- Props and PropTypes with default values
- Controlled form with validation
- useState and useEffect examples using Counter and Timer
- Routing with React Router DOM
- API integration using Axios
- CRUD operations using JSON Server
- Simple multi-page student management interface

## Tech Stack

- React
- Vite
- JavaScript
- React Router DOM
- Axios
- PropTypes
- JSON Server
- CSS

## Project Structure

```text
student-management-portal-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StudentCard.jsx
│   │   ├── StudentForm.jsx
│   │   ├── Counter.jsx
│   │   ├── Timer.jsx
│   │   ├── UserList.jsx
│   │   └── StudentCRUD.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   └── StudentDetails.jsx
│   ├── styles/
│   │   ├── App.css
│   │   └── StudentCard.module.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── db.json
├── package.json
└── README.md
```

## How to Run

1. Clone the repository
   -git clone https://github.com/purvi126/student-management-portal-react.git
   -cd student-management-portal-react
2. Install dependencies
   -npm install
3. Start the React development server
   -npm run dev
4. Start JSON Server in another terminal
   -npx json-server --watch db.json --port 3001

## Main Pages
 - Home — JSX rendering, expressions, lists, tables, conditional rendering
 - About — reusable props-based student cards with PropTypes
 - Contact — controlled form with validation and submission display
 - Dashboard — counter, timer, API users table, and student CRUD
 - Student Details — dynamic route using URL parameters

## Learning Outcomes
This project helped practice:
 - component-based UI design
 - React state management
 - side effects with useEffect
 - controlled forms
 - API fetching
 - local CRUD workflows
 - routing between pages in a React application

## Note
This project was created as part of a coursework assessment and also organized as a clean beginner-level GitHub project.
