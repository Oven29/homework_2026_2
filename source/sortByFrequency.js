'use strict';

/**
 * Sorts an array of elements by their frequency in descending order.
 * If frequencies are equal, elements are ordered by their first appearance in the input array.
 *
 * @param {Array<number>} arr - Array of numbers to sort.
 * @returns {Array<number>} A new sorted array.
 *
 * @example
 * // returns [2, 2, 2, 2, 4, 4, 4, 6, 6]
 * sortByFrequency([4, 6, 2, 6, 4, 4, 2, 2, 2]);
 */
const sortByFrequency = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1) {
        return [...arr];
    }

    const frequencies = new Map();
    const firstSeen = new Map();

    arr.forEach((item, index) => {
        frequencies.set(item, (frequencies.get(item) || 0) + 1);
        if (!firstSeen.has(item)) {
            firstSeen.set(item, index);
        }
    });

    return [...arr].sort((a, b) => {
        const freqDiff = frequencies.get(b) - frequencies.get(a);
        if (freqDiff !== 0) {
            return freqDiff;
        }
        return firstSeen.get(a) - firstSeen.get(b);
    });
};