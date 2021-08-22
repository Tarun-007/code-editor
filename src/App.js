import "./App.css";
import React from 'react';
import Editor from "./components/Editor";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      html: "<h1>Hey! start coding..</h1>",
      style: "",
      script: "",
      doc: "<h1>Hey! start coding..</h1>",
    };
  }

  updateDoc = () => {
    const { html, style, script } = this.state;
    const srcDoc = `
    <!DOCTYPE html>
    <html>
        <body>${html}</body>
        <style>${style}</style>
        <script>${script}</script>
    </html>`;
    this.setState({ doc: srcDoc });
  }

  updateContent = (options, content) => {
    console.log("here in updateContent method",options,content)
    switch (options.mode) {
      case 'javascript': {
        this.setState({ script: content });
        break;
      }
      case 'text/css': {
        this.setState({ style: content });
        break;
      }
      case 'xml': {
        this.setState({ html: content });
        break;
      }
      default:
        return;
    }
    this.updateDoc();

  }

  timeout

  debounce = (text) => {
    clearTimeout(this.timeout);
    setTimeout(()=>{return text },2000)
  }

  reset = ()=> {
    var state = {
      html: "",
      style: "",
      script: "",
      doc: "<h1>Hey! start coding..</h1>",
    };
    console.log("setting state",state,this);
    this.setState(state);
  }

  render() {
    let options = {
      lineNumbers: true,
      theme: 'material',
    };

    console.log("state while rendering app.js",this.state);


    let javascriptOp = { ...options, mode: 'javascript' }
    let htmlOp = { ...options, mode: 'xml' };
    let cssOp = { ...options, mode: "text/css" };
    return (
      <div className="App">
        <nav>
          <h1>Code Editor</h1>
          <button type="button" className="reset" onClick={this.reset}>
            Reset
          </button>
        </nav>

        <div className="top-pane border">
          <Editor
            options={htmlOp}
            content={this.state.html}
            updateHandler={this.updateContent}
          />
          <Editor
            options={cssOp}
            content={this.state.style}
            updateHandler={this.updateContent}
          />
          <Editor
            options={javascriptOp}
            content={this.state.script}
            updateHandler={this.updateContent}
          />
        </div>
        <div className="bottom-pane border">
          <iframe
            title="myCode"
            className="iframe"
            srcDoc={this.state.doc}
          ></iframe>
        </div>
      </div>
    );
  }
}

export default App;
