import logoImg from "../images/logo.svg"
import {pageLinks} from "../data"
export function Navbar() {
  function hamburgerMenu() {
    const navList = document.querySelector("nav ul")
    const navmenu = document.querySelectorAll(".hamburger i")
    navmenu.forEach((e) =>{
      e.classList.toggle("hidden")
    })
    navList.classList.toggle("active")
  }
  return(
    <nav>
      <div className="container">
      <img src={logoImg} alt="logo"/>
      <ul>
        {pageLinks.map(({id, href, text}) =>{
          return <li key={id}><a href={href}>{text} </a></li>
        })
        }
      </ul>
      <div className="social">
        <a href="#facebook"><i className="fab fa-facebook"></i></a>
        <a href="#twitter"><i className="fab fa-twitter"></i></a>
        <a href="#instagram"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="hamburger" onClick={hamburgerMenu}>
      <i className="fa-solid fa-bars"></i>
      <i className="fa-solid hidden fa-xmark"></i>
      </div>
      </div>
    </nav>
  )
}