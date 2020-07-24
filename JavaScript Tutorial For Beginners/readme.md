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


    
