// Child of PortfolioContainer
import { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import M from 'materialize-css';
import '../App.css';

export default function NavBar({ currentPage, handlePageChange }) {
  // Declare state variable to track the currently active menu item
  const [activeItem, setActiveItem] = useState('');

  // Initialize Materialize CSS functionality on component mount
  useEffect(() => {
    M.AutoInit();
  }, []);

  // Update the activeItem state when the currentPage prop changes
  useEffect(() => {
    setActiveItem(currentPage);
  }, [currentPage]);

  // Handle click on a menu item
  const handleItemClick = (item) => {
    // Set the activeItem state to the clicked item
    setActiveItem(item);

    // Call the handlePageChange prop function to update the current page
    handlePageChange(item);
  };

  return (
    <>
      <header>
        <nav>
          <div className='nav-wrapper'>
            <a href='#!' className='brand-logo name-title-tony'>
              Tony Guarino
            </a>
            <a href='#!' data-target='mobile-menu' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
            <ul className='right hide-on-med-and-down'>
              <li>
                {/* Set the active class based on the activeItem state */}
                <a
                  className={activeItem === 'about' ? 'active' : ''}
                  href='#!'
                  onClick={() => handleItemClick('about')}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#!'
                  className={activeItem === 'portfolio' ? 'active' : ''}
                  onClick={() => handleItemClick('portfolio')}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href='#!'
                  className={activeItem === 'contact' ? 'active' : ''}
                  onClick={() => handleItemClick('contact')}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='#!'
                  className={activeItem === 'resume' ? 'active' : ''}
                  onClick={() => handleItemClick('resume')}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <ul className='sidenav' id='mobile-menu'>
            <li>
              <a
                href='#!'
                className={activeItem === 'about' ? 'active' : ''}
                onClick={() => handleItemClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#!'
                className={activeItem === 'portfolio' ? 'active' : ''}
                onClick={() => handleItemClick('portfolio')}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href='#!'
                className={activeItem === 'contact' ? 'active' : ''}
                onClick={() => handleItemClick('contact')}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href='#!'
                className={activeItem === 'resume' ? 'active' : ''}
                onClick={() => handleItemClick('resume')}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
