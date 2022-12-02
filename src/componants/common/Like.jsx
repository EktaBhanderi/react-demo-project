import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckSquare, faheart } from "@fortawesome/fontawesome-free-solid";
import FontAwesome from "react-fontawesome";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.ekta) classes += "-o";
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
