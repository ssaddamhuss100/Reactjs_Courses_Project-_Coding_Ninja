import React from "react"; // Import React to create the component
import style from "./Courses.module.css"; // Importing the CSS module for styling
import Card from "../../../components/card"; // Importing the Card component to display course details
import coursesData from "../../../data/courses.json"; // Importing course data from a local JSON file
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation

function Courses() {
  return (
    <div className={style.courses_container}> {/* Main container for the courses section */}
      <div className={style.heading}> {/* Section for the title and subtitle */}
        <h1>Popular Courses</h1> {/* Main heading for the courses section */}
        <h4>Choose your Katana ⚔️</h4> {/* Subheading with a fun emoji */}
      </div>
      <div className={style.courses}> {/* Container for the list of courses */}
        {coursesData.map((course, index) => {
          return (
            <div key={index} className={style.card_container}> {/* Each course card container */}
              {/* Third Task: Added link to individual Cards */}
              <Link to={`/courses/${course.id}`}> {/* Link to the individual course page */}
                <Card
                  key={course.id}
                  id={course.id} 
                  title={course.title}
                   /* Passing course title to the Card component */
                  img={course.img}
                   /* Passing course image to the Card component */
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses; // Exporting the Courses component to be used in other parts of the app
