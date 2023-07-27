// Parent of NavBar
import React, { useState } from 'react';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Portfolio from '../pages/Portfolio.jsx';
import Resume from '../pages/Resume.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

export default function PortfolioContainer() {
  // Initialize state for the current page
  const [currentPage, setCurrentPage] = useState('about');

  // Define a function to render the appropriate page based on the current page state
  const render = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  // Define a function to handle page changes
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        {/* Render the NavBar component and pass the current page and the handlePageChange function as props */}
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />

        {/* Render the page based on the current page state */}
        {render()}
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
