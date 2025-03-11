import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="nav_bar">
        <h1>Audrey</h1>
        <nav className="nav_bar-links">
          <a href="#presentation">Présentation</a>
          <a href="#formations">Formations</a>
          <a href="#projets">Projets</a>
          <a href="#competences">Compétences</a>
        </nav>

        <nav className="phone-nav_bar">
          <i onClick={openMenu} className="fa-solid menu_logo">
            &#xf0c9;
          </i>
          <ul className={isMenuOpen ? "active" : "disable"}>
            <li>
              <a onClick={openMenu} href="#presentation">
                Présentation
              </a>
            </li>
            <li>
              <a onClick={openMenu} href="#formations">
                Formations
              </a>
            </li>
            <li>
              <a onClick={openMenu} href="#projets">
                Projets
              </a>
            </li>
            <li>
              <a onClick={openMenu} href="#competences">
                Compétences
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
