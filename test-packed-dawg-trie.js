const PTrie = require("dawg-lookup/lib/ptrie").PTrie;
const fs = require("fs");

console.time("time2");
const packed = fs.readFileSync("./packed.txt", "utf-8");
console.timeEnd("time2");

console.time("time3");
const ptrie = new PTrie(packed);
console.timeEnd("time3");

console.time("time4");
console.log(ptrie.isWord("test"));
console.log(ptrie.isWord("testhahahah"));

console.log(ptrie.completions("pref"));
console.log(process.pid, process.memoryUsage());

console.timeEnd("time4");
