console.time("time1");
const Trie = require("node-ternary-search-trie");
const fs = require("fs");
console.timeEnd("time1"); //2.260ms

console.time("time2");
const words = require("./google_227800_words.json");
console.timeEnd("time2"); //166.626ms

console.time("time3");
const trie = new Trie();
for (const key in words) {
  trie.set(key, words[key]);
}
console.timeEnd("time3"); //472.051ms

console.time("time4");
console.log("keysWithPrefix pref", trie.keysWithPrefix("pref"));
console.timeEnd("time4"); //2.639ms
