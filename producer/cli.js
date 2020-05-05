#!/usr/bin/env node
var greeting = require('./main');
if (process.argv[2] === undefined) {
    console.log(greeting);
} else {
    console.log('Greeting: ' + greeting[process.argv[2]]);
}