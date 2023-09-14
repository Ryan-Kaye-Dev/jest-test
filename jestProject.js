export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b
}

export function caesarCipher(str, shift) {
  const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
  
  let result = '';

  for (let i = 0; i < str.length; i++){
    const char = str[i];

    if (uppercaseAlphabet.includes(char)) {
      const currentIndex = uppercaseAlphabet.indexOf(char);
      const newIndex = (currentIndex + shift) % 26;
      result += uppercaseAlphabet[newIndex];
    } else if (lowercaseAlphabet.includes(char)) {
      const currentIndex = lowercaseAlphabet.indexOf(char);
      const newIndex = (currentIndex + shift) % 26;
      result += lowercaseAlphabet[newIndex];
    } else {
      result += char;
    }
  }
  return result
}

export function analyzeArray(arr) {

  const sum = arr.reduce((curr, prev) => {
    return (curr + prev);
  })

  const min = arr.reduce((curr, prev) => {
    return Math.min(curr, prev)
  })

  const max = arr.reduce((curr, prev) => {
    return Math.max(curr, prev)
  })

  const length = arr.length;

  const average = sum / length;

  const object = {
    average: average,
    min: min,
    max: max,
    length: length
  }

  return object
}