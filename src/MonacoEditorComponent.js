import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function MonacoEditorComponent() {
  const [language, setLanguage] = useState("javascript"); // 기본 언어를 자바스크립트로 설정

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value); // 선택된 언어로 상태 업데이트
  };

  return (
    <div>
      <select
        onChange={handleLanguageChange}
        value={language}
        style={{ marginBottom: "10px" }}
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="css">CSS</option>
        <option value="html">HTML</option>
        <option value="java">Java</option>
        <option value="typescript">TypeScript</option>
        <option value="json">JSON</option>
      </select>
      <Editor
        height="90vh"
        language={language}
        defaultValue="// Type your code here"
        theme="vs-dark"
      />
    </div>
  );
}

export default MonacoEditorComponent;
