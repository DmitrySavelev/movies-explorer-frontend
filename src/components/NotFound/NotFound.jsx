import "./NotFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <h1 className="notFound__code">404</h1>
      <span className="notFound__text">Страница не найдена</span>
      <a className="notFound__back" href="https://yandex.ru/search/?lr=21341">
        Назад
      </a>
    </div>
  );
}

export default NotFound;
