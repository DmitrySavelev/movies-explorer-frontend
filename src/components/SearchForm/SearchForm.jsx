import { useEffect, useState } from "react";
import "./SearchForm.css";
import { useLocation } from "react-router-dom";

function SearchForm({
  cards,
  setSearchedMovies,
  isButtonClicked,
  setIsButtonClicked,
  searchedMovies,
  savedMovies,
  pushMore,
  setPushMore,
  setIsShowedButton,
  isShowedButton,
}) {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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

  // function filteredArr(arr) {
  //   arr.filter((movie) => {
  //     return (
  //       (movie.nameRU.toLowerCase().includes(inputValue) ||
  //         movie.nameEN.toLowerCase().includes(inputValue)) &&
  //       handleDuration(movie)
  //     );
  //   });
  // }

  useEffect(() => {
    if (location.pathname === "/movies") {
      const filteredArr = cards.filter((movie) => {
        return (
          (movie.nameRU.toLowerCase().includes(inputValue) ||
            movie.nameEN.toLowerCase().includes(inputValue)) &&
          handleDuration(movie)
        );
      });
      if (filteredArr.length > 0) {
        setIsShowedButton(true);
      }
      setSearchedMovies(filteredArr);
    } else {
      const filtered = savedMovies.filter((movie) => {
        return (
          (movie.nameRU.toLowerCase().includes(inputValue) ||
            movie.nameEN.toLowerCase().includes(inputValue)) &&
          handleDuration(movie)
        );
      });
      setSearchedMovies(filtered);
    }
    setIsButtonClicked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, pushMore, savedMovies, isButtonClicked]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

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
              onChange={handleInputChange}
              className="form__field"
              type="search"
              required
              name="films"
              placeholder="Фильм"
            ></input>
            <div className="form__button">
              <button
                onClick={searchHandler}
                className="form__button-img"
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
      <hr className="horizon-line" />
    </>
  );
}

export default SearchForm;
