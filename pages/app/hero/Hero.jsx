import React from 'react'; // Import React for creating components
import style from './Hero.module.css'; // Import the CSS module for styling

function Hero() {
  return (
    <header> {/* This is the main wrapper for the hero section */}
      <section className={style.logo_wrapper}> {/* Wrapper for the logo image */}
        <img
          className={style.logo} // Apply the CSS class 'logo' to the image
          src='https://files.codingninjas.in/pl-ninja-16706.svg' // URL of the logo image
          alt='logo' // Alt text for the image, which helps with accessibility
        />
      </section>
      <section className={style.content}> {/* Section for the text content */}
        <h4>Are you ready to ?</h4> {/* Small introductory heading */}
        <h1>Be a Coding Ninjas</h1> {/* Main heading for the hero section */}
        <p>
          {/* Description text explaining the value of learning coding */}
          See how experienced developers solve problems in real-time. Watching scripted
          tutorials is great, but understanding how developers think is invaluable.
        </p>
      </section>
    </header>
  );
}

export default Hero; // Export the Hero component to be used in other parts of the app
