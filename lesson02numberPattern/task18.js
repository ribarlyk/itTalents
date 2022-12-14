let height = 9;
let number = 5;
let result = "";

for (let i = 1; i <= 9; i++) {
  for (let k = 1; k <= 9; k++) {
    if ( i === height) {
      result += number;
    } else {
      result += number-1 ;
    }
  }
  console.log(result);
  result = "";
  
}
