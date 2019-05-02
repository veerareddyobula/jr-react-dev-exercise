import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { LoginPresenter } from "../presenters/login/login-presenter";
import { validateUserAuthDetails } from "./../redux-store/actions/login-container-actions";

class LoginPage extends Component {
  static getDerivedStateFromProps(props) {
    const { loginUser } = props;
    const { data } = loginUser;
    if (data && data.token) {
      props.history.push("dashboard");
    }
    return {};
  }

  state = {
    user: {
      email: "",
      password: ""
    }
  };

  onChangeHandler = (field, event) => {
    const { user } = this.state;
    user[field] = event.target.value;
    this.setState({ user });
  };

  onSubmitHandler = () => {
    const { user } = this.state;
    this.props.validateUserAuthDetails(user);
  };

  render() {
    const { user } = this.state;
    const { loginUser } = this.props;
    const { data } = loginUser;
    console.log("---- loginContainer ", this.props);
    return (
      <Fragment>
        <LoginPresenter
          user={user}
          error={data}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ loginUser }) => {
  return {
    loginUser
  };
};

export default connect(
  mapStateToProps,
  { validateUserAuthDetails }
)(LoginPage);
