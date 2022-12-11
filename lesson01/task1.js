let a = 1;
let b = 33;
let c = 12;

if(a<b){
  if (a < c && c < b) {
    console.log(`Числото ${c} e между ${a} и ${b}`);
  } else {
    console.log(`Числото ${c} не e между ${a} и ${b}`);
  }

}else{
  if (b < c && c < a) {
    console.log(`Числото ${c} e между ${b} и ${a}`);
  } else {
    console.log(`Числото ${c} не e между ${b} и ${a}`);
  }

}


//решение с тернарен оператор
/*
a < c && c < b
  ? console.log(`Числото ${c} e между ${a} и ${b}`)
  : console.log(`Числото ${c} не e между ${a} и ${b}`);
*/