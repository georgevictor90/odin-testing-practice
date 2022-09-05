export default function reverseString(string) {
  let splitStr = string.split("");
  let reverseArr = splitStr.reverse();
  let joinArr = reverseArr.join("");
  return joinArr;
}
