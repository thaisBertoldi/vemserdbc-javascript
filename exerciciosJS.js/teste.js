function countConsonant(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let consonant = ['b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
  let arr = str.toLowerCase().split('')
  let totalConsonant = 0;
  let totalVowels = 0;

  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
          if (arr[i] === vowels[j]) {
              totalVowels++;
          }
      }
      for (let k = 0; k < consonant.length; k++) {
          if (arr[i].toString().toLowerCase() !== arr[i].toString().toUpperCase()) {
              totalConsonant++;
          }
      }
  }
  return `A string "${str}" tem ${totalVowels} vogais e ${totalConsonant} consoantes`
}

console.log(countConsonant('Oi, tenho 5 anos de idade!!! ;D'));