

for (let i = 100; i <= 999; i++) {
  let hundreds = Math.floor(i / 100);
  let tens = Math.floor((i % 100) / 10);
  let ones = Math.floor(i % 10);

  if (hundreds !== tens && tens !== ones && hundreds !== ones) {
    console.log(i);
  }

  
}
