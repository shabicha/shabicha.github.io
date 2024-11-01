import './NavBar.css'
const NavBar = () => {
  return (
      <nav className="navbar">
          {/* Logo */}
          <a href="/" className="logo">UO</a>

          {/* Navigation Links */}
          <div className="nav-links">
              <a href="scroll down" className='text-wrapper-3'>CASE STUDIES</a>
              <a href="https://rose-ginnie-96.tiiny.site" target="_blank" rel="noopener noreferrer">RESUME</a>
          </div>
      </nav>
  )
}

export default NavBar