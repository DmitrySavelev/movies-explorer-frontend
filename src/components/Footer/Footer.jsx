import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">
        <h5 className="footer__title-text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h5>
      </div>
      <div className="footer__row">
        <p className="footer__copyright">© {new Date().getFullYear()}</p>
        <div className="footer__links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
