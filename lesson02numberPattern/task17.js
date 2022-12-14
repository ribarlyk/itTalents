let start = 5;
let cycles = 5;
let result = "";

for (let j = 1; j <= 5; j++) {
  for (let k = 1; k <= 5; k++) {
    if (j > k ) {
      result += j;
     
    } else {
        
      result += k
    }
  }

  console.log(result);

  result = "";
}
