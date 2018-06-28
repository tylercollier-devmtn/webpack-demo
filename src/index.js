import React from 'react'
import ReactDOM from 'react-dom'
import world from './world'
import './style.css'
import App from './App.js'

ReactDOM.render(<App>{world.phrase}</App>, document.querySelector('#root'))
console.log('hi')