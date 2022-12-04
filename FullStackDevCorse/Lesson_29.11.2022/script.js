// we are not allowed to use the built-in sort method, sum, max, min, average, median, mode, range, variance methods
let arr = [10,0,5,4,8,9,7,6,2,1,3];

let mySum = (arr) => {
    let num = 0;
    for (i = 0; i < arr.length; i++) {
        num = num + arr[i];
    }
    return num;
}
// console.log("my sum is = " + mySum(arr));

// example mySum function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(mySum(arr)); -> 55

let myMax = (arr) => {
    let num = 0;
    for (i = 0; i < arr.length; i++) {
        if (num < arr[i]) {
            num = arr[i];
        }
    }
    return num;
};
// console.log("my max value is " + myMax(arr));

// example myMax function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMax(arr)); -> 10

let myMin = (arr) => {
    let num = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < num) {
            num = arr[i];
        }
    }
    return num;
};
// console.log("my min value is " + myMin(arr));


// example myMin function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMin(arr)); -> 1


let myAverage = (arr) => {
    return mySum(arr) / arr.length;
};
// console.log("my average is " + myAverage(arr));

// example myAverage function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myAverage(arr)); -> 5.5
// let arr2 = [ 1,2,2,3,4,7,7,9]
// console.log(myAverage(arr2)); -> 4.25



let myMedian = (arr) => {
    let arrSize = arr.length;
    let i = arrSize - 1;
    let num = 0;
    if (arrSize % 2 == 0) {
        num = (arr[arrSize / 2] + arr[arrSize / 2 - 1]) / 2;
    } else {
        num = arr[Math.floor(arrSize / 2)];
    }
    return num;
};
// console.log("my median is " + myMedian(arr));

// median is the middle value of an array
// example myMedian function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMedian(arr)); -> 5.5
// let arr2 = [ 1,2,2,3,4,7,7,9]
// console.log(myMedian(arr2)); -> 3.5



let myMode = (arr) => {
    let counter = 0;
    let maxCount = 0;
    let maxVal;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter > maxCount) {
            maxCount = counter;
            maxVal = arr[i];
        }
        counter = 0;
    }
    return maxVal;
};
// console.log("my mode is" + myMode(arr));
// mode is the most common value of an array

let myRange = (arr) => {
    return myMax(arr) - myMin(arr);
};
// console.log("my range is " + myRange(arr));
// range is the difference between the largest and smallest values of an array

let myVariance = (arr) => { }; // variance is the average of the squared differences from the Mean


//let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
//let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let mySort = (arr) => {
    let a = [];
    let num;
    for (let i = 0; i < arr.length; i++) {
        num = myMin(arr);
        a.push(num);
        for (j = 0; j < arr.length; j++) {
            if (num == arr[j]) {
                //arr.splice(j,1);
                arr[j] = NaN;
            }
        }
    }
    return a;
}; // sort an array from smallest to largest 
console.log("my sort is " + mySort(arr));