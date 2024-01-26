function isSumZero(arr) {
    
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    if (sum === 0) {
        return true;
    } else {
        return false;
    }
}

const array1 = [1, 2, -3];
const array2 = [4, -4, 1];

console.log(isSumZero(array1)); // Output: true
console.log(isSumZero(array2)); // Output: false

//Runtime: O(n)