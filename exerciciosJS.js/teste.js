function combinacoes(str) {
  let arr = str.split("");
  let combinations = [];

  for (let m = 0; m < arr.length; m++) {
    for (let n = 0; n < arr.length; n++) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length + 1; j++) {
          combinations = combinations.concat(arr.join('').slice(i,j));
        }
      }

      if (n + 1 < arr.length) {
        let temp = arr[n];
        arr.splice(n, 1);
        arr.splice(n + 1, 0, temp);
      }
    }
  }
  return [...new Set(combinations)];
}

console.log(combinacoes('tri'))