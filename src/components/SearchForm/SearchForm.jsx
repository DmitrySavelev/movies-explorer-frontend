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
              required
              name="films"
              placeholder="Фильм"
            ></input>
            <div className="form__button">
              <button className="form__button-img"></button>
            </div>
          </form>
        </div>
        <label className="shortFilms" htmlFor="switch">
          <input type="checkbox" className="shortFilms__switch" id="shortFilms__switch" />
          <div className="shortFilms__new-switch"></div>
          <span className="shortFilms__span">Короткометражки</span>
        </label>
      </div>
      <hr className="horizon-line" />
    </>
  );
}

export default SearchForm;
