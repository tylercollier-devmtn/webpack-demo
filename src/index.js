import world from './world'
import './style.css'

document.querySelector('#root').innerHTML = `
  <h1>${world.phrase}</h1>
`