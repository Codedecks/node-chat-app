var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb']
//
// console.log(date.getMonth());

var test1 = new Date().getTime()
var test2 = moment().valueOf();
console.log(test2);

var date = moment();
// date.add(100,'Y').subtract(9, 'M');
console.log(date.format('MMM Do, YYYY h:mm a'));
