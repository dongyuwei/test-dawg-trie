const PTrie = require("dawg-lookup/lib/ptrie").PTrie;
const fs = require("fs");
const words = require("./google_227800_words.json");

console.time("time2");
const packed = fs.readFileSync("./packed.txt", "utf-8");
console.timeEnd("time2");

console.time("time3");
const ptrie = new PTrie(packed);
console.timeEnd("time3");

console.time("time4");
console.log(ptrie.isWord("test"));
console.log(ptrie.isWord("testhahahah"));
const completions = ptrie.completions("pref").slice(0, 50);
completions.sort((a, b) => {
  return words[b] - words[a];
});
console.log(completions);
console.log(process.pid, process.memoryUsage());

console.timeEnd("time4");
