import { connect } from "react-redux";
import Main from "../components/Main";
import { addRecordRequest, logOut } from "../actions";

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user,
    record: state.record
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doLogout() {
      dispatch(logOut());
    },
    addRecord(user) {
      dispatch(addRecordRequest(user));
    }
  };
};

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer;
