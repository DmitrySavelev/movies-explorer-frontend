import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutMe() {
  return (
    <div className="aboutMe" id="aboutMe">
      <SectionTitle title="Студент" />
      <div className="aboutMe__info">
        <div className="aboutMe__info_text">
          <h1 className="aboutMe__info_title">Дмитрий</h1>
          <h2 className="aboutMe__info_speciality">
            Фронтенд-разработчик, 30 лет
          </h2>
          <p className="aboutMe__info_par">
            Я родился в городе Коврове (Владимирская область) переехал в Москву,
            где жил, учился и работал последние 8 лет. Я увлекаюсь разными
            активностями. В разное время это могут быть бег, танцы, актерские
            курсы. Последние лет 5 я в виде хобби осваивал программирование. И,
            поняв, что это то что мне нужно, взял курс по веб-разработке. На
            данный момент я активно занимаюсь поиском работы в данной сфере.{" "}
          </p>
          <a
            className="aboutMe__info_link"
            href="https://github.com/DmitrySavelev/movies-explorer-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="aboutMe__photo"></div>
      </div>
    </div>
  );
}

export default AboutMe;
