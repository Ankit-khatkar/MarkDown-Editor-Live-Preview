import { useState } from "react";
import "./App.css";
import MarkDown from "./components/markdown";
import Header from "./components/header";

const STORAGE_KEY = "markdown-content";

const initialMarkdown = `

# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b
  * Item 3a
  * Item 3b

### Ordered

1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b

## Images

![This is an alt text.](/image/sample.webp "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns | Right columns |
| ------------ | :-----------: |
| left foo     | right foo     |
| left bar     | right bar     |
| left baz     | right baz     |

## Blocks of code

~~~
let message = 'Hello world';
alert(message);
~~~

## Inline code

This web site is using \`markedjs/marked\`.
`;

function getInitialMarkdown() {
  if (typeof window === "undefined") {
    return initialMarkdown;
  }
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved ?? initialMarkdown;
}

function App() {
  const [markdown, setMarkdown] = useState(getInitialMarkdown);

  const handleMarkdownChange = (value) => {
    setMarkdown(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (error) {
      console.error("Failed to save markdown to localStorage", error);
    }
  };

  const handleCopyMarkdown = async () => {
    if (!markdown) {
      return;
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(markdown);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = markdown;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
    } catch (error) {
      console.error("Failed to copy markdown to clipboard", error);
    }
  };

  const handleOpenReadme = () => {
    const url =
      "https://github.com/Ankit-khatkar/MarkDown-Editor-Live-Preview#readme";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleExportHtml = () => {
    const previewElement = document.getElementById("preview-content");
    if (!previewElement) return;

    const htmlContent = previewElement.innerHTML;
    const fullHtml = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Markdown Preview</title>
  </head>
  <body>
    ${htmlContent}
  </body>
</html>`;

    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "markdown-preview.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Header
        onOpenReadme={handleOpenReadme}
        onExportHtml={handleExportHtml}
        onCopy={handleCopyMarkdown}
      />
      <div className="main-window">
        <MarkDown markdown={markdown} onChange={handleMarkdownChange} />
      </div>
    </>
  );
}

export default App;
