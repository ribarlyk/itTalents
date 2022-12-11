let day = 30;
let month = 12;
let year = 2020;

let totalDays = 0;

switch (month) {
  case 1:
    totalDays += day;
    break;
  case 2:
    totalDays = 31 + day;
    break;
  case 3:
    totalDays = 59 + day;

    break;
  case 4:
    totalDays = 90 + day;
    break;
  case 5:
    totalDays = 120 + day;
    break;
  case 6:
    totalDays = 151 + day;
    break;
  case 7:
    totalDays = 181 + day;
    break;
  case 8:
    totalDays = 212 + day;
    break;
  case 9:
    totalDays = 242 + day;
    break;
  case 10:
    totalDays = 273 + day;
    break;
  case 11:
    totalDays = 303 + day;
    break;
  case 12:
    totalDays = 334 + day;
    break;
}

if (year % 4 === 0) {
  totalDays++;
}
console.log(totalDays);
