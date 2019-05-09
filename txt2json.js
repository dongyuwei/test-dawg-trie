const fs = require("fs");
const content = fs.readFileSync("./packed.txt", "utf-8");
const data = {
  content: content
};
fs.writeFileSync("./packed.json", JSON.stringify(data), "utf-8");
