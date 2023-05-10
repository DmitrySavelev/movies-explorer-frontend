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
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
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
