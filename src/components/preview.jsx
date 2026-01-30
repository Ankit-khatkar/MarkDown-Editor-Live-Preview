import { useState, useEffect } from "react";
import "./preview.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function Preview({ preview }) {
  return (
    <>
      <div id="preview-content" className="preview-container">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{preview}</ReactMarkdown>
      </div>
    </>
  );
}
