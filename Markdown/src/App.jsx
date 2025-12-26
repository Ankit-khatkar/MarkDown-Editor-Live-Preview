import { useState } from "react";
import "./App.css";
import MarkDown from "./components/markdown";
import Preview from "./components/preview";
import Header from "./components/header";
function App() {
  return (
    <>
      <Header />

      <div className="main-window">
        <MarkDown />
      </div>
    </>
  );
}

export default App;
