'use strict';
//CODING CHALLANGE DAY 5
// const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Team Dolphins wins`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Team Koalas wins`);
//     } else {
//         console.log(`No team has won`)
//     }
// };

// const avgDolphins = calcAvg(44, 23, 27);
// const avgKoalas = calcAvg(265, 254, 249);
// console.log(avgDolphins, avgKoalas)
// checkWinner(avgDolphins, avgKoalas)

// CODING CHALLENGE - DAY 6
// const bills = [125, 255, 44];


const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill;
}

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]

// console.log(bills)
// console.log(`-------------`)
// console.log(tips)
// console.log(`-------------`)
// console.log(total)

// CODING CHALLENGE 2
// const mark = {
//     fullname: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     fullname: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// john.calcBMI();
// console.log(john.bmi, mark.bmi)

// if (john.bmi > mark.bmi) {
//     console.log(`${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s (${mark.bmi})`);
// } else {
//     console.log(`${mark.fullname}'s BMI ${mark.bmi}) is higher than ${john.fullname}'s (${john.bmi})`);
// }

// CODING CHALLANGE 3
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 53];
let tips = [];
let totals = [];

for(let i = 0; i<bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(tips);
console.log(bills);
console.log(totals);

// let sum = 0;
// const calcAverage = function(arr){
//     for(let i = arr.length; i >=0 ; i ++){
//         sum + i;
//     }
//     return sum / arr.length
// }
// console.log(calcAverage(bills))
