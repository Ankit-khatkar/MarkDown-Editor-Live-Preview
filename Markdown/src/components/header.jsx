import "./header.css";
import Preview from "./preview";

export default function Header() {
  return (
    <>
      <div className="header">
        <button className="btn">README</button>
        <button className="btn">HTML</button>
        <button className="btn">
          <a
            href="https://github.com/Ankit-khatkar/MarkDown-Editor-Live-Preview.git"
            target="blank"
          >
            GitHub
          </a>
        </button>
        <button className="btn">Copy</button>
      </div>
    </>
  );
}
