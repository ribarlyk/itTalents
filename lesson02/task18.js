let a = 3;
let b = 6;

for (let i = 1; i <= a; i++) {
let sum = 0;

  for (let j = 1; j <= b; j++) {
    sum = i * j;
    console.log(`${i}*${j}= ${sum}`);
  }
  sum = 0;
}
