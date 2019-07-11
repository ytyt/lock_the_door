import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import MainContainer from "../containers/MainContainer";
import AuthContainer from "../containers/AuthContainer";
import PrivateRoute from "./PrivateRoute";
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import { history } from "../store/configureStore";
import { colors } from "../themes";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div css={style}>
          <Router history={history}>
            <Switch>
              <PrivateRoute
                exact
                path="/"
                user={this.props.uid}
                loading={this.props.loading}
                render={props => <MainContainer {...props} />}
              />
              <Route exact path="/auth" component={AuthContainer} />
            </Switch>
          </Router>
        </div>
        <Global
          styles={{
            html: {
              fontSize: "14px"
            },
            body: {
              margin: 0,
              padding: 0
            }
          }}
        />
      </React.Fragment>
    );
  }
}

const style = css`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    135deg,
    ${colors.main} 0%,
    ${colors.mainLight} 100%
  );
`;
