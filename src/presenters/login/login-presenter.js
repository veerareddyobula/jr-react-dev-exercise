import React from "react";
import "./login-presenter.css";

export const LoginPresenter = ({
  user,
  error,
  onChangeHandler,
  onSubmitHandler
}) => {
  return (
    <div className="container pull-middle">
      <div className="card">
        <div className="card-header">
          <div className="card-title">Login</div>
        </div>
        <div className="card-body">
          {error && error.errorCode === 403 ? (
            <div className="alert alert-danger" role="alert">
              {error.message}
            </div>
          ) : (
            ""
          )}
          <form id="loginPresenterForm">
            <label className="label">Email</label>
            <input
              type="text"
              className="form-control"
              value={user.email}
              onChange={event => onChangeHandler("email", event)}
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="form-control"
              value={user.password}
              onChange={event => onChangeHandler("password", event)}
            />
            <div className="actionBtns m-2">
              <button className="btn btn-primary" onClick={onSubmitHandler}>
                Sing In
              </button>
              <button className="btn btn-danger">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
