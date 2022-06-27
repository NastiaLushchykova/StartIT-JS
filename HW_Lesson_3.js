// 1)
// We have an object storing salaries of our team:
// Write the function to take obj as argument, 
//sum all salaries and return it. Should be 1000 in the example above.
// If salaries is empty, then the result must be 0.

function totalSalaries(salaries){
    let sum = 0;
    for(let key in salaries){
      sum += salaries[key]
    }
    return sum
  }
   
  let salaries = {
  Mykola: 250,
  Pavlo: 250,
  Petro: 500
  }
  
  console.log(totalSalaries(salaries));
  
  // 2)
  // We have an object storing salaries of our team:
  // Write the function that returns name and value of employer that gets biggest salary
  // function biggestSalary(salaries){
  
  let salaries2 = {
   Mykola: 250,
   Pavlo: 250,
   Petro: 500
  }
  
  function biggestSalary(salaries2){
  let arrValues = Object.values(salaries2);
  let arrEntries = Object.entries(salaries2);
  let indexMaxSalary = arrValues.indexOf((Math.max(...arrValues)));
  
  return arrEntries[indexMaxSalary]; 
  }
  
  console.log(biggestSalary(salaries2));
   
  // 3)
  // Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
  // For instance:
  // // before the call
  
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
    
  function multiplyNumeric(obj){
    for(let key in obj){
      if(typeof obj[key] === 'number'){
        obj[key] *= 2;
      }
    }
  }
  
  multiplyNumeric(menu);
  console.log(menu);
  
  // // after the call
  // menu = {
  // width: 400,
  // height: 600,
  // title: "My menu"
  // };
  // Please note that multiplyNumeric does not need to return anything. It should modify
  //the object in-place.
  // P.S. Use typeof to check for a number here.
  
  
  // 5) Show stars - function must return a string of concatenated asterisks (stars) which
  //  have as many concatenated asterisks as number of rows (argument)
  // const showStars = (rows) => {
  // for (let row = 1; row <= rows; rows++ ){
  // let star = *;
  // for()
  // }
  // }
  
  // showStars(4) // * ** *** ****
  // showStars(2) // * **
  const showStars = (rows) => {
    let star = '*'
    let str = "";
      for(let row = 1; row <= rows; row++ ){
          for (let j = 1; j <= row; j ++){
            str += star
          }
        str += " ";
        }
      return str.trimEnd();
     }
  
  console.log(showStars(8));
  
  
  // 6) Write a function, which will match job expectations / limitations 
  // WITH candidate expectations.
  // match(candidate1, job1) = true
  // match(candidate1, job2) = false
  
  function match(candidate, job) {
    let jobMax = job.maxSalary;
    let candidateMin = candidate1.minSalary;
   
    return candidateMin <= jobMax
  }
  
  const candidate1 = { minSalary: 120000 };
  const job1 = { maxSalary: 130000 };
  const job2 = { maxSalary: 80000 };
  
  console.log(match(candidate1, job1));
  console.log(match(candidate1, job2));
  
  // 7) Create a function called _if which takes 3 arguments: a boolean value bool 
  // and 2 functions (which do not take any parameters): func1 and func2
  // When bool is truth-ish, func1 should be called, otherwise call the func2.Example:
  // _if(true, function(){console.log("True")}, function(){console.log("false")})
   
  // // Logs 'True' to the console.
  
  function _if(bool, func1, func2) {
    return !!bool ? func1() : func2()
  }
  
  const func1 = () => {console.log('true');}
  const func2 = () => {console.log('false');}
  
  _if(0, func1, func2);
  
  // 8) Your start-up's BA has told marketing that your website has a 
  // large audience in Scandinavia and surrounding countries. Marketing 
  // thinks it would be great to welcome visitors to the site in their own language.
  //  Luckily you already use an API that detects the user's location, so this is an easy win.
  //The Task
  // Think of a way to store the languages as a database (eg an object).
  //The languages are listed below so you can copy and paste!
  // Write a 'welcome' function that takes a parameter 'language' (always a string),
  //and returns a greeting - if you have it in your database. 
  //It should default to English if the language is not in the database, 
  //or in the event of an invalid input.
  
  // The Databaseenglish: 'Welcome',
  // czech: 'Vitejte',
  // danish: 'Velkomst',
  // dutch: 'Welkom',
  // estonian: 'Tere tulemast',
  // finnish: 'Tervetuloa',
  // flemish: 'Welgekomen',
  // french: 'Bienvenue',
  // german: 'Willkommen',
  // irish: 'Failte',
  // italian: 'Benvenuto',
  // latvian: 'Gaidits',
  // lithuanian: 'Laukiamas',
  // polish: 'Witamy',
  // spanish: 'Bienvenido',
  // swedish: 'Valkommen',
  // welsh: 'Croeso'
  
  // Possible invalid inputs include:
  //IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
  // IP_ADDRESS_NOT_FOUND - ip address not in the database
  // IP_ADDRESS_REQUIRED - no ip address was supplied

  // HINT: You can do it in one line in return. If you don't know how, do it at least somehow)
  // greet('english') = 'Welcome
  
  // greet('dutch'), 'Welkom'
  
  // greet('IP_ADDRESS_INVALID'), 'Welcome'
  let greetingObj = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
  }
  
  function greet(language) {
      if (greetingObj[language] === undefined){
      return greetingObj.english
    }  
    for(let keys in language){
      return greetingObj[language]
    }
  }
  
  console.log(greet('italian'));
  console.log(greet('654654'));
  console.log(greet('IP_ADDRESS_INVALID'));
  
  // 9) write a function multipleArgs(), which sill accept UNLIMITED number 
  // of arguments, and returns first AND third of the arguments, if they exist. 
  // if only first, return only first.
  function multipleArgs(){
    let argArr = Object.values(arguments);
    return (argArr.length < 3)? argArr[0]: (`${argArr[0]}, ${argArr[2]}`)
  }
  
  console.log(multipleArgs("a0", "b1", "c2", "d3"));
  console.log(multipleArgs(1));
  
  // ЗАДАЧИ СО ЗВЕЗДОЧКАМИ!!!
  
 //10 ще не зроблена

  // 10) In order to solve this task, you have to understand the extension of data type Prototype. 
  //read this  https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/Object_prototypes#%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%D0%BE%D0%B2
  
  // Add the isUpperCase method to String to see whether the string is ALL CAPS.  
  // For example:"c".isUpperCase() == false
  
  // "C".isUpperCase() == true 
  // "hello I AM DONALD".isUpperCase() == false 
  // "HELLO I AM DONALD".isUpperCase() == true
  
  // "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false 
  // "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

  // In this task, a string is said to be in ALL CAPS whenever it does not contain any 
  // lowercase letter so any string containing no letters at all is trivially 
  //considered to be in ALL CAPS.
  // String.prototype.isUpperCase = function() {
  //   // your code here
  // }
  
  // =====================================================================================
  
  // 11) write recursive function factorial(num){} which will return a factorial of a given num 
  //(number)
  // Example: factorial of 5 (5!) is 5 * 4 * 3 * 2 * 1 
  
  function factorial(num){
    let result = 1;
    for(let i = 1; i<= num; i++){
      result *= i;
    }
    return result
  }
  
  console.log(factorial(3));
  
  // 12) write recursive function f sequence (read about it here 
  // https://geleot.ru/education/math/analytic_geometry/other/Fibonacci_number)
  // (SKIP ZERO!!!)
  // fibonachi(7) = 13;
  // 1, 1, 2, 3, 5, 8, 13
  
  function fibonachi(num){
    let a = 1;
    let b = 1;
    if (num == 1) return [a];
    if (num == 2) return [a, b];
    let arr = [a, b];
    for (let i = 3; i <= num; i++ ){
     let c = a + b; 
      arr.push(c);
      a = b; 
      b = c;
    }
    return arr[num - 1] //last element
    //return arr // all elements
  }
  
  console.log(fibonachi(10));