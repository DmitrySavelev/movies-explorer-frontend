import "./More.css";
function More({ countCardsAddMore, pushMore, setPushMore }) {
  function handleClickMore() {
    setPushMore(pushMore + countCardsAddMore);
  }

  return (
    <div className="more" onClick={handleClickMore}>
      Ещё
    </div>
  );
}

export default More;
