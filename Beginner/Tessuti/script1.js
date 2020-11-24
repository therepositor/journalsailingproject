const openPTag = document.querySelector(".opentext");
const clickMe = document.querySelector(".clickme");

// function show() {
//   console.log("yeah!");
//   openPTag.style.display = "flex";
// }
// clickMe.addEventListener("click", () => {
//   console.log("yeah");
//   openPTag.style.display = "flex";
// });

// function person(name, twitterHandle) {
//   this.name = "name";
//   this.twitterHandle = "twitterHandle";
// }

// const marvin = new person("marvin", "@marvinGrey");
// const diane = new person("diane", "@dianeMugabe");
// const jacob = new person("jacob", "@jacobZuma");

// console.table([marvin, diane, jacob]);
// console.table([marvin, diane, jacob], ["twitterHandle"]);

//metaprogramming

// const blog = {
//   name: "freeCodeCamp",
// };
// console.log("Before eval:", blog);

// const key = "author";
// const value = "Tapas";

// testEval = () => eval(`blog.${key} = "${value}"`);

// testEval();

// console.log("After eval magic:", blog);

// introspection

// var users = {
//   Tom: 52,
//   Bill: 50,
//   Sam: 65,
// };

// Object.keys(users).forEach((name) => {
//   const age = users[name];
//   console.log(`user ${name} is ${age} years old!`);
// });

// // self modification

// var blog = {
//   name: "freeCodeCamp",
//   modifySelf: function (key, value) {
//     blog[key] = value;
//   },
// };
// blog.modifySelf("author", "Tapas");

//intersection

// var sun = {};

// Object.defineProperty(sun, "rises", {
//   value: true,
//   configurable: false,
//   writable: false,
//   enumerable: false,
// });

// console.log("sun rises", sun.rises);
// sun.rises = false;
// console.log("sun rises", sun.rises);

// the refelect API
// the impression of the first-class operation

// const obj = { bar: true, baz: false };

// function deleteProperty(object, key) {
//   delete object[key];
// }
// deleteProperty(obj, "bar");

// Reflect.deleteProperty(obj, "bar");
// console.log(Reflect.deleteProperty(obj, "bar"));
// console.log(obj);

// how to get unavailable object property values

// const employee = {
//   firstName: "Tapas",
//   lastName: "Adkran",
// };
// // step 1 - create a handler that uses a get trap

// let handler = {
//   get: function (target, fieldName) {
//     if (fieldName === "fullName") {
//       return `${target.firstName} ${target.lastName}`;
//     }
//     return fieldName in target
//       ? target[fieldName]
//       : `No such property as "${fieldName}"!`;
//   },
// };

// // step 2 - create a proxy object
// let proxy = new Proxy(employee, handler);

// // step 3 - access the properties on the Proxy object
// console.log(proxy.firstName);
// console.log(proxy.lastName);
// console.log(proxy.org);
// console.log(proxy.fullName);

// How to use Proxy amd Reflect togther

// const employee = {
//   firstName: "Tapas",
//   lastName: "Adkran",
// };

// let logHandler = {
//   get: function (target, fieldName) {
//     console.log("Log: ", target[fieldName]);

//     // use the get method of the Reflect object
//     return Reflect.get(target, fieldName);
//   },
// };
// let func = () => {
//   let p = new Proxy(employee, logHandler);
//   p.firstName;
//   p.lastName;
// };

// func();

// add event handlers for all input
const percentage = document.getElementById("percentage");
const beforeDiscount = document.getElementById("before-discount");
const afterDiscount = document.getElementById("after-discount");
const submit = document.getElementById("submit");
let discountByPercentage;
let afterDiscountMultiplyByPercentage;
let figure;
let result;
let percentageRatio;
let n;

percentage.addEventListener("input", topercentage)
function topercentage(){
  let UpdatedConvert = parseFloat(percentage.value);
   discountByPercentage = UpdatedConvert / 100;
  percentageRatio = 1 - discountByPercentage;
  console.log(percentageRatio)
};

// compute percentage and after-discount
afterDiscount.addEventListener("input", toafterdiscount)
 function toafterdiscount(){
   figure = parseInt(afterDiscount.value)
  console.log(figure);
};

// divide before-discount by the computation
submit.addEventListener("click", submitResult);

function submitResult() {
  result = parseInt(figure / percentageRatio);
   n = result.toFixed(3);
  console.log(n);
  alert("The cost before discount is: " + n);
}
// append the value into the input or use alert
beforeDiscount.innerHTML = n;
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }
// array.forEach(element => {
  
// });
// function name(params) {
  
// }
