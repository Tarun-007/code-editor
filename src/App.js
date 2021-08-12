import logo from "./logo.svg";
import "./App.css";
import Editor from "./components/Editor";

function App() {
  let options = {
    lineNumbers: true,
    theme: 'material',
  }
  let javascript = { ...options, mode: 'javascript' }
  let html = { ...options, mode: 'xml' };
  let css = { ...options, mode: "text/css" };
  return (
    <div className="App">
      <div className="top-pane border">
        <Editor options= {html}/*HTML code editor*/ />
        <Editor options = {css}/*CSS code editor*/ />
        <Editor options = {javascript}/*JS code editor*/ />
      </div>
      <div className="bottom-pane border">
        <iframe
          title="myCode"
          className="iframe"
          /*Title option*/
          /*sandbox option*/
          /*frameBorder option*/
          /*width-height option*/
          /*Title option*/
        ></iframe>
      </div>
    </div>
  );
}

export default App;
