// Javascript Assignment 2
// Q-1 Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.
// function returnNumber (num1) {
//     return function (num2) {
//         let numResult = num1 + num2;
//         return numResult;
//     }
// }
// let fun1 = returnNumber(10)
// console.log(fun1(20));

// Q-2 Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.
// function searchArray(arr, val) {
//     // base case: if the array is empty, the value isn't found
//     if (arr.length === 0) {
//       return false;
//     }
//     // check if the first element of the array is the value we're looking for
//     if (arr[0] === val) {
//       return true;
//     }
//     // recursive case: call searchArray on the rest of the array
//     return searchArray(arr.slice(1), val);
// }
// // Example to Check Function
// let arr = [0,1,2,3,4,5];
// let val = 6;
// console.log(searchArray(arr, val)); // this will return false
// let arr1 = ["apple", "mango", "orange"];
// let val2 = "mango";
// console.log(searchArray(arr1, val2)); // this will return true

// Q-3 Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element
// function generatingPara (str) {
//     let p = document.createElement("p");
//     p.textContent = str;
//     document.body.appendChild(p);
// }
// let value = prompt("Enter Text to Add in Paragraph");
// (generatingPara(value));

// Q-4 Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.
// function generatingUnorderedList (str) {
//     let li = document.createElement("li");
//     li.textContent = str;
//     document.getElementById("unlist").appendChild(li);
// }
// let value1 = prompt("Enter Text to Add in Unordered List");
// generatingUnorderedList(value1);

// Q-5 Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color
// function changingBackgroundColor (ref, str) {
//     document.querySelector(ref).style.backgroundColor = str;
// }
// let a = prompt("Enter the name of element from available options. 1. div, 2. p, 3. body");
// let b = prompt("Enter the Background Color. Colors in name only");
// changingBackgroundColor(a,b);

// Q-6 Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.
// function storingObject (key, obj) {
//     localStorage.setItem(key, obj)
// }
// let a = "Student";
// let b = {
//     name: "Shoaib",
//     subject: "Javascript",
//     teacher: "Sir Ishaq"
// }
// let str = JSON.stringify(b);
// storingObject(a, str);

// Q-7 Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.
// function retrivingObject (key) {
//     let c = localStorage.getItem(key);
//     return JSON.parse(c);
// }
// console.log(retrivingObject(a));

// Q-8 Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.
// function saveToLocalStorage(obj) {
//     for (const key in obj) {
//         localStorage.setItem(key, obj[key]);
//     }
//     const retrievedObj = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       const value = localStorage.getItem(key);
//       retrievedObj[key] = value;
//     }
//     return retrievedObj;
//   }
//   const myObj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };
//   const retrievedObj = saveToLocalStorage(myObj);
//   console.log(retrievedObj);