import REACT from 'react'
import REACTDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return(
        // <div>
        //     <h1>Custom App !</h1>
        // </div>
        <App />
    )
}

// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'http://google.com',
//         target : '_blank'
//     }, children : 'Click me to visit Google'
// }

const anotherElement = "chai aur code"

const anotherUser = (
    <a href="https://google.com" target='_blank'>Click to visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotherElement
)

REACTDOM.createRoot(document.getElementById('root')).render(
    <MyApp />

    // reactElement
)
