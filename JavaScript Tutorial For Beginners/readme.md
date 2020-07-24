# JavaScript Tutorial For Beginners

from youtube playlist:

https://www.youtube.com/watch?v=qoSksQ4s_hg&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET

### helpful markdown

[markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)

**bold**

_italics_

### h3

##### h5

```JavaScript
var blue = "bad ice cream"
```

![ice cream](doc-images/ice-cream.jpeg)

| column1 | column2 |
| ------- | ------- |
| ice     | cream   |

### helpful git commands

```Bash
git add .
git commit -m "meaningful message"
git push
```

### notes from videos:

#### video 1

This Video is the introduction to the course  

I'm using Brackets ide and chrome browser

https://brackets.io

#### video 2

HTML - Controls the structure of your web page 
CSS - Controls the presentation/design
JavaScript - Adds behavior and interactivity

JavaScript is a Client Side Language - runs in the browser

The official name for JavaScript is ECMAScript. It's also called ES6 

#### video 3

This video was my first JavaScript Program 

```html
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Hello, World!</title>
    </head>
    <body>
    
        <script>
            alert("Hello, World");
        </script>
    </body>
</html>
```

#### video 4

Paste **small** scripts at the bottom of your content just before the closing body tag

If you had a **larger** script then put it in an external file

```html
<script> src="test.js"></script>
```

#### video 5

Google Developer Tools - right click -> inspect

**Elements** shows the HTML on the page

When you use alerts you must pass a String

#### video 6 

JavaScript is case sensitive  

Each statement ends with a semicolon

New lines are ideally on top of each other, white space or line breaks are not sensitive 

Multi line Comments /* */ or Single line comment //

Runs top to bottom 

#### video 7 

**JavaScript Variables**

Define variables with keyword var 

can't start with a number

weakly typed language - don't have to specify the type of variable

#### video 8 

a number + a String will concatenate it into a String

#### video 9 

reassignment operators

myVar = myVar + 5 is the same as myVar+=5

same for +,-,*,/

myVar++ adds 1

myVar++ will not print out the new value until myVar is called again: order does matter
myVar++ = 26
myVar = 27
++myVar = 28

#### video 10

document.write(variable name) will write the variable to the document 

console.log(variable name) logs variable to console 

good way to test variables or code that you want to output to the console

#### video 11

use booleans to check conditions of certain scenarios 

assignment operator: =
if you want to check validity: == 

7 == 5 
false 

7 == 7 
true 

Boolean keyword: Boolean(7>5) --> true 
Boolean(0) and (-0) is only false number 
Boolean("hello") --> true because the String contains something 

#### video 12

use keyword **if**

``` 
if (myNum == 10){
    
    document.write("myNum is greater than 10");
    
} else{
    
    document.write("myNum is not equal to 10");
    
}
```

#### video 13

can check multiple different conditions by using else if

```
var myAge = 29;

if(myAge > 30){
    
    document.write("you are over 30");
} else if(myAge > 20){
    
    document.write("you are over 20!");   
} else if(myAge > 10){
    
    document.write("you are over 10!");
} else{
    
    document.write("you are not over 10!");
}

```

#### video 14

comparison operators

greater: > 
less: < 
greater than or equal to: >=
less than or equal to: <=
compare two numbers: == 

```
x = "5"
x == 5 
    true because == is only checking the value
```
use the === to check for value in regards to type 

x === 5: false 
x === "5": true

negation operator: !=
x!== will check for value and type again 

#### video 15

logical operators 

&&: and (both have to be true)
||: or (only one has to be true)

```
var myAge = 25; 

if(myAge < 18 || myAge > 30 || myAge === 25){
    
    document.write("You aint coming!");
}else {
 document.write("You can come, you cool dude");   
}

will return You aint coming!
```

#### video 16

while loop: another control flow system 

while(condition is true){
      execute this code
 }
 
#### video 17

for(index variable; condition; incrementor)
    {
    
    
    }
    
#### video 18

keyword **break** will break you out of the loop

keyword **continue** will skip out on remaining code for iteration of current variable 

#### video 19 

#### video 20 

Functions 

groups code together in logical sections and can be called later on when we want to call that function 

to write one, use keyword function 

```
function getAverage(a, b){
    var average = (a+b)/2;
    console.log(average);
    
}

getAverage(7,12);
```
when you're passing in additional numbers, anything additional in the end is ignored 

#### video 21

local vs global 

var foo = 20; - Global Variable (assigned outside the function)
function myFunction(){
    var bar = 10; - Local Variable (can only be used within this function)
}

#### video 22

Numbers

String plus a number concatenates to a String 

Math.round(7.5) - rounds up to 8 
Math.floor(7.9) - rounds down to 7
Math.ceil(7.2) - rounds up to 8 no matter what
Math.max(7,4,9,8) - returns 9 

#### video 23

NaN 
can't multiply a String by a number - will return NaN

use isNaN() to see if its not a number  

#### video 24

Strings 

double quote inside of a string will cancel out a string: to solve this use escape characters 

\' for one single quote 
use single quotes outside and double inside: I'm a "fun" string

.length - gives length of the String 
indexOf("string") returns point at which string is found 
 
toLowerCase(): sees if its equal but not case sensitive 
lowercase letter is always greater than upper case letter

#### video 25

Slicing Strings 

use .slice(2,9); starts at 2nd index ends at 9-1
if you don't specify a second value it cuts it off at the end 

Split Strings 

var tagsArray = tags.split(","): whenever you see a comma i want you to split a string 

#### video 26 

to update values 
myArray[2] = false;

var myArray4 = new Array(5);
myArray4.length --> 5
myArray4.sort() --> sorts in order 
myArray4.reverse() --> puts order in reverse 

#### video 27 

Objects - container which encloses data and behavior together where they belong together 

Strings, numbers, arrays, +more 

can call properties on it using  dot notation

#### video 28 

creating a new JavaScript object 

```
var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function(){console.log("now driving");};

myCar.drive();

//shorthand notation: 
var myCar2 = {maxSpeed: 70,
              driver: "Net Ninja", 
              drive: function(speed, time){console.log(speed*time);
                               }
             };

console.log(myCar2.maxSpeed);
myCar2.drive(50,3);
```

#### video 29 

This Keyword

console.log(this); will log the values of the object

refers to the specific object at the moment 

#### video 30 

Constructor Functions 

```
var Car = function(maxSpeed, driver){
    
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){console.log(speed*time);};
    this.logDriver = function(){console.log("driver name is " + this.driver);};
}

var myCar = new Car(70, "Ninja Man");

myCar.drive(30,5);
myCar.logDriver();
```
#### video 31

Date Object 

create new Date object: var myDate = new Date();
```
var birthday = new Date(1985, 0, 15, 11, 15, 25);
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime()); //returns the number of milliseconds since the first of january 1970
```

#### video 32
- the DOM is an application programming interface 
- Use the DOM when we interact with web pages 

    - Add content to an HTML document 
    - Delete content from a HTML document 
    - Change Content on a HTML document 
    
Document - just the webpage 
OBJECTS - Elements 
    every HTML element in the document is an object 
Model - describes how objects are laid out in a tree fashion 
Nodes - everything we can cange in the document is a node: elements, text within elements, HTML attributes 

What can we do with thw DOM
    - Change the <h1> text node at the top of the page 
    - Change the background color of an element node
    - Animate the nofe from left to right 
    - expand th height of an element node when you click on it
    
#### video 33 
var myContentDivs = document.getElementsByClassName("content"); 
    var myH2 = myContentDivs[1].getElementsbyTagName("h2");
        myH2[0].innerHTML = "YO NINJAS"; gone into the DOM and grabbed which element we want and have changed it
faster way: document.getElementByIf("page-title");

#### video 34

innerHTML - return the whole HTML content within that tag 
.textContent to change whats written 

both properties! not methods

#### video 35

getAttribute(); reads attribute value and sends it back to you 
setAttribute(old, new); updates attribute 
    -can set attributes that dont yet exist 
.className - returns class name
.href - returns full url

#### video 36

changing CSS Styles

var title = document.getElementById("page-title");
title.style.left  = "20px"
title.style.color = "red" 
title.style.background-color = "blue"
    correct: title.style.backgroundColor = "blue"

##### video 37

Adding Elements to the DOM

to create a new element: var newLi = document.createElement("li");
var newA = document.createElement("a");

to add it: menu.appendChild(newLi)
to add text to it: newLi.InnerHTML
insertBefore to move before an element

#### video 38 

Removing elements from the DOM

First Step: grab the element we want to remove and the parent element 
    var parent = document.getElementById("main-nav").getElementsByTagname("ul")[0];
    var child = parent.getElementsByTagName("li")[0];
Second Step: call the method 
    parent.removeChild(child);
    
#### video 39 

JavaScript Events 

onmouseover - recognizes when you hover your mouse over 
onclick - recognizes when clicked 

#### video 40 

The OnClick Event 

store button to click in: var button = document.getElementByid("show-more");

```
button.onclick = function(){
    if(content.className == "open"){
        //shrink the box
        content.className = "";
    }esle{
        // expand the box 
        content.className = "open";
        button.innerHTML = "Show less";
        
    }
    
}
```
