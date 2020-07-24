var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545, 11, 2, 10, 30, 15)
var myFutureDate = new Date(2515, 0, 31, 10, 30, 15);

console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date(1985, 0, 15, 11, 15, 25);
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());


