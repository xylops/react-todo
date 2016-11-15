var moment = require ('moment');

console.log(moment().format())

var now = moment();

console.log('current ' + now.unix())

var timeStamp =1479186481

var currentMoment = moment.unix(timeStamp)

console.log('current ' + currentMoment.format('MMM D, YY @ h:mm a'))

console.log('current ' + currentMoment.format('MMMM Do, YYYY @ hh:mm A'))
