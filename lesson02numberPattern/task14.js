let start = 5;
let cycles = 5;
let result = "";


for (let j = 5; j >= 1; j--) {
 
  for (let k = 5; k >= 1; k--) {
   if(j>k){
    result+=j;
   }else{
    result+=k
   }
  }

  console.log(result);
  
  result = "";
}
