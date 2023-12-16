// Task 1 

function noneSense() {
    console.log("What the func is this nonsense?")
    }
    
    noneSense();
    
    
    // Task 2
    //Create and call a function with two arguments, firstName and lastName.
    //The function should log both the argument values with a space between them.
    
    
    function logName(firstname, lastname) {
        console.log(firstname + " " + lastname)
    }
    
    logName("Jens", "Jensen")
    
    
    /*Question 3
    Create a function with two arguments, firstNumber and secondNumber.
    Inside the function, check the type of the arguments.
    If they are numbers, multiply them and return the result.
    If either of them are not numbers return the message: "Please supply number values".
    Call the function, assign the return value to a variable called result and log the variable.*/
    
    
    
    /*Question 4
    Create a function with three arguments.
    Try and convert each argument to a number.
    If any of the arguments cannot be converted to a number, return the message: "Invalid argument types".
    If all arguments are numbers or can be converted to numbers, add them all and return the result.
    Select the p element on the page and assign the result of the function call to be its innerHTML value.*/
    
    // Question 4
    function addition(num1, num2, num3) {
    
        var convertedNum1 = parseFloat(num1);
        var convertedNum2 = parseFloat(num2);
        var convertedNum3 = parseFloat(num3);
    
    
        
        if (isNaN(convertedNum1) || isNaN(convertedNum2) || isNaN(convertedNum3)) {
            return "Invalid argument types";
        }
    
        return convertedNum1 + convertedNum2 + convertedNum3;
        
    }
    
    var paragraph = document.querySelector("p");
    
    var sum = addition("30", "32", "5");
    
    paragraph.innerHTML = sum;

 

    
    
    
    function multiply(firstNumber, secondNumber) {
        if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number' )
     {
        console.log("Please supply number values")
    
    } else {
        var sum = firstNumber * secondNumber;
        console.log(sum)
    } 
    
    } 
    
    multiply(40, 42)
    

/* Question 5
Select the button with the class heading using document.querySelector.
Create a function and assign it to the onclick property of the button.
The function should select the h1 element on the page and update its innerHTML without replacing the existing value.
After clicking once, the innerHTML value should be Functions: Updated.
Clicking the button again would mean the heading reads: Functions: Updated: Updated */





var header = document.querySelector("h1")
var headingButton = document.querySelector(".heading")



function changeHeader() {
    header.innerHTML += ": Updated";
}

headingButton.onclick = changeHeader;



/* Question 6
Select the button with the class title.

When this is button is clicked, update the title of the page (not the heading, the HTML page title visible in the browser tab) to read: I've been updated.

Hint: use console.dir(document) to view the properties available on the document object. */


var titleButton = document.querySelector(".title")
var titleHead = document.querySelector("title")

function changeTitle() {
titleHead.innerHTML = "I've been updated"
}

titleButton.onclick = changeTitle;


/* Question 7
Select the buttons with the classes red, orange and pink.

Clicking on these buttons should change the background of the page to red, orange and pink respectively. */



var redButton = document.querySelector(".red")
var orangeButton= document.querySelector(".orange")
var pinkButton = document.querySelector(".pink")


function changeColour(colour) {
    document.body.style.backgroundColor = colour;
    }
        

  redButton.onclick = function()  {
    changeColour("red")
  }

  pinkButton.onclick = function()  {
    changeColour("pink")
  }

  orangeButton.onclick = function()  {
    changeColour("orange")
  }


