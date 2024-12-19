import React from "react"; // Importing React to create the component
import style from "./Details.module.css"; // Importing the CSS module for styling
import coursesData from "../../../data/courses.json"; // Importing the courses data from a local JSON file

// Third task: import useParams hook to retrieve the dynamic courseId from the URL
import { Link, useParams } from "react-router-dom";

function Details() {
  // Third Task: get the courseId from the URL using useParams
  const { courseId } = useParams(); 
  // Find the course with the matching courseId from the imported coursesData
  const course = coursesData.find((course) => course.id === courseId); 

  return (
    <div className={style.courses_container}>
      {/* Container for the course details card */}
      <div className={style.card_container}>
        <div className={style.card_image}>
          <div className={style.image_container}>
            {/* Third task: Display course image */}
            <img src={course.img} alt="icons" /> 
            {/* The course image is dynamically set from the course data */}
          </div>
        </div>
        <div className={style.card_content}>
          {/* Third Task: Display the course title and description */}
          <h1 className={style.card_title}>{course.title}</h1>
          <p className={style.card_description}>{course.description}</p>
        </div>
      </div>
      {/* Task4: Create a link to navigate to the Learn page */}
      <Link to={`/learn/${course.id}`}> 
        {/* The link redirects the user to the Learn page for the selected course */}
        <button className={style.button}>Start Learning</button> 
        {/* Button for starting the learning process, styled with a CSS class */}
      </Link>
    </div>
  );
}

export default Details; // Export the Details component for use in other parts of the app
