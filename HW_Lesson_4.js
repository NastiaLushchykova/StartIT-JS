//  Exercise 1
//  Need to create function which display the max number from the array
// const numbers = [1, 2, 3, 4, 5];
// const maxNumber = getMax(numbers);
// console.log(maxNumber()) // should display max number from the array 5

function getMax() {
  return Math.max(...numbers);
}
   
  const numbers = [1, 2, 3, 4, 5];
  const maxNumber = getMax(numbers);
  console.log(maxNumber);

// // EX2
 const arr = [1,2,3,4,1,4,5,21234,214,23,45,12,11,1,4,0,3,2,11,1];
// // write function to count number of 1 in array, using:
// // 2.1 ONLY indexOf() method (also can use loop)
function countItemsByIndex(item){
    let counter = 0;    
    for (let i = 0; i < arr.length; i++){ 
     if(i === arr.indexOf(item, i)) counter +=1;
    }
    return counter
   }
   console.log(countItemsByIndex(1));
// //2.2 filter() and Length
const countItemsNumByFilter = (item) => {
    let filteredArr = arr.filter(el => el === item);
      return filteredArr.length;     
    }      
console.log(countItemsNumByFilter(1));
// //2.3 NEW RULE: find out if there is 0 in this array using includes()
const arrIncludesItem = (item) => {
    return arr.includes(item)
   }
console.log(arrIncludesItem(0));

// // EX3
let users = [
{ id: 1, name: "John", age: 43 }, // same age
{ id: 2, name: "Pete", age: 43 },
{ id: 3, name: "Mary", age: 37 }
];
// // Find out if users array has user with age 37 in it using (returning boolean value)
// // 6.1 using find()

let doesUserExist1 = !!users.find((el) => el.age === 37);
console.log(doesUserExist1);
// // 6.2 using some()
let doesUserExist2 = users.some((el) => el.age === 37);
console.log(doesUserExist2);
// // 6.3 using filter() and length
let filteredArr = users.filter(el => el.age === 37);
console.log(filteredArr.length > 0);

// // ex4
 const arrStr = ['one, two, trhee', 'four, five', 'seven, six'];
// // write a function which will return new array with all numbers (srings) as separate elements of array
// // expected ['one', 'two',...]
const splitArrItems = (arr) => {
    let newArr = [];
    arr.forEach(el => newArr.push(...(el.split(", "))));   
    return newArr;           
  }
  console.log(splitArrItems(arrStr));
// // next, create second function, pass there result of function above and create ONE STRING,
// // comma-separated with all the elements of array in it.
const fromArrayToString = () => {
    return splitArrItems(arrStr).join(",");
}
console.log(fromArrayToString(arrStr));

// // EX5
// Write a function, gooseFilter , that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
// geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let newArr = birds.filter( function(item) {
     return !geese.includes(item)
    })
    return newArr
   }
   
  // Examples:
  console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));//["Mallard", "Hook Bill", "Crested", "Blue Swedish"]));
  console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])); // ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);

// ЗАДАЧА СО ЗВЕЗДОЧКОЙ))
// //EX 6
// Consider a matchmaking system that is designed to deliver jobs to software developers on a continual basis. 
// As more quality jobs are handpicked into the system, they will be matched to all the enrolled developers; 
// affording them better opportunities daily.


// This means that somewhere in the system there exists functionality to take 
// a job and match it against enrolled candidates. 
// There are several factors that go into this matching, but we'll focus on two for the purposes of this task.


// Create a function match which takes a job, and filters a list of candidates to 
// the ones that match the job. We'll focus on two matching properties for this task: equity and location.

// Equity
// The candidate has a equity property (boolean) indicating if they desire equity, while the job will 
// have a maximum equity property (float) representing the max amount of equity offered. 
// If the maximum equity is zero, we can infer there is no equity offered. A job will match unless 
// the candidate desires equity, but the job does not offer any.

// Location
// The candidate will have two location properties: current location and desired locations. 
// A job can be located in multiple places as well which will be represented by its locations property. 
// A match is when a job location is either in the candidate's current location or 
// any of the candidate's desired locations.


// So the candidate list might look like this:let candidates = [
// {
// desiresEquity: true, 
 
// currentLocation: 'New York', 
//   desiredLocations: ['San Francisco', 'Los Angeles', 'Colorado'] 
// }, ...];

 

// And a job might look like this:let job = {
// equityMax: 1.2,
// locations: ['New York', 'Kentucky']
// }



// function match(job, candidates) {
//   // Which of these candidates match this job?
// }


// TEST DATA:
// const candidates = [{
//   desiresEquity: true, 
//   currentLocation: 'New York',
//   desiredLocations: ['San Francisco', 'Los Angeles']
// }, {
//   desiresEquity: false, 
//   currentLocation: 'San Francisco',
//   desiredLocations: ['Kentucky', 'New Mexico'] 
// }];


// job1 = { equityMax: 0, locations: ['Los Angeles', 'New York'] },
//     job2 = { equityMax: 1.2, locations: ['New York', 'Kentucky'] };


// EXPECTED RESULT:
// match(job1, candidates).length, 0

// match(job2, candidates).length, 2