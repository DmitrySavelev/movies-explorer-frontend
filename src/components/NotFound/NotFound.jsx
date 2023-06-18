import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="notFound">
      <h1 className="notFound__code">404</h1>
      <span className="notFound__text">Страница не найдена</span>
      <button className="notFound__back" onClick={goBack}>
        Назад
      </button>
    </section>
  );
}

export default NotFound;
