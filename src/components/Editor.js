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
    let content = '';
    console.log(this.props);
    this.state = { content:content,minimise: false };
  }

  minimiseHandler = (event) => {
    this.setState((prevState) => ({
      minimise: !prevState.minimise,
    }));
  };

  timer;

  componentDidMount() {
    
    let content = this.props.options.mode === "xml" ? "<h1>Hey! start coding..</h1>" : "";
    console.log(this.props, "componenDidMount",content);
    this.setState({ content });
    
  }


  // debounce = (callback, timeout) => {
  //   let timer;
  //   var debounce = (e) => {
  //     c
  //   };
  //   return debounce;
  // };

  onEditorUpdate = (editor, data, value) => {
    console.log("here inside onBeforeChange");
    this.setState({ content: value });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.props.updateHandler(this.props.options, value);
    }, 1000);
  };


  render() {
    console.log(this.state);
    const minimise = this.state.minimise;
    return (
      <div className={`border editor ${minimise && "minimised"}`}>
        <div>
          {this.props.options.mode === "xml" ? "HTML" : this.props.options.mode}
          <span className="minimise-button" onClick={this.minimiseHandler}>
            {this.state.minimise ? "+" : "-"}
          </span>
        </div>
        <CodeMirror
          value={this.state.content}
          options={this.props.options}
          onBeforeChange={this.onEditorUpdate}
          onChange={(editor, data, value) => {}}
        />
      </div>
    );
  }
}
export default Editor;



