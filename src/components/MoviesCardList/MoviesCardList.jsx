import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const movies = [
  {
    _id: 1,
    src: "https://i.parket-sale.ru/i/a/a/oboi-komar-goroda-i-megapolisi-xxl4-008-times-square-1.jpg",
    name: "33 слова",
    time: "1ч25м",
  },
  {
    _id: 2,
    src: "https://img1.goodfon.ru/original/2048x1371/7/12/chikago-illinois-gorod-ulica-1993.jpg",
    name: "33 коровы",
    time: "1ч42м",
  },
  {
    _id: 3,
    src: "https://mobimg.b-cdn.net/v3/fetch/db/db788c5c751883bcda4058c4f2d89815.jpeg",
    name: "33 богатыря",
    time: "3ч11м",
  },
  {
    _id: 1,
    src: "https://i.parket-sale.ru/i/a/a/oboi-komar-goroda-i-megapolisi-xxl4-008-times-square-1.jpg",
    name: "33 слова",
    time: "1ч25м",
  },

  {
    _id: 1,
    src: "https://i.parket-sale.ru/i/a/a/oboi-komar-goroda-i-megapolisi-xxl4-008-times-square-1.jpg",
    name: "33 слова",
    time: "1ч25м",
  },
  {
    _id: 2,
    src: "https://img1.goodfon.ru/original/2048x1371/7/12/chikago-illinois-gorod-ulica-1993.jpg",
    name: "33 коровы",
    time: "1ч42м",
  },
  {
    _id: 3,
    src: "https://mobimg.b-cdn.net/v3/fetch/db/db788c5c751883bcda4058c4f2d89815.jpeg",
    name: "33 богатыря",
    time: "3ч11м",
  },
  {
    _id: 1,
    src: "https://i.parket-sale.ru/i/a/a/oboi-komar-goroda-i-megapolisi-xxl4-008-times-square-1.jpg",
    name: "33 слова",
    time: "1ч25м",
  },
  {
    _id: 2,
    src: "https://img1.goodfon.ru/original/2048x1371/7/12/chikago-illinois-gorod-ulica-1993.jpg",
    name: "33 коровы",
    time: "1ч42м",
  },
  {
    _id: 3,
    src: "https://mobimg.b-cdn.net/v3/fetch/db/db788c5c751883bcda4058c4f2d89815.jpeg",
    name: "33 богатыря",
    time: "3ч11м",
  },
  {
    _id: 1,
    src: "https://i.parket-sale.ru/i/a/a/oboi-komar-goroda-i-megapolisi-xxl4-008-times-square-1.jpg",
    name: "33 слова",
    time: "1ч25м",
  },
  {
    _id: 2,
    src: "https://img1.goodfon.ru/original/2048x1371/7/12/chikago-illinois-gorod-ulica-1993.jpg",
    name: "33 коровы",
    time: "1ч42м",
  },
  {
    _id: 3,
    src: "https://mobimg.b-cdn.net/v3/fetch/db/db788c5c751883bcda4058c4f2d89815.jpeg",
    name: "33 богатыря",
    time: "3ч11м",
  },
  {
    _id: 1,
    src: "https://i.parket-sale.ru/i/a/a/oboi-komar-goroda-i-megapolisi-xxl4-008-times-square-1.jpg",
    name: "33 слова",
    time: "1ч25м",
  },
  {
    _id: 2,
    src: "https://img1.goodfon.ru/original/2048x1371/7/12/chikago-illinois-gorod-ulica-1993.jpg",
    name: "33 коровы",
    time: "1ч42м",
  },
  {
    _id: 3,
    src: "https://mobimg.b-cdn.net/v3/fetch/db/db788c5c751883bcda4058c4f2d89815.jpeg",
    name: "33 богатыря",
    time: "3ч11м",
  },
];

const moviesList = movies.map((movie) => (
  <li key={movie._id}>
    <MoviesCard name={movie.name} time={movie.time} src={movie.src} />
  </li>
));

function MoviesCardList() {
  return (
    <div className="moviesCardList">
      <ul className="movies__list">{moviesList}</ul>
      <div className="moviesCardList__more">Ещё</div>
    </div>
  );
}

export default MoviesCardList;
