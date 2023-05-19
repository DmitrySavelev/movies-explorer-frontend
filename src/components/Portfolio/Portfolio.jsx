import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__row portfolio__row_bottom-border">
          <a
            href="https://github.com/DmitrySavelev/how-to-learn"
            className="portfolio__row_text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Статичный сайт
            <div className="portfolio__row_arrow"></div>
          </a>
        </li>
        <li className="portfolio__row portfolio__row_bottom-border">
          <a
            href="https://github.com/DmitrySavelev/russian-travel"
            className="portfolio__row_text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт
            <div className="portfolio__row_arrow"></div>
          </a>
        </li>
        <li className="portfolio__row">
          <a
            href="https://github.com/DmitrySavelev/react-mesto-api-full-gha"
            className="portfolio__row_text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение
            <div className="portfolio__row_arrow"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
