"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_sum_average_product_1 = require("@writetome51/get-sum-average-product");
var get_array_from_property_1 = require("@writetome51/get-array-from-property");
// Returns sum of all propertyWithNumberValue found in objects.
// propertyWithNumberValue can contain dot-notation.
function getSumFromProperty(propertyWithNumberValue, objects) {
    var numbers = get_array_from_property_1.getArrayFromProperty(propertyWithNumberValue, objects);
    return get_sum_average_product_1.getSum(numbers);
}
exports.getSumFromProperty = getSumFromProperty;
