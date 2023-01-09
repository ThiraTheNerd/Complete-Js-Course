// //Variables Coding challanege 1
// let country = 'Kenya';
// let continent = 'Africa';
// let population = 40000000

// console.log(country, continent, population)

// Variables and Operators
//CODING CHALLENGE 2
// let BMI = mass / height ** 2 = mass / (height * height )

// const massMark = 78;
// const johnWeight = 82;

// const markHeight = 1.69;
// const johnHeight = 1.95;
// let markHigherBmi = (massMark / markHeight ** 2) > (johnWeight / johnHeight ** 2);

// CODING CHALLENGE
// const markBMI = massMark / markHeight ** 2;
// const johnBMI = johnWeight / (johnHeight * johnHeight);
// console.log(markBMI, johnBMI)
// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
// }

// CODING CHALLANGE -DAY4
const dolphineAvg = (106 + 108 + 89) / 3;
const koalasAvg = (88 + 91 + 110) / 3;
console.log(dolphineAvg, koalasAvg)
if (dolphineAvg > koalasAvg && dolphineAvg >= 100) {
    console.log(`Dolphines won 🥳`)
} else if (koalasAvg > dolphineAvg && koalasAvg >= 100) {
    console.log(`Koalas wom 🥳`)
} else if (dolphineAvg == koalasAvg && dolphineAvg <= 100) {
    console.log(`Nobody won because of minimum requirement 🫤`)
} else {
    console.log(`Nobody won 😕`)
}

// Challange day 5
// Tip calculator
// tip = 15% of the  if 50- 300
// else tip = 20 %
let bill = Number(prompt());
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);