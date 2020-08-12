# JavaScript ES6 Tutorial

from youtube playlist:

https://www.youtube.com/watch?v=0Mp2kwE8xY0&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml

#### video 1

What is ECMAScript 
- A standard for scripting languages, like JavaScript 
- Current version implemented into most browserrs is ES5

EcmaScript 6 
- Latest standardized version of ES
- Includes many new features 
- Not fully supported in all browsers 

#### video 2 

- Constants 

declare a constant with keyword const 

can't redeclare a constant unless you create a local version of the constant 

#### video 3

The Let Keyword 

Only works inside that code block

Only changes value of var inside that code block 

#### video 4

Default parameters - paramaters a function can rely on as a backup if nothing is explicitly passed

```
function log(num=10){
    console.log(num)
}
```

if nothing is passed --> 10 will be logged 

#### video 5 

The spread operator - can take an array and spread it into individual elements 

put three little dots before the element you're spreading

```
var nums1 = [1,2,3];
var nums2 = [...nums1,4,5,6];

console.log(nums2)
```

will log [1,2,3,4,5,6]

#### video 6 

Template strings - use backticks instead of quotation marks to create a string 

What can we do with it?

It doesn't ignor line breaks and white space so you can format the string how you want 

You can embed expressions and variables into strings as well (no concatenation needed)

```
console.log(`my name is ${name} and my age is ${age}`)
```
#### video 7

Object Literal improvements 

Don't always need function keyword, can just be function name and parentheses + brackets 

#### video 8 

New Stirng methods available to us in ES6 

**repeat**
- lets us repeat a string over and over as many times as we want 

**startsWith**
- can check whether a certain string starts with a certain set of characters 
- will return a boolean value depending whether it doesn't start with whats passed or not
- can also pass ("string", a value) to see if a string contains a set of characters starting at a certain index value 

**endsWith**
- can check whether a certain string ends with a certain set of characters 

**includes**
- checks the entire string to see if it contains that series of letters
- reutrns a boolean value

#### video 9 

Arrow Functions 

creates a function without writing as much 

``` var ninjaGreeting = function(){console.log("hiiiiiya");};

var ninjaGreeting = name => console.log(`${name}hiiiiiya`);
```
if you're passing only one paramater, you don't even need parentheses around it

#### video 10

Sets 

```
var names = new Set();

```

.add method will add element to the set 

if you .add the same thing twice it will delete the duplicate 

.size returns the size of the set 

.delete will delete an element and size will go down
    - .delete... and .delete again is not a function how it is with .add
    
.clear will clear the whole set 

.has will return a boolean if the set has that element


