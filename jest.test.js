import { 
  capitalize,
  reverseString, 
  calculator, 
  caesarCipher, 
  analyzeArray 
} from "./jestProject";

test('First letter is capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('String is reversed', () => {
  expect(reverseString('car')).toBe('rac');
});

test('Addition works', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('Subtraction works', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('Division works', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test('Multiplication works', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('Cipher works', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd')
})

test('Punctuation Remains!', () => {
  expect(caesarCipher('a,b,c', 1)).toBe('b,c,d')
})

test('Wrap Cycles past Z back to A', () => {
  expect(caesarCipher('xyz', 1)).toBe('yza')
})

test('Capitalization Remains!', () => {
  expect(caesarCipher('ABc', 1)).toBe('BCd')
})

test('Number Array', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})