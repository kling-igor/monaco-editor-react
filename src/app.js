import React, { PureComponent } from "react";
import styled, { createGlobalStyle } from "styled-components";
import dedent from "dedent";
import MonacoEditor from "react-monaco-editor";

const GlobalStyle = createGlobalStyle`
  body {
    @import url(https://fonts.googleapis.com/css?family=Quicksand:300,400,700);
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    color: black;
    height: 100%;
    margin: 0;
    overflow: hidden !important;
  }

  #app {
    min-height: 100%;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`;

export default class App extends PureComponent {
  state = {
    code: dedent`
      console.log("Hello World!!!")
    `
  };

  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log("onChange", newValue, e);
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };

    return (
      <>
        <GlobalStyle />
        <MonacoEditor
          width="100%"
          height="100%"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </>
    );
  }
}
