import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import Editor from "./components/Editor";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      html: '',
      style: '',
      script: '',
      doc:'srcDoc'
    }
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

  render() {
    let options = {
      lineNumbers: true,
      theme: 'material',
    };


    let javascriptOp = { ...options, mode: 'javascript' }
    let htmlOp = { ...options, mode: 'xml' };
    let cssOp = { ...options, mode: "text/css" };
    return (
      <div className="App">
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
