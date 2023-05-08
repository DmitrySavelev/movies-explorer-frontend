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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            sint amet optio harum cupiditate nostrum quis sequi laborum, fugiat
            necessitatibus explicabo consequuntur molestiae pariatur ipsa,
            doloremque sed assumenda ab reiciendis eos incidunt! Maiores quidem
            dolore, non a nisi laudantium quaerat eaque
          </p>
          <a
            className="aboutMe__info_link"
            href="https://github.com/DmitrySavelev/movies-explorer-frontend"
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
