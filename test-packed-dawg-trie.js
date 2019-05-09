const PTrie = require("dawg-lookup/lib/ptrie").PTrie;
const fs = require("fs");
const words = require("./words_with_frequency_and_translation_and_ipa.json");

console.time("time2");
const packed = fs.readFileSync("./packed.txt", "utf-8");
// read packed from txt is faster than json, about 3~4ms
// const packed = require("./packed.json").content;
console.timeEnd("time2");

console.time("time3");
const ptrie = new PTrie(packed);
console.timeEnd("time3");

console.time("time4");
console.log(ptrie.isWord("test"));
console.log(ptrie.isWord("testhahahah"));
const completions = ptrie
  .completions("pre")
  .sort((a, b) => {
    return words[b].frequency - words[a].frequency;
  })
  .slice(0, 50);
console.log(completions);
console.log(process.pid, process.memoryUsage());
console.log(words[completions[0]]);

console.timeEnd("time4");
