import "./header.css";
import Preview from "./preview";

export default function Header() {
  return (
    <>
      <div className="header">
        <button className="btn">README</button>
        <button className="btn">HTML</button>
        <button className="btn">GitHub</button>
        <button className="btn">Copy</button>
      </div>
    </>
  );
}
