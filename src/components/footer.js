import {pageLinks} from "../data"
export function Footer() {
  return(
    <footer className="padding">
      <div className="container">
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
      <p>Copyright © Backroads Travel Tours Company {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </footer>
  )
}