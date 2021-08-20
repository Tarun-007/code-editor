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
    this.state = {minimise:false };
  }

  minimiseHandler = (event)=> {
    this.setState(prevState => ({
      minimise: !prevState.minimise
    }));
  }

  render() {
    console.log(this.state);
    const minimise = this.state.minimise;
    return (
      <div className={`border editor ${minimise && 'minimised'}`}>
        <div>
          {this.props.options.mode}
          <span className="minimise-button" onClick={this.minimiseHandler}>
            X
          </span>
        </div>
        <CodeMirror
          value={this.props.content}
          options={this.props.options}
          onBeforeChange={(editor, data, value) => {
            console.log("here inside onBeforeChange");
            this.props.updateHandler(this.props.options, value);
          }}
          onChange={(editor, data, value) => {}}
        />
      </div>
    );
  }
}
export default Editor;



