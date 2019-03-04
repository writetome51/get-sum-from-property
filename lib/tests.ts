import { getSumFromProperty } from './index';

// Test 1: get a sum.
let objects: any[] = [
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


// Test 3: make sure it errors when one of the items is not of type 'number'.
let errorTriggered = false;
try {
	objects = [
		{family: {ages: [5, 8, 15]}},
		{family: {ages: [15, 18, 20]}},
		{family: {ages: [9, 16, 10]}},
		{family: {ages: [5, 10, '10']}}
	];
	sum = getSumFromProperty('family.ages.2', objects);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


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
}
catch (e) {
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
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: make sure it errors when second arg is not array.
errorTriggered = false;
try {
	sum = getSumFromProperty('property', 'hello');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');
