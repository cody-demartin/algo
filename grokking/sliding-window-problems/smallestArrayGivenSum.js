// problem: given an array of positive numbers and S a num,
// find the length of smallest array whose sum is >= S

const smallest = (array, s) => {
    let windowStart = 0,
        currentSum = 0,
        minLength = Infinity;

    for (windowEnd = 0; windowEnd < array.length; windowEnd++) {
        currentSum += array[windowEnd];

        while (currentSum >= s) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            currentSum -= array[windowStart];
            windowStart++
        }
    }

    if (minLength === Infinity) return 0;
    return minLength
}