
const Subject = 'JavaMyth'
console.log(Subject);

//Task 3
const dayOfTheWeek = 'Tuesday';
const position = 3;
const output = 'Today is ' + dayOfTheWeek  +'.'  + ' It is the ' + position + 'rd' + ' day of the week.';
console.log(output);

const firstName = 'John';
const lastName = 'Friend';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

//const age = 16;
//if (age >= 18) {
   // console.log('You are an adult and eligible to vote.');
//} else {
//    console.log('You are not an adult and not eligible to vote.');
//}

// const age = 100;
// if (age>=25) {
//     console.log('You are eligible to rent a car.');
// } else if (age>=57) {
//     console.log('You are not eligible to rent a car.')
// }  else {
//     console.log('You are too young to rent a car.');
// }

const age = 59;
if (age>=25 && age<=57) {
    console.log('You are eligible to rent a car.');
} else if (age>=57) {
    console.log('You are not eligible to rent a car.')
}  else {
    console.log('You are too young to rent a car.');
}