// Display countdown
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


// Declare timer end date
const newYears = "1 JAN 2021";


// write a function for days, hours, minutes and seconds
 function countdown() {
     const newYearsDate = new Date(newYears);
     const currentDate = new Date();

     console.log(currentDate);

     const totalSeconds = (newYearsDate - currentDate) / 1000;
     console.log(totalSeconds);

     const days = Math.floor(totalSeconds / 3600 / 24);
     const hours = Math.floor(totalSeconds / 3600) % 24;
     const minutes = Math.floor(totalSeconds / 60) % 60;
     const seconds = Math.floor(totalSeconds) % 60;

     daysEl.innerHTML = days;
     hoursEl.innerHTML =  formatTime(hours);
     minutesEl.innerHTML = formatTime(minutes);
     secondsEl.innerHTML =  formatTime(seconds);
     
     console.log(days);
     console.log(hours);
     console.log(minutes);
     console.log(seconds);
}
 countdown();
 setInterval(countdown, 1000);

// time format
 function formatTime(time) {
     return time < 10 ?    `0${time}` : time;
 };
 
const array = ["jan", "feb", "march", "april", "may", "june", "july", "august", "september"]
 const squares = document.querySelectorAll(".sub");
 squares.forEach(square => {
     square.addEventListener("click", foo)
 })

 function foo() {
    console.log("amen");
 }
