'use strict';

// YOU KNOW WHAT TO DO //


/**
 * identity: Designed to return the given value unchanged.
 * @param {Any value} value: Any value.
 * @return {Value} The given input value unchanged.
 */

function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to determine the datatype of a given value.
 * @param {Any value} value: Any datatype.
 * @return {String} string: Returns a string with the value's datatype
 * i.e.: 'null', 'array', 'object', 'function', 'undefined', 
 * 'number', 'boolean', 'string'.
 */
 
function typeOf(value){
    if (value === null){
        return 'null';
    } else if (Array.isArray(value) === true){
        return 'array';
    } else if (typeof value === 'object'){
        return 'object';
    } else if(typeof value === 'function'){
        return 'function';
    } else if (typeof value === 'undefined'){
        return 'undefined';
    } else if (typeof value === 'number'){
        return 'number';
    } else if(typeof value === 'boolean'){
        return 'boolean';
    } else if(typeof value === 'string'){
        return 'string';
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to determine the first n elements of a given array. Return the 
 * first element of the array, based on the argument given to the number.
 * If no number is given, returns an empty array. If the
 * number given is greater than the length of the array, returns the entire
 * array. If the the array input value is not an array, returns an empty array.
 * If the number input is not a number, returns only the first index of the 
 * array.
 * @param {Array} array: The array over which to loop through.
 * @param {Number} number: The number being passed into the array.
 * @return {Value} value: Returns first n elements of an array based on the 
 * number's argument. 
 */
 
function first(array, number){
     if(!Array.isArray(array)){
        return [];
    } else if(typeof number !== 'number'){
        return array[0];
    } else if (number < 0){
        return [];
    } else if (number > array.length){
        return array;
    } else {
        return array.slice(0, number);
    }
}
module.exports.first = first;

/**
 * last: Designed to determine the last n elements of a given array. Returns the
 * last element of an array, based on the argument given to the number.
 * If no number is given, returns an empty array. If the
 * number given is greater than the length of the array, returns the entire
 * array. If the the array input value is not an array, returns an empty array.
 * If the number input is not a number, returns only the last index of the 
 * array.
 * @param {Array} array: The array being iterated over.
 * @param {Number} number: The number being passed into the array.
 * @return {Value} value: Returns the last n elements of an array based on the 
 * number's argument. If no number is given, returns an empty array. If the 
 * number given is greater than the length of the array, returns the entire 
 * array.
 */

function last(array, number){
     if(!Array.isArray(array)){
        return [];
    } else if(typeof number !== 'number'){
        return array[array.length-1];
    } else if (number < 0){
        return [];
    } else if (number > array.length){
        return array;
    } else {
        return array.slice(-number);
    }
}
module.exports.last = last;

/**
 * indexOf: Designed to return the index number where the value's argument first
 * appears in the array. Returns -1 if the value does not exist in the array.
 * @param {Array} array: The array through which to iterate.
 * @param {Value} value: The value being searched within the array. Can be any 
 * datatype.
 * @return {Number} Returns a number that is either the index position in the
 * array or -1 if the value is not found in the array.
 */
 
function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        } 
    } return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to cycle through an array to see if a certain value is 
 * contained by that array.
 * @param {Array} array: A collection of various datatypes.
 * @param {Value} value: A value of any datatype.
 * @return {Boolean} boolean: Returns true if the value argument is found within 
 * the input array, and returns false if the value argument is not found in the
 * array.
 */

function contains(array, value){
    let contained = array.includes(value) ? true : false;
    return contained;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and apply the 
 * action Function to each value in the collection.
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to loop through an array, and return a new array with all 
 * duplicate values removed.
 * @param {Array} array: The collection over which to iterate. 
 * @return {Array} array: A new array without any duplicate values.
 */

function unique(array){
    let uniqueArr = [];
    for(let i = 0; i < array.length; i++){
        if((indexOf(uniqueArr, array[i])) === -1){
            uniqueArr.push(array[i]);
        }
    }return uniqueArr;
}
module.exports.unique = unique;

/**
 * filter: Designed to iterate through an array and have a function test each 
 * element in the array for a certain quality. It pushes all of the elements 
 * tested by the function that evaluated to truthy into a new array, and returns 
 * that array.
 * @param {Array} array: An array of elements to be tested against the 
 * function argument.
 * @param {Function} func: Any test we want to perform on the elements found
 * within the array.
 * @return {Array} array: Returns an array with all of the passing values
 * that resolved to be truthy when tested against the callback function for a 
 * specified quality.
 */
 
function filter(array, func){
    let filtered = [];
    each(array, function(e, i){
        if(func(e, i) === true){
            filtered.push(e);
        }
    });
    return filtered;
}
module.exports.filter = filter;

/**
 * reject: Designed to iterate through an array and have a function test each 
 * element in the array for a certain quality. If the test returns false, the 
 * failing elements are pushed into an array.
 * @param {Array} array: The array of elements being tested against the 
 * function.
 * @param {Function} func: A logical function test that is invoked on the 
 * elements of the array.
 * @return {Array} array: An array of the elements that failed the test.
 */
 
function reject(array, func){
    let rejected = filter(array, function(e, i, array){
        return !func(e, i, array);
    });
return rejected;
}
module.exports.reject = reject;

/**
 * parition: Designed to iterate through an array with a function acting on 
 * each element, and return a parent array comprised of two sub-arrays: one 
 * filled with truthy values and one falsey values.
 * @param {Array} array: The array of elements being tested against for 
 * truthiness and falsiness.
 * @param {Function} func: The test against which the elements of the initial
 * array are being judged.
 * @return {Array} array: A bifurcated array of two sub-arrays. One filled
 * with the elements that were found to be truthy, and one with the elements 
 * that were found to be falsey.
 */

function partition(array, func){
    
    let partedArr = [[], []];
      each(array, function(e, i, array){
        if(func(e, i, array) === true){
            partedArr[0].push(e);
        }else if(func(e, i, array) === false){
            partedArr[1].push(e);
        }
    });
    return partedArr;
}
module.exports.partition = partition;

/**
 * map: Designed to create a new array with the results of calling a function
 * on every element in a given collection.
 * @param {Collection} collection: A collection against which the function is
 * being called.
 * @param {Function} func: A function called on every element of the input
 * collection.
 * @return {Array} array: A new array created by calling the function on
 * every element in the collection.
 */

function map(collection, func){
    
    let maps = [];
    each(collection, function(e, i, array){
        maps.push(func(e, i, array));
    });
    return maps;
}
module.exports.map = map;

/**
 * pluck: Designed to cycle through an array of objects to see if the property 
 * of an object is found in the objects in the array. If the key is found, the
 * values are pushed into a new array.
 * @param {Array} array: An array of objects being searched through for a
 * given property.
 * @param {String} property: A string with the target key searched for in the 
 * objects within the input array.
 * @return {Array} array: An array containing the value of the givne 
 * property for every element in the given array.
 */
 
function pluck(array, property){
    
    return map(array, function(e, i, array){
        return e[property];
    });
   
}
module.exports.pluck = pluck;

/**
 * every: Designed to test whether ALL elements in a given collection pass the
 * test being called on them by the given function. If no test function is 
 * given, returns false.
 * @param {Collection} collection: A collection of elements being tested.
 * @param {Function} test: The function test being called on the collection.
 * @return {Boolean} boolean: Returns true if every element in the given 
 * collection passed the test of the given function. Returns false if any 
 * element within the given collection failed the test of the given function, or 
 * if the test function is not provided. 
 */
 
function every(collection, test){
    let arr = [];
    
    if(!test){
        return contains(filter(collection, Boolean), false);
    }
    
    each(collection, function (e, i, collection){
        arr.push(test(e, i, collection));
    });
    
    return !contains(arr, false);
}
module.exports.every = every;

/**
 * some: Designed to test whether or not ANY elements of a given collection pass
 * a test being called upon them by a given function. If no function is given,
 * returns true.
 * @param {Collection} collection: A collection of elements being tested.
 * @param {Function} test: A function test being called on the collection.
 * @return {Boolean} boolean: Returns true if any of the elements in the 
 * collection pass the test being conducted by the given function. Returns false
 * if all of the elements fail the test.
 */
 
function some(collection, test){
    let arr = [];
     
    if(!test){
        return contains(filter(collection, Boolean), true);
    }
    
    each(collection, function (e, i, collection){
        arr.push(test(e, i, collection));
    });
    
    return contains(arr, true);
}
module.exports.some = some;

/**
 * reduce: Designed to reduce a given array to a single value by calling a 
 * given function on each value of the array. The return value is stored in the
 * accumulator.
 * @param {Array} array: The array of elements on which the given function
 * is being called.
 * @param {Function} func: A callback function iterated over each element of 
 * the given array. 
 * @param {Value} accumulator (seed): The variable that stores the consolidated 
 * value of the repeated iterations of calling the function on the elements of 
 * the array. This accumulator value, often called seed, can be a number, a 
 * string, an array, or an object.
 * @return {Value} accumulator (seed): Returns a single value of the accumulated 
 * value gained from having consolidated the elements of the given array. The
 * datatype of this return value will be the same as the datatype of the seed. 
 */
 
function reduce(array, func, seed){
    let accumulator;
    if(seed === undefined){
        accumulator = array[0];
        let newArr;
        each(newArr, function(e, i){
            accumulator = func(accumulator, e, i +1);
        });
    } else {
        accumulator = seed;
        each(array, function(e, i){
            accumulator = func(accumulator, e, i);
        });
    }
    return accumulator;
}
module.exports.reduce = reduce;

/**
 * extend: Designed to take in any number of objects, and return one object
 * containing all of the properties of the objects passed as an argument.
 * @param {Objects} object: A n number of collections to be merged into the
 * resulting object.
 * @return {Object} object: Returns a new, updated object that contains the 
 * properties of the merged objects being passed to it.
 */
 
function extend(object){
    each(Array.from(arguments), function(e, i, array){
        Object.assign(object, e);
    });
    return object;
}
module.exports.extend = extend;