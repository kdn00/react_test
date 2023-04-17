import React, { Component } from "react";
import datatype from "prop-types";

class Props extends Component {
  render() {
    // props 17 예제
    let props_value = this.props.props_value;
    props_value += "from App.js";

    // props 자료형 18 예제
    let { String, Number, Boolean, Array, ObjectJson, Function } = this.props;

    return (
      <>
        {/* props 17 예제
            <div> {props_value} </div> */}

        <div style={{ padding: "0px" }}>
          <p>StringProps : {String}</p>
          <p>NumberProps : {Number}</p>
          <p>BooleanProps : {Boolean.toString()}</p>
          <p>ArrayProps : {Array.toString()}</p>
          <p>Object JsonProps : {JSON.stringify(ObjectJson)}</p>
          <p>FunctionProps : {Function}</p>
        </div>
      </>
    )
  }
}

export default Props;
