import "./NavTab.css";

function NavTab() {
  return (
    // <div className="navTab__wrapper">
      <nav className="navTab">
        <a className="navTab__link" href="#aboutProject">
          О проекте
        </a>
        <a className="navTab__link" href="#techs">
          Технологии
        </a>
        <a className="navTab__link" href="#aboutMe">
          Студент
        </a>
      </nav>
    // </div>
  );
}

export default NavTab;
