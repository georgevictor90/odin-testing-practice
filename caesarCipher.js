const uppperLetters = [...Array(26)].map((val, i) =>
  String.fromCharCode(i + 65)
);
const lowerLetters = [...Array(26)].map((val, i) =>
  String.fromCharCode(i + 97)
);

function checkType(letter) {
  let type = {};
  if (uppperLetters.includes(letter)) {
    type.name = "uppercase";
    type.minCharCode = 65;
    type.maxCharCode = 90;
  } else if (lowerLetters.includes(letter)) {
    type.name = "lowercase";
    type.minCharCode = 97;
    type.maxCharCode = 122;
  } else {
    type.name = "other";
  }
  return type;
}

function shiftChar(type, asciiNum, key, solved) {
  if (type.name === "other") return (solved += String.fromCharCode(asciiNum));
  if (
    asciiNum + key >= type.minCharCode &&
    asciiNum + key <= type.maxCharCode
  ) {
    solved += String.fromCharCode(asciiNum + key);
  } else if (asciiNum + key > type.maxCharCode) {
    let diff = asciiNum + key - type.maxCharCode;
    let code = type.minCharCode - 1 + diff;
    solved += String.fromCharCode(code);
  } else {
    let code = type.maxCharCode + 1 + (key + (asciiNum - type.minCharCode));
    solved += String.fromCharCode(code);
  }
  return solved;
}

export default function caesarCipher(string, key) {
  if (!string) throw new Error("Please provide a string to encrypt");
  if (!key) return string;
  if (key < -25 || key > 25)
    throw new Error("Please provide a key between -25 and 25");
  let solved = "";
  for (let i = 0; i < string.length; i++) {
    let asciiNum = string[i].charCodeAt();
    let type = checkType(string[i]);
    solved = shiftChar(type, asciiNum, key, solved);
  }
  return solved;
}
