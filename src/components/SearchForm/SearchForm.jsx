import { useEffect, useState } from "react";
import "./SearchForm.css";
import { useLocation } from "react-router-dom";
import { useValidationForm } from "../../utils/useValidationForm";

function SearchForm({
  cards,
  setSearchedMovies,
  isButtonClicked,
  setIsButtonClicked,
  savedMovies,
  pushMore,
  setPushMore,
  setIsShowedButton,
  responseMessage,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const { values, isValid, handleChange } = useValidationForm();

  let location = useLocation();

  const handleDuration = (movie) => {
    if (!isChecked) {
      return movie.duration > 40;
    } else {
      return movie.duration <= 40;
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setPushMore(0);
    setIsButtonClicked(true);
  };

  function getFilteredArr(arr) {
    const filteredArr = arr.filter((movie) => {
      return (
        (movie.nameRU.toLowerCase().includes(values.films) ||
          movie.nameEN.toLowerCase().includes(values.films)) &&
        handleDuration(movie)
      );
    });
    setSearchedMovies(filteredArr);
    return filteredArr;
  }

  useEffect(() => {
    if (location.pathname === "/movies") {
      if (getFilteredArr(cards).length > 0) {
        setIsShowedButton(true);
      }
    } else {
      getFilteredArr(savedMovies);
    }
    setIsButtonClicked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, pushMore, savedMovies, isButtonClicked]);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <div className="searchForm">
        <div className="searchForm__body">
          <form className="form">
            <div className="searchForm__find-left"></div>
            <input
              onChange={handleChange}
              className="form__field"
              type="search"
              required
              minLength="2"
              name="films"
              placeholder="Фильм"
            ></input>
            <div className="form__button">
              <button
                onClick={searchHandler}
                disabled={!isValid}
                className={`form__button-img ${
                  !isValid ? "form__button-img_disabled" : ""
                }`}
              ></button>
            </div>
          </form>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            className="checkbox__input"
            id="checkbox__input"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label className="checkbox__label" htmlFor="checkbox__input">
            Короткометражки
          </label>
        </div>
      </div>
      <span className="searchForm__form_error">
        {isValid || "Нужно ввести ключевое слово"}
      </span>
      <span className={`searchForm__response-error`}>
        {responseMessage.error}
      </span>
      <hr className="horizon-line" />
    </>
  );
}

export default SearchForm;
