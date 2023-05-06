import "./Techs.css";

function Techs() {
  return (
    <div className="techs">
      <h2 className="techs__caption">Технологии</h2>
      <hr />
      <h1 className="techs__title">7 технологий</h1>
      <p className="techs__par">
        На курсе веб-разработки мы освоили технологии, которые применили <br />{" "}
        в дипломном проекте.
      </p>
      <div className="techs__blocks">
        <div className="techs__block">
          <span className="techs__block_span">HTML</span>
        </div>
        <div className="techs__block">
          <span className="techs__block_span">CSS</span>
        </div>
        <div className="techs__block">
          <span className="techs__block_span">JS</span>
        </div>
        <div className="techs__block">
          <span className="techs__block_span">React</span>
        </div>
        <div className="techs__block">
          <span className="techs__block_span">Git</span>
        </div>
        <div className="techs__block">
          <span className="techs__block_span">Express.js</span>
        </div>
        <div className="techs__block">
          <span className="techs__block_span">mongoDB</span>
        </div>
      </div>
    </div>
  );
}

export default Techs;
