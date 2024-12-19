import React from "react";
import styles from "./Chapter.module.css"; // Import CSS module for styling
import { useOutletContext, useParams } from "react-router-dom"; // Import necessary hooks from react-router-dom

function Chapter() {
  // Step 1: Get the `chapterId` from the URL using `useParams()` hook
  const { chapterId } = useParams();

  // Step 2: Get the `course` data passed from the parent component (`Learn`) using `useOutletContext()`
  const course = useOutletContext();

  // Step 3: Find the specific chapter in the `course.chapters` array using the `chapterId`
  // Convert both `chapter.chapter` and `chapterId` to strings for accurate comparison
  const chapter = course.chapters.find(
    (chapter) => String(chapter.chapter) === chapterId
  );

  // Step 4: Log the `chapter` to the console for debugging purposes (check the chapter data)
  console.log(chapter);

  // Step 5: Return the JSX that renders the chapter details
  return (
    <div>
      {/* Display the chapter title */}
      <h1>{chapter.title}</h1>

      {/* Add a horizontal line for separation */}
      <hr />

      {/* Display the chapter description */}
      <h2>{chapter.description}</h2>

      {/* Display the chapter details in a paragraph, apply custom styling using CSS module */}
      <p className={styles.para}>{chapter.details}</p>

      <br />
      <br />

      <div className={styles.videos}>
        {/* 
          Step 6: Embed the video for the chapter using an iframe.
          The `chapter.video` contains the YouTube video URL that is used as the `src` for the iframe.
          Make sure to replace the video URL with the correct one for each chapter.
        */}
        <iframe
          width="800"
          height="560"
          src={chapter.video} // Use the video URL from the chapter data
          title="React Video" // Title for the iframe (for accessibility purposes)
          frameBorder="1" // Border for the iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" // Allow specific browser features for the iframe
          allowFullScreen // Allow fullscreen mode for the video
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
