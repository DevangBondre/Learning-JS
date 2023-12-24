 // 1. Write a function called add7 that takes one number and returns that number + 7.
function add7(){

    let input = prompt("PLease enter the number you want to add 7 to : ");

    let number = parseFloat(input);

    let sum = number + 7 ;
    return sum;

}
let resultAdd = add7();
console.log(resultAdd);

//  ---------------------- xxxxxxxxxxxx  ------------------


// 2. Write a function called multiply that takes 2 numbers and returns their product.
function multiply(){
    let input1 = prompt("PLease enter the first numebr you want to multiply : ");
    let num1 = parseFloat(input1);

    let input2 = prompt("PLease enter the second number you wan tto multiply : ");
    let num2 = parseFloat(input2);

    let multiplication= num1 * num2 
    return multiplication;
}
let resultMultiply = multiply();
console.log(resultMultiply);

//  ---------------------- xxxxxxxxxxxx  ------------------

// 3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(){

    let stringInput = prompt("Please enter the string of your choice : ");

    let stringOutput = (stringInput[0]).toUpperCase() + stringInput.slice(1);

    return stringOutput;
}

let resultCapitalize = capitalize();
console.log(resultCapitalize);


//  ---------------------- xxxxxxxxxxxx  ------------------

//4. Write a function called lastLetter that takes a string and returns the very last letter of that string:
//lastLetter("abcd") should return "d"

function lastLetter(){
 
    let stringInput = prompt("PLease enter the string of your choice : ")

    let reversedString = stringInput.split('').reverse().join('');

    let output  = reversedString[0];
 
    return output;
}

let resultLastLetter = lastLetter();
console.log(resultLastLetter);

/* Well this is the approach i got in my mind after i saw the problem and well it worked and gave the solution 
but after looking up a bit on the internet i found another approach which is apparantely better than my approach*/

// Second Approach 

function lastletterA2(){

    let stringInput = prompt("PLease neter the atring of your choice : ")

    let output = stringInput.charAt(stringInput.length-1)

    return output

}

let resultA2 = lastletterA2();
console.log(resultA2);

