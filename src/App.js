import React, { Component } from "react";
import Quiz from "./containers/Quiz/Quiz";
import { Routes, Route } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Logout from "./components/Logout/Logout";
import Layout from "./hoc/Layout/Layout";
import { connect } from "react-redux";
import withRouter from "./hoc/withRouter/withRouter";
import { autoLogin } from "./store/actions/auth";

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    let routes = (
      <Routes>
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/quiz/:id" exact element={<Quiz {...this.props} />} />
        <Route path="/" exact element={<QuizList />} />
        <Route path="*" exact element={<QuizList />} />
      </Routes>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Routes>
          <Route path="/quiz-creator" exact element={<QuizCreator />} />
          <Route path="/quiz/:id" exact element={<Quiz {...this.props} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" exact element={<QuizList />} />
          <Route path="*" exact element={<QuizList />} />
        </Routes>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
