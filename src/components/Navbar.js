import React from "react";

export default function Navbar() {
  const [colorClass, setColorClass] = React.useState("navbar-dark");

  //   const colorChange = () => {
  //     let navPosition = window.scrollY;
  //     let banner = document.getElementById("banner");
  //     let navbar = document.getElementById("navbar");
  //     if (navPosition > banner.getBoundingClientRect().height - 30) {
  //       setColorClass("navbar-light");
  //       navbar.classList.replace("bg-transparent", "navbar-light");
  //       navbar.style.backgroundColor = "#FF5353";
  //     } else {
  //       setColorClass("navbar-dark");
  //     }
  //   };

  React.useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let href = document.querySelector(anchor.getAttribute("href"));
        window.scroll({
          top: href?.getBoundingClientRect().top - 100,
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg ${colorClass}  fixed-top`}
      style={{
        backgroundColor: "#FF5353",
      }}
    >
      <a className="navbar-brand ml-3" href="/">
        <img src="./logo.svg" className="logo" alt=""></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#banner">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Portfolio">
              Portfolio
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#Contact">
              Contact
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
