/* The given code checks if the user input string is palindrome or not. 
Palindrome is a word which is spelled same backwards . 
Example - BOB 
WORD - BOB 
REVERSE OF BOB IS ALSO BOB 
HENCE BOB IS A PALINDROME  */



function isPalindrome() {

    let word = prompt("Please enter the word you want to check : ");    

    let reverseWord = word.split('').reverse().join('');

    if(word === reverseWord){
        console.log("The given word is palindrome ");
    }
    else{
        console.log("The given word is not a palindrome");
    }
}

isPalindrome()