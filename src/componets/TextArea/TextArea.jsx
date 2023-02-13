import React from "react";
import ModalSubmit from "../ModalSubmit/ModalSubmit";
import ReactMarkdown from "react-markdown";
import { AboutApp } from "../AboutApp/AboutApp";

const TextArea = (props) => {
  const { content, table, btnUpdate, btnAdd, btnDelete, id } = props;
  const card = `# ${table === undefined ? "Please create note" : table}\n\n ${
    content === undefined ? "click to create" : content
  }`;

  return (
    <div>
      <ModalSubmit
        onOk={btnUpdate}
        inputID="note"
        areaID="noteContent"
        btnAdd={btnAdd}
        btnDelete={btnDelete}
        id={id}
        contentDel={content}
        tableDel={table}
      />
      <ReactMarkdown>{card}</ReactMarkdown>
      {table === undefined ? <AboutApp /> : ""}
    </div>
  );
};

export default TextArea;
