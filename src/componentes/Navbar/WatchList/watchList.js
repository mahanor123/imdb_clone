import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class WatchList extends React.Component {
  state = {
    WatchList: WatchList,
    redirect: true
  };
  render() {
    // const { redirect } = this.state;
    // if (redirect) {
    //   return (
    //     <Redirect to={{ pathname: "/signin", state: { from: "/watchList" } }} />
    //   );
    // }
    return <h1>Empty:P</h1>;
  }
}

export default WatchList;
