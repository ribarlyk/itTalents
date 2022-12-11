let hour = 2;
let cash = 2131+2.3;
let isHealthy = true;

if (!isHealthy) {
    console.log("Няма да излизам.")
  if (cash > 0) {

    console.log("Ще си купя лекарства.");
  } else {
    console.log("Ще си седя в къщи и ще пия чай.");
  }
} else {
  if (cash < 10) {
    console.log("Ще изляза на кафе.");
  }else{
    console.log("Ще отида в мола.")
  }
}
