import { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for managing theme (light or dark)
const ThemeContext = createContext();

// ThemeProvider component to provide the theme context to child components
const ThemeProvider = ({ children }) => {
  // Function to get the initial theme from localStorage or default to null
  const initialTheme = () => localStorage.getItem('CODING_SAMURAI_THEME');

  // useState hook to manage the current theme, initialized from localStorage
  const [theme, setTheme] = useState(initialTheme);

  // Function to toggle between 'light-theme' and 'dark-theme'
  const toggleTheme = () =>
    setTheme((theme) => {
      if (theme === 'light-theme') return 'dark-theme'; // Switch to dark if currently light
      if (theme === 'dark-theme') return 'light-theme'; // Switch to light if currently dark
      return 'dark-theme'; // Default to dark theme
    });

  // useEffect hook to save the theme to localStorage and apply the corresponding class to <html> element
  useEffect(() => {
    // Save the current theme to localStorage
    localStorage.setItem('CODING_NINJASA_PROJECT_THEME', theme);

    // Apply the correct theme class to the <html> element
    if (theme === 'dark-theme') {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
  }, [theme]); // Only run this effect when the theme changes

  return (
    // Provide the current theme and the toggle function to child components via context
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export default function useTheme() {
  // Use useContext to access the theme context
  const context = useContext(ThemeContext);

  // If context is undefined, it means the hook was used outside of a ThemeProvider, so throw an error
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  // Return the context value (theme and toggleTheme function)
  return context;
}

// Export the ThemeProvider to wrap around components that need access to the theme context
export { ThemeProvider };
