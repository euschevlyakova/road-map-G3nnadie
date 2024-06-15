
function invertCase(str) {
  const strLength = str.length;

  let result = '';

  for(let i = 0; i < strLength; i++) {
    if(str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }

  return result;
}

console.log(invertCase('Hello, World!'))