// this is a one line comment

/*
 this is a
 multiline
 comment

 reasons for commenting:
 - describing files
 - describing methods
 - explaining code
- comment in code to ignore code

*/

// var is scary
// var greeting = 'hello';

// TODO: This can be picked up by some editors
// var greeting = 'redeclared hello';

// does not get hoisted, can be re-assigned
// let greeting2 = 'hello again';
// greeting2 = 'does this get redeclared?'

// does not get hoisted, cannot be re-assigned, cannot be redeclared
// const greeting3 = 'hello again again';
// const greeting3 = 'can this be redeclared?'

// const greeting = function (name = "developer") {
//   console.log(`Hello ${name}`);
// }

// arrow functions are not a blanket replacement for using the function keyword.
// const greeting = (name = "developer") => {
//   console.log(`Hello ${name}`);
//   return `Hello ${name}`;
// }

// const getName = name => name ? `This is ${name}` : `This is developer`;

// let getNameValue = getName("Bob");
// console.log('without parameter', getName());
// greeting();

// console.log(getNameValue)

/*
  Datatypes:
    Primitive Datatypes:
      1. Number
      2. String
      3. Undefined
      4. Symbol
      5. Null
      6. Boolean

    Object Datatypes:
      1. Function
      2. Object
      3. Array
*/

// function greeting() {
//   let name = 'Local Name';

//   if (name == 'Global Name') {
//     console.log('this is a global variable')
//   }
//   else if (name == "Not Bob") {
//     console.log('this is not bob');
//   }
//   else {
//     console.log(`Hello ${name}`);
//   }
// }



// greeting();
// console.log(`global scope`, name);

let array = []

array.push('this is destructively adding to our array');
array.pop();
array.push('this is destructively adding to our array');
array.unshift('does this add to the front');
array.unshift('does this add to the front part 2');
// array.shift();
// array.splice(1, 1);

// console.log(array);

// let newArray = ['This is non destructively adding to a new array', ...array]

// console.log(newArray);
// console.log(newArray.slice(0, 2))

// array.forEach(function (element, index) {
//   console.log(`${index + 1}. ${element}`)
// })

// console.log(array.map((element, index) => `${index + 1}. ${element}`));


function doMath(num, num2, callback) {
  return callback(num, num2);
}

function addTwoNums(num, num2) {
  return num + num2;
}

function subtractTwoNums(num, num2) {
  return num - num2;
}

// console.log(doMath(1, 3, addTwoNums));
console.log(doMath(3, 1, subtractTwoNums));

