/**
 * This module is just meant to be a realistic code example,
 * to use in demonstrating some common git patterns.
 *
 * It is a collection of array utilities I often end up rewriting.
 */

const first = arr => arr[0];

const last = arr => [arr.length - 1];

/**
 * Returns a new array with the indexes as values, i.e. [0, 1, ...len]
 *
 * @param {number} len - the length of the new array
 * @returns {number[]}
 */
const range = (len) => {
  const blanks = Array(...Array(len));
  return blanks.map((_, i) => i);
};

/**
 * Creates a new 2D array split into evenly sized chunks
 *
 * @param {array} arr - the array to chunk
 * @param {number} size - the size of each chunk
 * @returns {array[]}
 */
const chunk = (arr, size) => {
  const parentSize = Math.ceil(arr.length / size);

  return range(parentSize).map((index) => {
    const start = index * size;
    return arr.slice(start, start + size);
  });
};

/**
 * Groups the items in an array into sub-arrays by grouping function output
 *
 * @param {array} arr - the array to group
 * @param {function} groupingFn - outputs the key to group an item under
 * @returns {Object<string, array>}
 */
const groupBy = (arr, groupingFn) => {
  const grouped = {};

  arr.forEach((item, i) => {
    const key = groupingFn(item, i, arr);

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(item);
  });

  return grouped;
};
