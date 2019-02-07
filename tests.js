"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
// Test 1: get a sum.
var objects = [
    { age: 10, hair: 'black' },
    { age: 20, tan: false },
    { age: 10, origin: 'Spain' },
    { age: 20, hair: 'red' },
    { age: 10.25, brain: 'medium' }
];
var sum = index_1.getSumFromProperty('age', objects);
if (sum === 70.25)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2: get a sum from an array item.
objects = [
    { family: { ages: [5, 8, 15] } },
    { family: { ages: [15, 18, 20] } },
    { family: { ages: [9, 16, 10] } },
    { family: { ages: [5, 10, 12] } }
];
sum = index_1.getSumFromProperty('family.ages.2', objects);
if (sum === 57)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3: get a sum from an array item.
objects = [
    { family: { ages: [5, 8, 15] } },
    { family: { ages: [15, 18, 20] } },
    { family: { ages: [9, 16, 10] } },
    { family: { ages: [5, 10, 15] } }
];
sum = index_1.getSumFromProperty('family.ages.2', objects);
if (sum === 60)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');