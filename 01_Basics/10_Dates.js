let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(typeof myDate);

let myTimestamp = Date.now()
console.log(Math.floor(Date.now()/1000),'value provided in seconds `_`');
