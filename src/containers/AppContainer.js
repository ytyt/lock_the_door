import { connect } from "react-redux";
import App from "../components/App";

const mapStateToProps = (state, action) => {
  return {
    uid: state.auth.uid,
    loading: state.loading.loading
  };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
