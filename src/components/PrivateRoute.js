import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ user, loading, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        loading
          ? () => <div>loading</div>
          : user
          ? render
          : () => <Redirect to={{ pathname: "/auth" }} />
      }
    />
  );
};

// https://qiita.com/jun68ykt/items/541cc8247900e126ac5b
// ログアウトしても変化がない
// ログイン後に自動で/に遷移しない

export default PrivateRoute;
