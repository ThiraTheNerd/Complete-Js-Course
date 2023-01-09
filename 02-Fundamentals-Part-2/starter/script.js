'use strict';


// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I love js')

// function logger() {
//     console.log('My name is Joanas')
// }
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)
// console.log(fruitProcessor(5, 0))

// Function Declaration
// Can be accessed before initialization
// const age4 = calcAge1(1998)
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// Function expression
// Cannot be called before it is defined
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2)

// ARROW FUNCTION
// const calcAge3 = birthYear => 2037 - birthYear

// const age3 = calcAge3(1991)
// console.log(age3)

// const yearsUntilRetirment = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirment(1991))

// FUNCTIONS CALLING OTHER FUNCTIONS
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// Introduction to arrays
// Our first data structure

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends)

//Methos 2
// const years = new Array(1991, 1994, 2008, 2020);
// console.log(friends[0])

// console.log(friends[friends.length - 1]);

// Only primitive values are immutable
// friends[2] = 'Jay'
// console.log(friends)
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

// Excercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }


// BASCIC AARAY OPERATIONS
// Add an element to the end of an array
// friends.push('Joshua');
// console.log(friends)
// Add at begining of array
// console.log(friends.unshift('Jay'))
// console.log(friends)

//Remove elements
// Remove last element
// friends.pop();
//Removes first element
// friends.shift()

// Find position of an element in array
// console.log(friends.indexOf('Steven'))
// friends.unshift('Peter')
// Check if an element exists
// if (friends.includes('Peter')) {
//     console.log('You have a friend calles Peter')
// }


/// INTRODUCTION TO OBJECTS
// has key value pairs

// const teacher = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtman',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     calcAge: function (birthYear) {
//         return 2037 - this.birthYear;
//     }
// };

//DOTS VS BRACKET NOTATION

// console.log(teacher.friends)
// console.log(teacher['firstName'])

//OBJECT METHODS
// console.log(teacher.calcAge())

// FOR LOOPS
//For loop keeps running when condition is true
// for(let rep = 1; rep <= 10;  rep ++){
//     console.log(`I am a Genius ${rep}`)
// }


//Looping arrays, breaking and continuing
// const types =[];
// const jonasArray = [
//     'Jonas',
//     'Schmedtman',
//     2037 - 1992,
//     'teacher',
//     ['MichaeL', 'Peter', 'Steven']
// ];
// for (let i = 0; i < jonasArray.length; i++ ){
//     console.log(jonasArray[i], typeof jonasArray[i]);
//     types[i] = typeof jonasArray[i];
// }
// console.log(types)

//cONTINUE & BREAk
//Continue - Exits the current iteration on  loop
// for (let i = 0; i < jonasArray.length; i++ ){
//     if (typeof jonasArray[i] !== 'string') continue;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

//BREAK - Breaks iteration/loop after condition is met
// for (let i = 0; i < jonasArray.length; i++ ){
//     if (typeof jonasArray[i] == 'number') break;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

//LOOP BACKWARDS AND LOOP IN LOOPS
// for(let i = jonasArray.length - 1; i >=0; i-- ){
//     console.log(i, jonasArray[i])
// }

//Loop in loop
// for (let excercise = 1; excercise < 6; excercise ++){
//     console.log('Bunch excersise');
//     for (let rep =1; rep <6; rep ++){
//         console.log(`Exercise ${excercise[excercise]} Rep ${rep[rep]}`)
//     }
// }

//WHILE LOOP
// - Runs when a condition is true
// let rep =1;
// while(rep <= 10){
//     console.log(`Lifting weights repetition`)
//     rep ++;
// }

