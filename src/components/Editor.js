import React from 'react';
import { Controlled as CodeMirror } from "react-codemirror2";
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/css/css.js");
require("codemirror/mode/javascript/javascript.js");



class Editor extends React.Component {
  constructor() {
    super();
    console.log("setting state");
    this.state = { value: "hello" };
  }
  render() {
    console.log(this.state);
    return (
      <div className="border editor">
        <div>
          {this.props.options.mode}
          <span className="minimise-button">X</span>
        </div>
        <CodeMirror
          value={this.state.value}
          options={this.props.options}
          onBeforeChange={(editor, data, value) => {
            this.setState({ value });
          }}
          onChange={(editor, data, value) => {}}
        />
      </div>
    );
  }
}
export default Editor;



