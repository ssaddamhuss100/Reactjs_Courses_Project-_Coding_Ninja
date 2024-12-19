import React from "react"; // Importing React library to create the component
import style from "./style.module.css"; // Importing the CSS module for styling

// Card Component: This component displays a card with a title and an image
function Card({ title, img, id }) {
  return (
    <div style={{ cursor: "pointer" }} className={style.card_container}>
      {/* Card Image Section */}
      <div className={style.card_image}>
        <div className={style.image_container}>
          {/* Image inside the card */}
          <img src={img} alt="icons" />
        </div>
      </div>

      {/* Card Content Section */}
      <div className={style.card_content}>
        {/* Title of the card */}
        <h1 className={style.card_title}>{title}</h1>
      </div>
    </div>
  );
}

export default Card;
