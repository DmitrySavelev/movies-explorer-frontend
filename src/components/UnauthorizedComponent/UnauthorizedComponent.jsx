import { Navigate } from "react-router-dom";

const UnauthorizedComponent = (props) => {
  return !props.loggedIn ? (
    props.component
  ) : (
    <Navigate to={props.pathToRedirect} />
  );
};

export default UnauthorizedComponent;
