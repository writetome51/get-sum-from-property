import {getSumFromProperty} from './index.js';

// Test 1: get a sum.
let objects = [
	{age: 10, hair: 'black'},
	{age: 20, tan: false},
	{age: 10, origin: 'Spain'},
	{age: 20, hair: 'red'},
	{age: 10.25, brain: 'medium'}
];
let sum = getSumFromProperty('age', objects);
if (sum === 70.25) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2: get a sum from an array item.
objects = [
	{family: {ages: [5, 8, 15]}},
	{family: {ages: [15, 18, 20]}},
	{family: {ages: [9, 16, 10]}},
	{family: {ages: [5, 10, 12]}}
];
sum = getSumFromProperty('family.ages.2', objects);
if (sum === 57) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: make sure it errors when one of the items is not a finite number.
let errorTriggered = false;
try {
	objects = [
		{family: {ages: [5, 8, 15]}},
		{family: {ages: [15, 18, 20]}},
		{family: {ages: [9, 16, 10]}},
		{family: {ages: [5, 10, Infinity]}}
	];
	sum = getSumFromProperty('family.ages.2', objects);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 3A: make sure it errors when one of the items is missing the property.
errorTriggered = false;
try {
	objects = [
		{family: {ages: [5, 8, 15]}},
		{family: {ages: [15, 18, 20]}},
		{family: {ages: [9, 16, 10]}},
		{family: {ages: [5, 10]}} // missing property
	];
	sum = getSumFromProperty('family.ages.2', objects);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3A passed');
else console.log('test 3A FAILED');


// Test 4: make sure it errors when the property doesn't exist.
errorTriggered = false;
try {
	objects = [
		{family: {ages: [5, 8, 15]}},
		{family: {ages: [15, 18, 20]}},
		{family: {ages: [9, 16, 10]}},
		{family: {ages: [5, 10, '10']}}
	];
	sum = getSumFromProperty('otherProperty', objects);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: make sure it errors when first arg is not string.
errorTriggered = false;
try {
	objects = [
		{family: {ages: [5, 8, 15]}},
		{family: {ages: [15, 18, 20]}},
		{family: {ages: [9, 16, 10]}},
		{family: {ages: [5, 10, '10']}}
	];
	sum = getSumFromProperty(undefined, objects);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: make sure it errors when second arg is not array.
errorTriggered = false;
try {
	sum = getSumFromProperty('property', 'hello');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 6A: make sure it errors when array is empty.
errorTriggered = false;
try {
	sum = getSumFromProperty('property', []);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6A passed');
else console.log('test 6A FAILED');


// Test 7: must handle array with only one object without error.
sum = getSumFromProperty('num', [{num: -100}]);
if (sum === -100)  console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8: must handle unusual adding:
sum = getSumFromProperty('num', [{num: -100}, {num: -0.000001}]);
if (sum === -100.000001)  console.log('test 8 passed');
else console.log('test 8 FAILED');


sum = getSumFromProperty('num', [{num: -100}, {num: +0.000001}]);
if (sum === (-(100 - 0.000001)))  console.log('test 8A passed');
else console.log('test 8A FAILED');
