//challenge
/*// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
*/
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
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

bill = [125, 555, 421];
tip = [];
sum = [];
for (let i = 0; i < bill.length; i++) {
  tip.push(calcTip(bill[i]));
}
console.log(tip);
console.log(bill);
for (i = 0; i < bill.length; i++) {
  sum.push(bill[i] + tip[i]);
}
console.log(sum);
*/
//challenge
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(tips, totals);
