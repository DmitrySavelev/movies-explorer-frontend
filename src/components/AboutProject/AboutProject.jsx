import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <hr />
      <div className="aboutProject__wrapper-text">
        <div>
          <span className="aboutProject__wrapper-text_span">
            Дипломный проект включал 5 этапов
          </span>
          <p className="aboutProject__wrapper-text_par">
            Составление плана, работу над бэкендом, верстку, добавление
            функциональности и финальные доработки
          </p>
        </div>
        <div>
          <span className="aboutProject__wrapper-text_span">
            На выполнение диплома ушло 5 недель
          </span>
          <p className="aboutProject__wrapper-text_par">
            У каждого этапа был мягкий и жесткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься
          </p>
        </div>
      </div>
      <div className="aboutProject__schema">
        <div className="aboutProject__backend_diagram">
          <span>1 неделя</span>
        </div>
        <div className="aboutProject__frontend_diagram">
          <span>4 недели</span>
        </div>
      </div>
      <div className="aboutProject__schema">
        <div className="aboutProject__backend_text">Back-end</div>
        <div className="aboutProject__frontend_text">Front-end</div>
      </div>
    </div>
  );
}

export default AboutProject;
