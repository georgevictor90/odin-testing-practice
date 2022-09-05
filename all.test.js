import capitalize from "./capitalize";
import reverseString from "./reverseString";
import calculator from "./calculator";
import caesarCipher from './caesarCipher';

test("Capitalize a string", () => {
  expect(capitalize("hello world")).toBe("Hello world");
  expect(capitalize("abracadabra")).toBe("Abracadabra")
});

test("Reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("orange")).toBe("egnaro");
  expect(reverseString("Hello")).toBe("olleH");
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});

test("Calculator addition", () => {
  expect(calculator.add(2,3)).toEqual(5);
  expect(calculator.add(4,5)).toEqual(9);  
  expect(calculator.add(-2,3)).toEqual(1);
})

test("Calculator subtraction", () => {
  expect(calculator.subtract(5,2)).toEqual(3)
  expect(calculator.subtract(3,2)).toEqual(1)
  expect(calculator.subtract(-5,2)).toEqual(-7)
  expect(calculator.subtract(-5,-5)).toEqual(0)
})

test("Calculator division", () => {
  expect(calculator.divide(1,1)).toEqual(1)
  expect(calculator.divide(4,2)).toEqual(2)
  expect(calculator.divide(4,0)).toEqual(Infinity)
  expect(calculator.divide(-4,2)).toEqual(-2)
  expect(calculator.divide(4,-2)).toEqual(-2)
  expect(calculator.divide(-4,-2)).toEqual(2)
  expect(calculator.divide(9.9,3.3)).toEqual(3)
})

test("Calculator multiplication", () => {
  expect(calculator.multiply(1,1)).toEqual(1)
  expect(calculator.multiply(4,2)).toEqual(8)
  expect(calculator.multiply(4,0)).toEqual(0)
  expect(calculator.multiply(-4,2)).toEqual(-8)
  expect(calculator.multiply(4,-2)).toEqual(-8)
  expect(calculator.multiply(-4,-2)).toEqual(8)
})

test("Caesar Cipher", () => {
  expect(caesarCipher("a",2)).toBe("c");
  expect(caesarCipher("z",4)).toBe("d");
  expect(caesarCipher("hello", 12)).toBe("tqxxa");
  expect(caesarCipher("hello friend", 12)).toBe("tqxxa rduqzp");
  expect(caesarCipher("H", 12)).toBe("T");
  expect(caesarCipher("Hello Friend", 12)).toBe("Tqxxa Rduqzp");
  expect(caesarCipher("bonjour", -1)).toBe("anmintq");
  expect(caesarCipher("bonjour", -3)).toBe("ylkglro");
  expect(caesarCipher("BONJOUR", -3)).toBe("YLKGLRO")
} )