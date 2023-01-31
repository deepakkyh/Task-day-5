//1st(Print odd numbers in an array)

let numberArray = [1, 2, 3, 4, 5, 6, 98, 101, 467];

console.log("Odd Numbers : " + numberArray.filter((item) => {

    return item % 2 !== 0;

}));


//2nd(Convert all the strings to title caps in a string array)


let stringArray =["deepak", 'is', 'a', 'good', 'boy'];

stringArray = stringArray.map((item) => {

    return item.toUpperCase();

});

console.log("Capital String : " + stringArray);


//3rd(Sum of all numbers in an array)

numberArray=[1, 2, 3, 4, 7, 9]; 
let sum = numberArray.reduce((currentTotal, item) => {

    return currentTotal + item;

}, 0);

console.log("Sum of elements: " + sum);

//4th(Return all the prime numbers in an array)

numberArray=[1,2,4,5,6,8,11,13];
console.log("Prime Number : " +
 numberArray.filter((item) => {

     for (let i = 2; i < item; i++) {
         if (item % i === 0)
             return false;
     }
     return item !== 1;

 }));

 //5th(Return all the palindromes in an array)


 let arrayPallindrome = [11, 10, 50, 23, 12, 76, 70, 21];

console.log("Pallindrome Numbers in array are: " +
    arrayPallindrome.filter((item) => {

        let temp = item + "";

        if (temp.split('').reverse().join('') === item + "")
            return true;

        return false;

    }));