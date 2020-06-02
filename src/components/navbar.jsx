import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="row navbar">
        <div className="col-2" style={{ textAlign: "left" }}>
          Total Users using: 2000
        </div>
        <div className="col">
          <h3>
            <span role="img"> 📻 </span>
            WebPod
          </h3>
        </div>
        <div className="col-2" style={{ textAlign: "right" }}>
          <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Navbar;
