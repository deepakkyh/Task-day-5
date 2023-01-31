
//find odd-->



(function(array){
for(var i = 0; i<array.length;i++){
if(array[i]%2!=0) {
console.log(array[i]); }
} }) ([1,2,3,4]);


//2nd(Convert all the strings to title caps in a string array)


let stringArray = ["deepak", 'is', 'a', 'good', 'boy'];

let resultStringArray = (function (stringArray) {

    return (stringArray.map((item) => {

        return item.toUpperCase();

    }));
})(stringArray);

console.log("ARRAY-->: " + resultStringArray);

//3rd(Sum of all numbers in an array)

arrayNumber = [1,2,3,4];  
    
let resultSumArray = (function (arrayNumber) {

    return (arrayNumber.reduce((currentTotal, item) => {

        return currentTotal + item;

    }, 0));
})(arrayNumber);

console.log("Sum of numbers: " + resultSumArray);


//4th(Return all the prime numbers in an array)


arrayNumber=[1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19];
let resultPrimeArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }

        return true

    }));
})(arrayNumber);

console.log("Prime numbers: " + resultPrimeArray);

//6th(Return median of two sorted arrays of the same size)


let arr1 = [3, 5, 7, 9, 13, 16, 18];
let arr2 = [2, 5, 7, 8, 11, 13 ,15,];

let resultMedian = function (arr1, arr2) {

    let result = [];

    let lenArr1 = arr1.length;

    let lenArr2 = arr2.length;

    if (lenArr1 % 2 === 0) {

        console.log("Median of array 1: " + arr1[lenArr1 / 2])

    } else {

        console.log("Median of array 1: " + arr1[(lenArr1 + 1) / 2])
    }

    if (lenArr2 % 2 === 0) {

        console.log("Median of array 2: " + arr2[lenArr2 / 2])

    } else {

        console.log("Median of array 2: " + arr2[(lenArr2 + 1) / 2])
    };

    return
}(arr1, arr2);



//7th(Remove duplicates from an array)


let arrayWithDup = [2, 5, 5, 5, 7, 7, 9, 9, 13, 15, 13];

let resultArrayWoDup = ((arrayWithDup, index) => {

    return [...new Set(arrayWithDup)];

})(arrayWithDup);

console.log("Array without Duplicates " + resultArrayWoDup);


//8th(Rotate an array by k times)

let arrforrotation = [0, 1, 3, 5, 6, 8, 9];
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    };
    return array

})(arrforrotation, 3);

console.log("roatated k times: " + resultArrayShifted);