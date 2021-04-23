'use strict'


function websitePrompts() {
    confirm("Welcome to my website but only if you like burritos or hamburgers.");
    let food = prompt("What is your favorite food?");
    let lettersOnlyAnswer = lettersOnly(food);
    while (lettersOnlyAnswer == false) {
   
    
    food = prompt("What is your favorite food?");
    lettersOnlyAnswer = lettersOnly(food);
    
    }
    return food;
}




function lettersOnly(answer) {
    let letters = /^[A-Za-z]+$/;
    if (answer.match(letters)) {
        return true;
    }

    else{
        return false;
    }
    

    }


function confirmation(answer) {

        if (answer.toLowerCase() == "burrito") {
            document.write("Good choice welcome to the club.")

        } else if (answer.toLowerCase() == "hamburgers") {
            document.write("This is a wonderful choise you are an amazing person!")
        } else {
            document.write("Get off my website >:(")
        }
        
    
    
    }
    function numOfBurritos(){
       let burritoReply = prompt("how many burritos do you want?")
       

       let src ="burrito.jpg"

       for (let i =0; i < burritoReply; i++) {

       document.write('<img class="burritoPic" src="' + src + '" >');

    }
}