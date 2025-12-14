import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ParentContainer } from './components/ParentContainer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParentContainer />
    </>
  )
}

export default App
