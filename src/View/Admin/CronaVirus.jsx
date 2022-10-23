import React, { Component } from "react";
import Dashboard from '../../Components/Dashboard';
class CronaVirus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      virus: []
    };
  }

  render() {
    return (
      <div>
        <h1>WELOCOME BACK ADMIN#<strong>{window.localStorage.getItem("username")}</strong></h1>
        <Dashboard />
      </div>
    );
  }
}

export default CronaVirus;
