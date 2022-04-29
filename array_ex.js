//Array - exercise 1: Write a JavaScript function to check whether an `input` is an array or not.
function isArray(check){
    return check instanceof Array;
};
console.log("Ex1:");
console.log(isArray([1,2,3]));
console.log(isArray("w3resource"));

// Array - exercise 2: Write a JavaScript function to clone an array.
let cloneArray = function(newArray) {
    return newArray.slice(0);
};
console.log("Ex2:");
console.log(cloneArray([1, 2, 4, 0]));  

//Array - exercise 3: Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
let firstElement = function(array, n) {
    if (array == null) {
        return void 0;
    };

    if (n < 0) {
        return [];
    } else if (n == null) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
};
console.log("Ex3:");
console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([], 3));
console.log(firstElement([7, 9, 0, -2], 3));
console.log(firstElement([7, 9, 0, -2], 6));
console.log(firstElement([7, 9, 0, -2], -3));

// Exercise 4: Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
let lastElement = function(array, n) {
    if (array == null) {
        return void 0;
    };

    if (n === null) {
        return array[array.length - 1];
    } else if (n < 0) {
        return [];
    } else {
        return array.slice(Math.max(array.length - n, 0));
    }
};
console.log("Ex4:");
console.log(lastElement([7, 9, 0, -2]));
console.log(lastElement([], 3));
console.log(lastElement([7, 9, 0, -2], 3));
console.log(lastElement([7, 9, 0, -2], 6));
console.log(lastElement([7, 9, 0, -2], -3));

// Exercise 5: Write a simple JavaScript program to join all elements of the following array into a string.
const myColor = ["Red", "Green", "White", "Black"];
console.log("Ex5: ");
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("+"));

// Exercise 6: Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. 
// 025468 
const result = function(numbers) {
    var numArr = numbers.split("");
    var w = numArr.length;
    for (var i = 0; i <= w; i++) {
        if ((numArr[i] % 2 === 0) && (numArr[i + 1] % 2 === 0)) {
            numArr.splice(i + 1, 0, "-");
        }; 
        // else {
        //     numArr.join("")
        // };
    };
    return numArr.join("")
};       
console.log("Ex6: ");
console.log(result("025468"));

//7. Write a JavaScript program to sort the items of an array.
//Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//Sample Output : -4,-3,1,2,3,5,6,7,8;
// const arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// arr1.sort(function(a, b) {return(a - b)});
// console.log("Ex7: ");
// console.log(arr1.join(","));
// const arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// let l = arr1.length;
// let index1 = 0;
// let index2 = 0;
// for (let i = 0; i < l; i++) {
//     if arr1[i] < arr1[i + 1] {

//     }
// }
// const numbers = [0, 1, 2, 4, 7, 7, 7];
// let moreThanOne = numbers.reduce(callBack);
// function(valueFirst, index) {

// } 
// function frequent(number){
//     // var count = 0;
//     var sortedNumber = number.split("");
//     var start = number[0], item = [];
//     for(var i = 0 ;  i < sortedNumber.length; i++){
//       if(start === sortedNumber[i] || sortedNumber[i] === sortedNumber[i+1]){
//          item = sortedNumber[i]
//       }
//     }
//     return item
  
// }

//    console.log( frequent([1, 1, 1, 'apple']))

// const arr = [91, 4, 6, 24, 8, 7, 59, 3, 13, 0, 11, 98, 54, 23, 52, 87, 4];
// var m = arr.reduce(function(acc, cur) {
//   // this arrVar will have the initial array
//   let arrVar = arr;
//   // get the max element from the array using Math.max
//   // ... is spread operator
//   var getMaxElem = Math.max(...arrVar);
//   // in the accumulator we are pushing the max value
//   acc.push(getMaxElem);
//   // now need to remove the max value from the array, so that next time it 
//   // shouldn't not be considered
//   // splice will return a new array
//   // now the arrVar is a new array and it does not contain the current
//   // max value
//   arrVar = arrVar.splice(arrVar.indexOf(getMaxElem), 1, '')
//   return acc;
// }, []);
// console.log(m.join(" "));

