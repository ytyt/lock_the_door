import { connect } from "react-redux";
import Auth from "../components/Auth";
import { logIn } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    doLogin() {
      dispatch(logIn());
    }
  };
};

const AuthContainer = connect(
  null,
  mapDispatchToProps
)(Auth);

export default AuthContainer;
