import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__title">
        <h5 className="footer__title_text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h5>
      </div>
      <div className="footer__row">
        <p className="footer__copyright">© {new Date().getFullYear()}</p>
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/">
            Яндекс.Практикум
          </a>
          <a className="footer__link" href="https://github.com/">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
