//challenge
const calcAvrg = (a, b, c) => (a + b + c) / 3;

const avgDolfins = calcAvrg(4400, 23, 71);
const avgKoalas = calcAvrg(65, 54, 49);
console.log(avgKoalas, "koala score");
console.log(avgDolfins, "dolfins score");

const checkWinner = function (avgDolfins, avgKoalas) {
  if (avgDolfins > avgKoalas * 2) {
    console.log(`dolfins win (${avgDolfins} vs ${avgKoalas})`);
  } else if (avgKoalas > avgDolfins * 2) {
    console.log(`koalas win ${avgKoalas} vs ${avgDolfins}`);
  } else console.log("nobody wins");
};
checkWinner(avgDolfins, avgKoalas);

// challenge
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

bill = [125, 555, 421];
tip = [];
sum = [];
for (i = 0; i < bill.length; i++) {
  tip.push(calcTip(bill[i]));
}
console.log(tip);
console.log(bill);
for (i = 0; i < bill.length; i++) {
  sum.push(bill[i] + tip[i]);
}
console.log(sum);
