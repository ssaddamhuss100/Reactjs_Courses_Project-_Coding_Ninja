import Hero from "./pages/app/hero/Hero"; // Importing the Hero component for the homepage
import Nav from "./components/nav/Nav"; // Importing the Nav component for navigation
import Courses from "./pages/app/courses/Courses"; // Importing the Courses component for the courses page

import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Importing Router-related functions from react-router-dom
import Details from "./pages/app/details/Details"; // Importing the Details page for course details
import Learn from "./pages/app/learn/Learn"; // Importing the Learn page for a specific course
import Chapter from "./pages/app/chapter/Chapter"; // Importing the Chapter page for a specific chapter in the course
import Page404 from "./pages/misc/Page404/Page404"; // Importing the Page404 component for error handling

function App() {
  // Step 1: Define the browser router with all the routes and their elements
  const browserRouter = createBrowserRouter([ 
    {
      path: "/", // This is the root path of the app
      element: <Nav />, // The navigation bar will be displayed on all pages inside this route
      errorElement: <Page404 />, // If any route does not match, the Page404 component will be shown
      children: [
        { path: "/", element: <Hero /> }, // When the path is exactly "/", the Hero component will be rendered (homepage content)
        {
          path: "/courses", // When the user navigates to "/courses", this will handle course-related routes
          children: [
            { index: true, element: <Courses /> }, // The default route (index) under "/courses" renders the Courses component
            { path: ":courseId", element: <Details /> }, // If a specific course ID is given (e.g., "/courses/1"), the Details component will be displayed for that course
          ],
        },
        {
          path: "/learn/:courseId", // This path is used for a specific course's learning content, based on the courseId
          element: <Learn />, // The Learn component will be displayed for this path
          children: [
            { path: "chapter/:chapterId", element: <Chapter /> }, // When navigating to a chapter within a course (e.g., "/learn/:courseId/chapter/:chapterId"), the Chapter component will be displayed
          ],
        },
      ],
    },
  ]);

  // Step 2: Render the RouterProvider with the defined router, which will manage the routing for the application
  return (
    <>
      <RouterProvider router={browserRouter} /> {/* The RouterProvider component takes care of rendering the right component based on the current URL */}
    </>
  );
}

export default App;
