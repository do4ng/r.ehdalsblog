import marked from "marked";
import hljs from "highlight.js";

const renderer = new marked.Renderer();
renderer.heading = function (text, level, id) {
  const v = id.toLowerCase().replaceAll(" ", "-");
  const r = `<h${level} id="${v}">${text}</h${level}>\n<hr />`;

  return r;
};
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
