import marked from "marked";
import hljs from "highlight.js";

const renderer = new marked.Renderer();
renderer.heading = function (text, level, id) {
  const v = id.toLowerCase().replaceAll(" ", "-");
  let r = `<h${level} id="${v}">${text}</h${level}>`;

  if (Number(level) === 1 || Number(level) === 2) {
    r = `${r}\n<hr />`;
  }

  return r;
};
renderer.link = function (href, title, text) {
  var link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace("<a", "<a target='_blank' ");
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
