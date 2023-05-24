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
        <div className="checkbox">
          <input
            type="checkbox"
            className="checkbox__input"
            id="checkbox__input"
          />
          <label className="checkbox__label" htmlFor="checkbox__input">
            Короткометражки
          </label>
        </div>
      </div>
      <hr className="horizon-line" />
    </>
  );
}

export default SearchForm;
