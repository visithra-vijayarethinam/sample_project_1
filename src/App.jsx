import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './nav.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
 <>
    <Nav />
   <div class="main">
    <h1>This is visithra </h1>
   </div>
   </> 
   
  )
}

export default App
