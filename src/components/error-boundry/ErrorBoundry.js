import React, { Component } from "react";
import ErrorPage from "../error-page/ErrorPage";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}
