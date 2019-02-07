import { getSum } from '@writetome51/get-sum-average-product';
import { getArrayFromProperty } from '@writetome51/get-array-from-property';


// Returns sum of all propertyWithNumberValue found in objects.
// propertyWithNumberValue can contain dot-notation.

export function getSumFromProperty(propertyWithNumberValue, objects): number {
	let numbers = getArrayFromProperty(propertyWithNumberValue, objects);
	return getSum(numbers);
}