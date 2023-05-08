import "./SearchForm.css";

function SearchForm() {
  return (
    <>
      <div className="searchForm">
        <form className="form">
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
        <label className="shortFilms" htmlFor="switch">
          <input type="checkbox" className="switch" id="switch" />
          <span className="shortFilms__span">Короткометражки</span>
          <div className="new-switch"></div>
        </label>
      </div>
      <hr className="horizon-line"/>
    </>
  );
}

export default SearchForm;
