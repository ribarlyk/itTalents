function factoriel(n) {
  let sum = 1;
  while (n > 0) {
    sum *= n;
    n--;
  }
  console.log(sum);
}

factoriel(5);
factoriel(6);
factoriel(7);
factoriel(8);


