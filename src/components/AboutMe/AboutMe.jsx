import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutMe() {
  return (
    <section className="aboutMe" id="aboutMe">
      <SectionTitle title="Студент" />
      <div className="aboutMe__info">
        <div className="aboutMe__info_text">
          <p className="aboutMe__info_title">Дмитрий</p>
          <p className="aboutMe__info_speciality">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="aboutMe__info_par">
            Я родился в городе Коврове. Переехал в Москву, где жил, учился и
            работал в течение последних 8 лет. Последние лет 5 я в виде хобби
            осваивал программирование. И, поняв, что это то что мне нужно, взял
            курс по веб-разработке. На данный момент я активно занимаюсь поиском
            работы в данной сфере.{" "}
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
    </section>
  );
}

export default AboutMe;
