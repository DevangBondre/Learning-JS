const button = document.getElementById('start')

button.addEventListener('click',fibonacci)


function fibonacci(){

    let num = prompt("Please enter the number u want fibonach number of : ")

    num = parseInt(num)

    if(num = 1 ){
        console.log("1st fibonachhi number is " + num)
        return
    }
        

    let sum = 0;
    let num1 = 0
    let num2 = 1 

    for(let i = 2; i <= num ; i++){
        sum = num1 + num2 ; 
        num1 = num2 
        num2 = sum 
    }
    console.log("The number present at " + num + " index in fibonaachi series is " + sum )
}