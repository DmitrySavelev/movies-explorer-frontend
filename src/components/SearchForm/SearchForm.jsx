import { useEffect, useState } from "react";
import "./SearchForm.css";
import { useLocation } from "react-router-dom";
import { useValidationForm } from "../../utils/useValidationForm";
import { SHORT_MOVIE_LENGTH } from "../../utils/config";

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
  searchedMovies,
}) {
  const [isShortChecked, setIsShortChecked] = useState(
    localStorage.getItem("isShortChecked") === "true"
  );
  const { values, isValid, handleChange } = useValidationForm();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setInputValue(storedName);
    }
  }, []);

  const handleChangeSearchMovies = (e) => {
    handleChange(e);
    const value = e.target.value;
    setInputValue(value);
    localStorage.setItem("name", value);
  };

  let location = useLocation();

  const handleDuration = (movie) => {
    if (!isShortChecked) {
      return movie.duration > SHORT_MOVIE_LENGTH;
    } else {
      return movie.duration <= SHORT_MOVIE_LENGTH;
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setPushMore(0);
    setIsButtonClicked(true);
  };

  function getFilteredArr(arr, value) {
    const readyArrLocalStorage = JSON.parse(
      localStorage.getItem("readyArrLocalStorage")
    );
    // const readyArrLocalStorage = localStorage.getItem("readyArrLocalStorage");
    const filteredArr = arr.filter((movie) => {
      return (
        (movie.nameRU.toLowerCase().includes(value) ||
          movie.nameEN.toLowerCase().includes(value)) &&
        handleDuration(movie)
      );
    });
    if (filteredArr.length === 0 && readyArrLocalStorage.length > 0) {
      localStorage.setItem("readyArrLocalStorage", JSON.stringify([]));
      setSearchedMovies(readyArrLocalStorage);
    } else {
      setSearchedMovies(filteredArr);
    }
    return filteredArr;
  }

  useEffect(() => {
    if (location.pathname === "/movies") {
      if (
        getFilteredArr(cards, values.films).length > 0 ||
        getFilteredArr(cards, localStorage.getItem("name")).length > 0
      ) {
        setIsShowedButton(true);
      } else {
        setIsShowedButton(false);
      }
    } else {
      getFilteredArr(savedMovies, values.films);
    }
    setIsButtonClicked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, pushMore, isButtonClicked, savedMovies]);

  useEffect(() => {
    localStorage.setItem("isShortChecked", isShortChecked);
  }, [isShortChecked]);

  const handleCheckboxChange = (event) => {
    setIsShortChecked(event.target.checked);
  };

  return (
    <>
      <div className="searchForm">
        <div className="searchForm__body">
          <form className="form">
            <div className="searchForm__find-left"></div>
            <input
              onChange={handleChangeSearchMovies}
              className="form__field"
              type="search"
              required
              minLength="1"
              name="films"
              value={inputValue}
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
            checked={isShortChecked}
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
