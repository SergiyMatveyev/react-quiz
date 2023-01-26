import React, { Component } from "react";
import { logout } from "../../store/actions/auth";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Navigate to={"/"} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  };
}

export default connect(null, mapDispatchToProps)(Logout);
