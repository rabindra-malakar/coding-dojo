// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function returnArr (num){
    for (let i=0; i<=num; i++){
        console.log(i);
    }
}
let newArr = returnArr(255);
console.log(newArr)


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function getEvenSum(num){
    let sum = 0;
    for (let i=1; i <=num; i++){
        if (i % 2 == 0){
            sum +=i;
        }
    } return sum;
}
let evenSum = getEvenSum(1000);
console.log(evenSum);

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function getOddSum(num){
    let sum = 0;
    for (let i=1; i<=num; i++) {
        if (i % 2 !== 0){
            sum +=i;
        }
    }return sum;
}
let oddSum = getOddSum(5000);
console.log(oddSum);

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArray(arr) {
    // let arr = [1,2,4,3,-10];
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum = sum + arr[i] ; 
    }
    return sum;
}
let sumOfArray = sumArray([2,5,-3,1,-97,102]);
console.log(sumOfArray);

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function maxValue(arr) {
    let value = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i] > value){
            value = arr[i];
        }
    }return value;
}
let value = maxValue([1,2,5,7,91,25,999,-1000,11111188]);
console.log(value);

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAverage(arr){
    let avgVal = 0;
    let sum = 0;
    for (let i=0; i<=arr.length; i++){
        sum += i;
        avgVal = (sum/arr.length)
    }
    return avgVal;
}
let avgVal = findAverage([1,2,3,4,5]);
console.log(avgVal);

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function oddArray(num){
    let odd = [];
    for (let i=1; i<num; i++){
        if (i%2 !== 0){
            odd.push(i);
            // console.log(i);
        }
    } return odd;
}
let odd = oddArray(50);
console.log(odd)

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(arr, num2){
    let num = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > num2){
            num+=1;
            console.log(num);
        }
    }
    return num;
}
let greaterThan = greaterThanY([1,2,3,-47,9], 2);
console.log(greaterThan);

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareValArr(arr){
    let newArr = [];
    for (let i=0; i<arr.length; i++){
        newArr.push(arr[i]*arr[i]);
    }
    return newArr;
}
let square = squareValArr([1,2,3,4,5,-10,7]);
console.log(square);

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function replaceNegArr(arr){
    for (let i=0; i<arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
let replaceArr = replaceNegArr([1,2,-4,-5,6-1,-2,-3,99]);
console.log(replaceArr);

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr){
    let max = 0;
    let min = 0;
    let avg = 0;
    let sum = 0;
    let newArr = [];
    for (let i=0; i<arr.length; i++){
        if (arr[i] > i){
            max = arr[i];
        }
        if (arr[i] < i){
            min = arr[i];
        }
        sum += arr[i];
        avg = (sum/arr.length);
        newArr= [max, min, avg];
    }
    return newArr;
}
let values = maxMinAvg([1,2,5,9,-10,11]);
console.log(values);

// Reverse the order of an array
function swapValues(arr){
    newArr = [];
    for (let i=arr.length-1; i>=0; i--){
            newArr.push(arr[i]);
        }
        return newArr;
    }
let newval = swapValues([1,2,3,4,-1,9,-7]);
console.log(newval)

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapArray(arr){
    // [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]]
    let firstArr = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = firstArr;
    return arr
}
let array = swapArray([2,1,4,9,2,-2]);
console.log(array);

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToString(arr){
    for (let i=0; i<=arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
let arrayNew = numToString([1,-2,2,3,4,7-77]);
console.log(arrayNew)