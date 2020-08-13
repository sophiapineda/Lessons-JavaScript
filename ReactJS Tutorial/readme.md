# ReactJS Tutorial 

from youtube playlist:

https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3


#### video 1

What is React? 
    - open source library for building UI
    - Not a framework
    - Focus on UI
    - Rich ecosystem and plays really well with other libraries

Component Based Architecture 

React is declarative 
    - tell react what you want and React will build the actual UI
    
Prerequisties
    - HTML, CSS and JavaScript fundamentals 
    - ES6
    - JavaScript 'this' keyword, filter, map and reduce 
    - ES6 - let & const, arrow functions, template literals, default parameters, object literals, spread operators and destructuring assignment

#### video 2 

In this video, we installed our first react app

```bash
npx create-react-app hello-world
cd ./hello-world
npm start
```
#### video 3

Went through the purposes of all the files 

#### video 4

Components - a piece of the app

Component in Code 
    - usually placed in a JavaScript file

Component Types:
    - Stateless Functional Component
        - JavaScript Functions
    - Stateful Class Component
        - Class extending Component Class
        - Render method returning HTML

Summary:
Components describe a part of the UI
They are re-usable and can be nested inside other components 
Two types: functional and class

#### video 5

Functional Components
Are JavaScript Functions that accepts an input of properties and returns HTML that determines the UI

I wrote my first functional component 

```JavaScript
import React from 'react'

// function Greet(){
//     return<h1>Hello Sophia</h1>
// }

const Greet = () => <h1>Hello Sophia</h1>


export default Greet
```

#### video 6

Class Components - ES6 Class 

Can recieve props as input and return HTML
```JavaScript 
import React, { Component } from 'react'

class Welcome extends Component{
    render(){

        return <h1>Class Component</h1>
    }
}

export default Welcome
```

Functional vs Class components 

Functional: Simple Functions, use as much as possible 
First advantage: absence of 'this' keyword
Solution without using state 
Mainly responsible for the UI

Class
More feature rich 
Can maintain their own private data - state 
Complex UI logic 
Provide lifecycle hooks 
Stateful/smart/container 

