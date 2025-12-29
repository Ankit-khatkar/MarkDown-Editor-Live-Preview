import { useState, useEffect } from "react";
import "./preview.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function Preview(props) {
  const preview = props.preview;
  return (
    <>
      <div id="preview-content" className="preview-conatiner">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{preview}</ReactMarkdown>
      </div>
    </>
  );
}
