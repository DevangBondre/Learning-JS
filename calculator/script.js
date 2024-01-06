
const button = document.getElementById('start')

button.addEventListener('click',start)

function start(){

let operand  = prompt("Please enter the operand u want to perform (sum , subtract, multiply , divide , get power of").toLowerCase()

console.log("You choose " + operand + " operand")


let num1 = prompt("Please enter the first number")
num1 = parseFloat(num1)
console.log("You entered " + num1)

let num2 = prompt("Please enter the second number")
num2 = parseFloat(num2)
console.log("You entered " + num2)


if(operand === "sum"){
    let sum = num1 + num2;
    console.log(sum)
        
}
else if(operand === "subtract"){
    let subtract = num1 - num2 
    console.log(subtract)
}

else if(operand === "multiply"){
    let multiply = num1 * num2 
    console.log(multiply)
}
else if(operand === "divide"){

    let division = num1 / num2 
    console.log(division)
}
else if(operand === "power"){
    
    let power = num1 ** num2 
    console.log(power)
}

// else if(operand === "factorial"){

//     let num = prompt("Please enter the number u want to get factorial of ")
//     num = parseFloat(num)
//     let factorialAns = 1; 

//     for( i = 1 ; i = num ;i++){
//         factorialAns = i * factorialAns
//     }
// }
else{
    console.log("Invalid Operator")
}
}