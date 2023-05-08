import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h5 className="portfolio__title">Портфолио</h5>
      <div className="portfolio__row portfolio__row_bottom-border">
        <span className="portfolio__row_text">Статичный сайт</span>
        <div className="portfolio__row_arrow"></div>
      </div>
      <div className="portfolio__row portfolio__row_bottom-border">
        <span className="portfolio__row_text">Адаптивный сайт</span>
        <div className="portfolio__row_arrow"></div>
      </div>
      <div className="portfolio__row">
        <span className="portfolio__row_text">Одностраничное приложение</span>
        <div className="portfolio__row_arrow"></div>
      </div>
    </div>
  );
}

export default Portfolio;
