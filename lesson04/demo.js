 let input= [2,6,12,155,13,8,-6,18,9,11,8];
let newArr = 0
for(let i = 0 ;i<input.length;i++){
    if(input[i] % 3=== 0  || input[i] % 5 === 0){
newArr+=input[i];
    }
    console.log(newArr);
}