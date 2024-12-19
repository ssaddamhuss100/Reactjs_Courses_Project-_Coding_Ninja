import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom"; // Import required components from react-router-dom
import style from "./Nav.module.css"; // Import CSS styles for the navigation bar

// Nav component: The main navigation component of the app
function Nav() {
  return (
    <>
      {/* Main navigation section */}
      <nav>
        <div className={style.nav_container}>
          {/* Wrapper for logo and title */}
          <div className={style.nav_title_wrapper}>
            {/* Second Task: Link to homepage */}
            <Link to="/"> 
              {/* Logo image of Coding Ninjas */}
              <img
                className={style.logo} // Apply styles for the logo image
                src="https://files.codingninjas.in/pl-ninja-16706.svg" // Image source URL
                alt="logo" // Alt text for the image
              />
            </Link>
            {/* Title of the site */}
            <h4>Coding Ninjas</h4>
          </div>

          {/* Wrapper for the navigation buttons */}
          <div className={style.nav_details}>
            <button>
              {/* Second Task: Conditional rendering of navigation link */}
              <NavLink to="/courses">
                {({ isActive }) => (
                  // Dynamically change the text based on whether the link is active
                  isActive ? "On Courses" : "Go To Courses"
                )}
              </NavLink>
            </button>
          </div>
        </div>
      </nav>

      {/* Render the child routes using Outlet */}
      <Outlet />
    </>
  );
}

export default Nav;

// Alternative code for adding cart icon (commented out code)
// <img
//   alt='cart-icon'
//   src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png' // Cart icon image source
//   className={`${style.cart_icon} ${style.icon}`} // Apply styles for the cart icon
// />;
