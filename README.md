# getSumFromProperty(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;property: string,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objects: object[]<br>): number

Returns sum of `property` found in each of `objects`.   
Value of `property` in each object must be type 'number'.  
The parameter `property` is a string that can include dot notation  
( i.e,  `'property.subproperty.subsubproperty'` ) .  

Note:  `property` does not have to be an object key. It can also be an array index.  
If you are referring to an array index, here you need to use dot-notation  
and not square braces.  Example: `'1.0' instead of [1][0]`

## Examples
```js
let players = [
	{name: 'Bill Mill', strikeouts: 10},
	{name: 'Milly Buttons', strikeouts: 12},
	{name: 'Mick Stan', strikeouts: 5},
	{name: 'Kelly Rogers', strikeouts: 2},
	{name: 'Angus Beef', strikeouts: 11},
	{name: 'Charlie Soup', strikeouts: 10}
];
getSumFromProperty('strikeouts', players);
    // --> 50


players = [
	{stats: {strikeouts: 100}},
	{stats: {strikeouts: 20}},
	{stats: {strikeouts: 30}},
	{stats: {strikeouts: 40}},
	{stats: {strikeouts: 10}},
	{stats: {strikeouts: 15}}
];
getSumFromProperty('stats.strikeouts', players);
    // --> 215


let numberGroups = [
	[[1, 5], [6, 10]],
	[[11, 15], [16, 20]],
	[[21, 25], [26, 30]],
	[[31, 35], [36, 40]]
];
// get the sum of [1,11,21,31]
getSumFromProperty('0.0', numberGroups);
    // --> 64


players = [
	{name: 'Bill Mill', strikeouts: '10'}, // string will trigger error.
	{name: 'Milly Buttons', strikeouts: 12},
	{name: 'Mick Stan', strikeouts: 5},
	{name: 'Kelly Rogers', strikeouts: 2}
];
getSumFromProperty('strikeouts', players);
// console: "Error: Input must be a finite number of type 'number'"


players = [
	{name: 'Kelly Rogers', strikeouts: 2},
	{name: 'Angus Beef', strikeouts: 11},
	{name: 'Charlie Soup', strikeouts: 10},
	{name: 'Willy'}  // missing property will trigger error.
];
getSumFromProperty('strikeouts', players);
// console: "Error: Input must be a finite number of type 'number'"
// (In this case, the input that is not a number is undefined)
```

## Installation
```bash
npm i @writetome51/get-sum-from-property
```

## Loading
```js
import {getSumFromProperty} from '@writetome51/get-sum-from-property';
```
