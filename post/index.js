import * as fs from "fs";
import { posts } from "./config.js";
import * as path from "path";
posts.forEach((element) => {
  element["content"] = fs
    .readFileSync(path.join(`./lib/${element.url}.md`))
    .toString();
});
fs.writeFileSync(path.join("../src/data/posts.json"), JSON.stringify(posts));
