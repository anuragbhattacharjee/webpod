import React, { Component } from "react";

class Navbar extends Component {
  navbarStyle = {
    margin: "auto",
  };
  render() {
    return (
      <div className="navbar" style={this.navbarStyle}>
        {/* <div className="col-2" style={{ textAlign: "left" }}>
          Total Users using: 2000
        </div> */}
        <h3 style={{ margin: "10px" }}>
          <span role="img"> 📻 </span>
          WebPod
        </h3>

        {/* <div className="col-2" style={{ textAlign: "right" }}>
          <i className="fab fa-user-circle-o fa-2x" aria-hidden="true"></i>
        </div> */}
      </div>
    );
  }
}

export default Navbar;
