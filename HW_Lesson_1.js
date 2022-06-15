// Ex. 1 - Поменять местами значения "cat" та "dog" 
// note: для решения этой задачи вам нужно огласить дополнительную переменную

let cat = 'cat';
 let dog = 'dog';
 let temp = cat;
    cat = dog;
    dog = temp;

 console.log(cat); //  'dog'
 console.log(dog); // 'cat'


//Ex.2 - Values and variables
// 1. Огласите переменные 'company', 'position'  и запишите туда значения соответственно компании, в которой вы работаете.
// 2. Залогируйте их вместе, используя функцию console.log() один раз

let company = 'SoftElegance';
let position = 'QA';
console.log(`${company}, ${position}`);


// Ex.3 - Data Types
// 1. Объявите переменную с названием 'isProductCompany' и запишите значение в соответствии с компанией в которой работаете. 
// Значение должно быть типа boolean. Также объявите переменную 'projectName', но пока не записывайте туда никакого значения.
// 2. Залогируйте тип переменных 'isProductCompany', 'company' и 'position' в консоль.

const isProductCompany = true;
let projectName;

console.log(typeof isProductCompany, typeof company, typeof position);

//Ex.4 - let, const and var
// 1. Запишите значение в 'projectName' в соответствии с названием проекта над которым работаете
// 2. Подумайте, какие из созданных ранее переменных следует объявить через "const" (какие значения могут измениться, а какие нет?). Затем измените эти переменные, используя "const".

//was changed for the isProductCompany variable

projectName = 'Wellez';

//Ex5. - найди ошибку (английский)
// const a == "jsfo";
// const b == "r.qa";
// const name == a + b;
//expected result when console.log(name) should be "jsfor.qa"

const a = "jsfo";
const b = "r.qa";
const name = a + b;
console.log(name);

//Ex6. - написать функцию, которая будет суммировать строки математичесски. Пример:
// "4", "5" --> "9"
//  "34", "5" --> "39" 
// "", "" --> "0" 
// "2", "" --> "2"
//  "-5", "3" --> "-2"

function sumStr(a,b) {
    let c = (+a + +b).toString();
    return c
  }

console.log(sumStr("4","5"));
console.log(sumStr("34","5"));
console.log(sumStr("",""));
console.log(sumStr("2",""));
console.log(sumStr("-5","3"));

// Ex7. - написать функцию, которая принимает два аргумента и возвращает (логает) остачу после деления БОЛЬШЕГО аргумента на МЕНЬШЕЕ (не просто первое на второе)
// remainder(17, 5) -> 2
// remainder(13, 72) -> remainder(72,13) -> 7 (The larger number should divide the smaller number)
// remainder(1, 0) -> NaN (Division by 0)
// remainder(0, 0) -> NaN (Division by 0)

 function remainder(a, b){ 
    return a>=b?a%b:b%a
 }
 console.log(remainder(17, 5));
 console.log(remainder(13, 72));
 console.log(remainder(1, 0));
 console.log(remainder(0, 0));

//  Ex8. - Get opposite number
// Very simple, given a number, find its opposite.
// Examples:
// 1: -1 
// 14: -14 
// -34: 34  

function opposite(number) {
    return -1 * number
}
console.log(opposite(1));
console.log(opposite(14));
console.log(opposite(-34));

// Ex9. - Number to string
// We need a function that can transform a number into a string.
// What ways of achieving this do you know?Examples:
// 123 --> "123"
//  999 --> "999"

function numberToString(num) {
  return num.toString()
  //or 
  //return num + ""
  //or
  //return `${num}`
}
console.log(numberToString(123));
