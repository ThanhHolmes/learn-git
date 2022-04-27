// Find maxSum of subarray
const subArray = [-8,2,1,2,3,-7, 9];
let max = 0;
let maxValue = 0;  checkElement = 0; firstElementPosition = 0; endElementPosition = 0; 
let l = subArray.length;
for (let i = 0; i < l; i++) {
    maxValue += subArray[i];

    if (maxValue <= 0) { 
        maxValue = 0;
        checkElement = i + 1; 
    };

    if (maxValue >= 0 && max <= maxValue) {
        max = maxValue;
        firstElementPosition = checkElement;
        endElementPosition = i;
    }
};
console.log("Ex1 - Result: ", subArray.slice(firstElementPosition, endElementPosition + 1), "MaxSum = ", max);

