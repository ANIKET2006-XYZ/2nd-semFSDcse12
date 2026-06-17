// let person={            //definition of object 
//     name: "aniket",
//     age:"43",
//     city:"ghaziabad",
// };

// console.log(person.name);  // accessing elemnt of an object
// console.log(person.age);
// console.log(person.city);
// console.log(typeof(person));

// //array data type
// let numbers =[1,2,3,4,5];
// console.log(numbers=[0]);
// console.log(numbers=[1]);
// console.log(numbers=[2]);
// console.log(numbers=[3]);
// console.log(numbers=[4]);
// console.log(typeof(numbers));

// //array with multiple data types
// let mixedArray =[1 , "Hello"]




//  // map on array 
//  //map cretaes a new array  y appplying a function

//  let newarray = [1,2,3,4,5];
//  let squaredArray = newarray;
//  Map(num=> num*num);
//  console.log(squaredArray); // [1,4,9,16,25]

//  //normal function with parameters

//  function multiply(a,b){
//     return a*b;
//  }
//  console.log(multiply(2,3));

//  //function expression is storing the function in a  variable 
//  let multiply = function(a,b){
//     return a*b;
//  }
//  console.log(multiply(2,3));


//  // arrrow function which skip some steps using javascript
//  let add = (a,b)=> a+b;
// console.log(add(2,3));

// let multiply = (a,b) => (a*b) ;
// console.log(multiply(3,5));

// //filteration
// let evenNumbers =[1,2,3,4,5];
// let filteredEvenNUmbers = evenNumbers; 
// filter(num => num%2 === 0);
// console.log(filteredEvenNUmbers);

//accumulator
let sum=[1,2,3,4,5];
let total=
sum.reduce((accumulator , currentVlue) => accumulator + currentVlue, 0);
console.log(total); 


