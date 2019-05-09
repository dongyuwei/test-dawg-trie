const Trie = require("dawg-lookup").Trie;
const fs = require("fs");

console.time("time1");

const words = require("./words_with_frequency_and_translation_and_ipa.json");
console.timeEnd("time1");

const trie = new Trie(Object.keys(words).join(" "));
console.time("time2");

const packed = trie.pack();
console.timeEnd("time2");
fs.writeFileSync("packed.txt", packed, "utf-8");

console.time("time3");
console.log(trie.isWord("test"));
console.log(process.memoryUsage());
console.log(trie.isWord("testhahahah"));
