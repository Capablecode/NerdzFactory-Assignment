alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const reverse = (alpha) => {
  rIndex = 25 - alphabet.indexOf(alpha);
  return alphabet[rIndex];
};
function reverseWord(word) {
  wordOutput = "";
  for (const element of word) {
    if (alphabet.includes(element)) {
      wordOutput += reverse(element);
    } else wordOutput += element;
  }
  return wordOutput;
}

let output = reverseWord("how are you");
const decode = output
  .split("")
  .map((c) => alphabet[25 - alphabet.indexOf(c)])
  .join(" ");
console.log("This is the encode string => " + output);
console.log("This is the decode string => " + decode);
