import React from "react";
import MonacoEditor from "react-monaco-editor"; // 수정된 임포트

const MonacoEditorComponent = () => {
  const editorOptions = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
  };

  function editorDidMount(editor, monaco) {
    editor.focus();
  }

  return (
    <MonacoEditor
      height="800px" // 적절한 높이 설정
      language="javascript"
      theme="vs-dark"
      options={editorOptions}
      onChange={(newValue, e) => console.log("onChange", newValue, e)}
      editorDidMount={editorDidMount}
    />
  );
};

export default MonacoEditorComponent;
