import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h5 className="portfolio__title">Портфолио</h5>
      <ul className="portfolio__list">
        <li className="portfolio__row portfolio__row_bottom-border">
          <a
            href="https://github.com/DmitrySavelev/how-to-learn"
            className="portfolio__row_text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Статичный сайт
          </a>
          <div className="portfolio__row_arrow"></div>
        </li>
        <li className="portfolio__row portfolio__row_bottom-border">
          <a
            href="https://github.com/DmitrySavelev/russian-travel"
            className="portfolio__row_text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт
          </a>
          <div className="portfolio__row_arrow"></div>
        </li>
        <li className="portfolio__row">
          <a
            href="https://github.com/DmitrySavelev/react-mesto-api-full-gha"
            className="portfolio__row_text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение
          </a>
          <div className="portfolio__row_arrow"></div>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
