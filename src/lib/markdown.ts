import marked from "marked";
import hljs from "highlight.js";

const renderer = new marked.Renderer();

marked.setOptions({
  langPrefix: "hljs language-",
  renderer: renderer,
  xhtml: true,
  highlight: function (code) {
    return hljs.highlightAuto(code, [
      "html",
      "javascript",
      "css",
      "python",
      "bash",
      "c",
      "json",
      "markdown",
      "typescript",
      "jsx",
      "tsx",
      "js",
      "ts",
      "md",
      "svelte",
      "scss",
    ]).value;
  },
});

export default function Marked(content: string): string {
  return marked(content, { sanitize: true });
}
