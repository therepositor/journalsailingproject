for (var x = 0; x < 7; x++) {
  console.log(x.length);
}
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
