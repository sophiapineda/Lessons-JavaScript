import React from 'react'

const Hello = () => {
//    return (
//        <div>
//            <h1>Hello Sophia</h1>
//       </div>
//    )
    return React.createElement(
        'div',
         {id: Hello, class: 'dummyClass'}, 
         React.createElement('h1', null, 'Hello Sophia')
         )
}

export default Hello 