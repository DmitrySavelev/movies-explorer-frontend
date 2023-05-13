import "./SearchForm.css";

function SearchForm() {
  return (
    <>
      <div className="searchForm">
        <div className="searchForm__body">
          <form className="form">
            <div className="searchForm__find-left"></div>
            <input
              className="form__field"
              type="search"
              name="films"
              placeholder="Фильм"
            ></input>
            <div className="form__button">
              <div className="form__button_img"></div>
            </div>
          </form>
        </div>
        <label className="shortFilms__label" htmlFor="switch">
          <input type="checkbox" className="switch" id="switch" />
          <div className="new-switch"></div>
          <span className="shortFilms__span">Короткометражки</span>
        </label>
      </div>
      <hr className="horizon-line" />
    </>
  );
}

export default SearchForm;
