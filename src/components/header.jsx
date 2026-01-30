import "./header.css";

export default function Header({ onOpenReadme, onExportHtml, onCopy }) {
  return (
    <>
      <div className="header">
        <button className="btn" onClick={onOpenReadme}>
          README
        </button>
        <button className="btn" onClick={onExportHtml}>
          HTML
        </button>
        <a
          className="btn"
          href="https://github.com/Ankit-khatkar/MarkDown-Editor-Live-Preview.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <button className="btn" onClick={onCopy}>
          Copy
        </button>
      </div>
    </>
  );
}
