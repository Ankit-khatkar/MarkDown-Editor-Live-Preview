import "./markdown.css";
import Preview from "./preview";
export default function MarkDown({ markdown, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <>
      <textarea
        onChange={handleChange}
        className="markdown-container"
        value={markdown}
      ></textarea>
      <Preview preview={markdown} />
    </>
  );
}
