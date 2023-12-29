// Prints hellow world 

function helloWorld() {
    return "Hello World"
}

let outputHW = helloWorld() 
console.log(outputHW)


// Prints the string 5 times since we gave 5 as parameter in the code 

function repeatString(string,num){

    result = ""

    for(let i=1 ; i <= num ; i++ ){

      result = result + string;
    }
    return result;
}
let repeatedStringOutput = repeatString("Dragon ball " , 5)
console.log(repeatedStringOutput)


// reverses the given string 

function reverseString(){
    
    let string = prompt("PLease enter the string you want to reverse")

    let reversedString = string.split('').reverse().join('')

    return reversedString;
}

let outputReversedString = reverseString()

console.log(outputReversedString)


//this code removes a element from array 

function removeArray(array, removedElement){

    console.log("The base array was " + array)

    array.splice(removedElement)

   console.log("THe new array is " + array)
}

let outputRemoveArray = removeArray([1,2,3,4],3);


//Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

function sumAll(start , end){

    let sumOfNums = 0; 

    for(i= start ; i<=end ; i++){
        sumOfNums = sumOfNums + i ;
        
    }
    return sumOfNums;
}

let outputSumAll = sumAll(2,8)
console.log(outputSumAll)


// temperature conversion Fahrenheit to Celsius and vice versa 

function fahrenheitToCelsius(FahrenheitTemp){
     let CelciusTemp = 5/9 * (FahrenheitTemp - 32 )
     return CelciusTemp;
}

let outputFarenheitToCelsius = fahrenheitToCelsius(90)
console.log(outputFarenheitToCelsius)


function celsiusToFarenheit(celsiusTemp){

    let farenheitTemp = (9/5 *celsiusTemp ) + 32
    return farenheitTemp;
}

let outputCelsiusToFarenheit = celsiusToFarenheit(90)
console.log(outputCelsiusToFarenheit)


// Leap year - This code tells if the user inputted year is leap year or not.
// Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 


function leapYear(){
    let userInputYear = prompt("PLease enter the year you want to check is leap year or not ")
                        
    if((userInputYear % 4 === 0 && userInputYear % 100 != 0 ) || (userInputYear % 400 === 0 ) ){
        return "The year " + userInputYear + " is a leap year"
    }
    else{
        return "The year " + userInputYear + " is not a leap year"
    }
}

let outputLeapYear = leapYear();
console.log(outputLeapYear)


