import './navbar.scss'

function Navbar() {

  return (
    <div className="navbar">
      <div className="wrapper">
        <span>Natboringnails</span>
        <div className="menu">
          <a href="http://">About</a>
          <a href="http://">Treatments</a>
          <a href="http://">Inspiration</a>
          <a href="http://">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar