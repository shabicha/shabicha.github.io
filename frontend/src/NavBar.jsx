/* eslint-disable react/prop-types */
import './NavBar.css'
import Logo from '/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/public/shabLogo.svg'

const NavBar = ({ scrollToCardsSection }) => {
  return (
      <nav className="navbar">
          {/* Logo */}
          <a href="/" className="vector"> <img src={Logo} alt="Vector" /> </a>

          {/* Navigation Links */}
          <div className="nav-links">
              <a href="#"
                  onClick={(e) => {
                      e.preventDefault(); // Prevents page reload
                      scrollToCardsSection(); // Calls the scroll function from App.jsx
                  }} style={{ cursor: 'pointer' }} className='text-wrapper-3'>PROJECTS</a>
              <a href="https://rose-ginnie-96.tiiny.site" target="_blank" rel="noopener noreferrer" className='text-wrapper-3'>RESUME</a>
          </div>
      </nav>
  )
}

export default NavBar