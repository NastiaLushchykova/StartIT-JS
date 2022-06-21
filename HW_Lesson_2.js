//                                 !! CONDITIONS !!
// 2) Write an if condition to verify that the age variable is between 18 and 90 inclusive.
// Inclusive means that the value of age CAN be either 18 or 90.

function ageCheck(age) {
    if (age >= 18 && age <= 90) {
        return "ok"
    } else if (typeof age !== 'number' || age <= 0) {
        return 'wrong input'
    } else {
        return 'age value is out of the range';
    }
}

console.log(ageCheck(91));
console.log(ageCheck(90));
console.log(ageCheck(18));
console.log(ageCheck(17));
console.log(ageCheck('99'));
console.log(ageCheck(true));
console.log(ageCheck(-1));


// 3) I recommend you to run code in browser console, since it allows easy usage of user input parsing with prompt method.

// prompt() // Use to get input from user if needed
// alert() // To output with alert

// Log available everywhere (browser or nodejs):
// console.log()

// Write script that will
// - accept user name
// - welcome user with his username
// - ask his birthday year
// - calculate how old is user, and print (or alert) his calculated age (advanced task to count current year programatically and not use current year as const year = 2021, HINT: use new Date() and then get current yet, read about Date class);
// - think about how you can make your code safe (as QAs, test yourself, put there incorrect values, empty values and use conditions to make your code safe and notify user about mistakes)
// ONLY FOR THIS TASK: AGAIN, EXECUTE YOUR CODE TO TEST IN BROWSER CONSOLE (get into dev tools and open Console Tab) 


// Example:
// -> Please, enter your first name
// <- Mykola
// -> Hello, Mykola, nice to meet you. -> Please enter your birthday year
// <- 1900
// -> 119 years
let userName = prompt('What is your name?');
if (!userName) {
    userName = 'Incognito';
}
alert(`Hello ${userName}`);

let yearOfBirth = prompt('What year were you born?');
let currentYear = new Date().getFullYear();
let congratString = `Congratulation ${userName}, you alredy lived up to ${currentYear - yearOfBirth} year`;
//якщо не задавати жодного значення для yearOfBirth -> ok, то він автоматично рахується як 0. Тут хз як краще зробити
//якщо закрити модалку з yearOfBirth -> Cancel, то програма далі не рахує (додала спеціально)
//додаткові умови про конвертацію з false, null, Infinity не осилила =/
while (yearOfBirth !== null) {
    if (!yearOfBirth) {
        alert(`Ok. Don't tell.`);
    } else if (!Number(yearOfBirth) && yearOfBirth != 0) {
        yearOfBirth = prompt('Try again. What year were you born?');
    }//не працює ок якщо на цьому кроці знову передати стрінгу
    if (yearOfBirth >= currentYear || yearOfBirth < 0) {
        alert(`Cheater. Start from the bigining`);
    } else if (currentYear - yearOfBirth == 1) {
        alert(`${congratString}`);
    } else {
        alert(`${congratString}s`);
    }
}
// або без всяких додаткових умов
let userName2 = prompt('What is your name?');
if (!userName2) {
    userName2 = 'Incognito';
}
alert(`Hello ${userName2}`);


let yearOfBirth2 = prompt('What year were you born?');
let currentYear2 = new Date().getFullYear();
let congratString2 = `Congratulation ${userName2}, you alredy lived up to ${currentYear2 - yearOfBirth2} year`;

while (!!Number(yearOfBirth2)){ 
if (yearOfBirth2 >= currentYear2 || yearOfBirth2 < 0) {
  alert(`Cheater. Start from the bigining`);
  } else if (currentYear2 - yearOfBirth2 == 1){
  alert(`${congratString2}`);
   } else {
  alert(`${congratString2}s`);
   }
 }
if (!Number(yearOfBirth)){
  alert('Incorrect input');
}

// 4. Write a script which will convert number into corresponding letter, and print(or alert) result:

// The grades should be computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

// Example:
// for number 92 - print "A"
// for number 29 - print "F"

//додала додаткову умову, про те що mark має бути > 0
function convertToLetter(mark) {
    if (mark < 60 && mark > 0) {
        return 'F'
    } else if (mark < 70) {
        return 'D'
    } else if (mark < 80) {
        return 'C'
    } else if (mark < 90) {
        return 'B'
    } else if (mark < 100) {
        return 'A'
    } else {
        return 'incorrect inpur'
    }
}
console.log(convertToLetter(1));
console.log(convertToLetter(60));
console.log(convertToLetter(99));
console.log(convertToLetter(80));
console.log(convertToLetter(100));

// 5.
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// HINT: use conditions to get it correctly
// Examples 
// (Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2)
// {
// // Code
// }

function basicOp(operation, value1, value2) {
    if (isNaN(value1) || isNaN(value2)) {
        return 'Incorrect input'
    }
    if (operation === '/' && value2 == 0) {
        return `can't divide on 0`;
    }
    if (operation === '*') {
        return value1 * value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else if (operation === '+') {
        return +value1 + +value2;
    } else {
        return value1 / value2
    }
}
console.log(basicOp("+", "12", "12"));
console.log(basicOp("/", "sdf", 3));
console.log(basicOp("+", 9, 3));
console.log(basicOp("-", 9, 3));
console.log(basicOp("/", 9, 3));
console.log(basicOp("*", 9, 3));
console.log(basicOp("/", 1, 0));


// 6.
// We are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats are considered UNeven for this task.
// function testEven(n) {
//     //Your awesome code here!
// }
// Expected: 
// testEven(0) = true
// testEven(0.5) = false
// testEven(1) = false
// testEven(2) = true
// testEven(-4) = true

function testEven(n) {
    return n % 2 ? false : true
}
console.log(testEven(0));
console.log(testEven(0.6));
console.log(testEven(1));
console.log(testEven(2));
console.log(testEven(-4));

// 7. You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, update_light('green') should return 'yellow'.
// HINT: try using switch-case for practice


// function updateLight(current) {
//   //your code here!
// }
// updateLight("green") = "yellow"

// updateLight("yellow") = "red"

// updateLight("red") = "green"

function updateLight(current) {
    switch (true) {
        case (current === 'green'):
            return 'yellow';
            break;
        case (current === 'yellow'):
            return 'red';
            break;
        case (current === 'red'):
            return 'green';
            break;
        default:
            return 'incorrect input'
    }
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
console.log(updateLight("redred"));

// 8. The first century spans from the 1 up to the year 100, the second century - from the year 101 up to  the year 200, etc.Task
// Given a year, return the century it is in.Examples
// 1705 --> 18
//  1900 --> 19
//  1601 --> 17
//  2000 --> 20


// function century(year) {
//   // Finish this :)
// }

function century(year) {
    return Math.ceil(year / 100);
}
console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(7777));


// 9. ДЛЯ ОЧЕНЬ УВЕРЕННЫХ В СЕБЕ :D (это сложно но все делается на условиях, вы это уже знаете)
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
// Basements (negatives) stay the same as the universal level.
// More information hereExamples
// 1 => 0
//  0 => 0
//  5 => 4
//  15 => 13
//  -3 => -3

function europeFloor(n) {
    return (n > 13) ? n - 2 : (n > 0 && n <= 13) ? (n - 1) : n
}

console.log(europeFloor(1));
console.log(europeFloor(0));
console.log(europeFloor(5));
console.log(europeFloor(15));
console.log(europeFloor(14));
console.log(europeFloor(13));
console.log(europeFloor(-2));

//                                          !!!!LOOPS!!!
// 1. создайте цикл for(), который будет проходить от 0 до 100, и законсолит ТОЛЬКО  ПЕРВЫЕ ТРИ ЗНАЧЕНИЯ КРАТНЫХ 7ми. Именно кратные (т.е. те которые делятся на 7 с 0 остатком). И дальше не выполниться.

let counter = 0;

for (let i = 0; i < 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
        counter++;
    }
    if (counter > 2) {
        break;
    }
}


// 2. Напишите цикл while, который будет использовать каунтер, инкрементируемый при каждом входе в луп и нативную JS функцию Math.random() (возвращает рандомное число от 0 до 1), умножая ее на каунтер. условие выхода будет, когда результата Math.random() * counter > 3;
let num = Math.random();
let counter2 = 1;
while (num * counter2 <= 3) {
    counter++
}
// 3. напишите цикл do-while, с каунтером, который будет конкатенировать текущее значение каунтера к строке (объявленой выше пустой), пока длина строки не станет 20 символов.
let str2 = '';
let counter3 = 1;
do {
    str2 += counter3;
    counter3++;
} while (str2.length <= 20);

// 4. Напишите вложений цикл for () { for () {}}, который будет логать внутри ВЛОЖЕННОГО цикла значение i / j. внутреннее условие будет j < i. Внешний цикл будет УМЕНЬШАТЬ  i, а внутренний  будет УВЕЛИЧИВАТЬ j. сделайте 10 итераций i.

for (let i = 100; i > 99; i--) {
    for (let j = 90; j < i; j++) {
        console.log(i / j);
    }
}