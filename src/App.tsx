import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddExercises from './sections/AddExercises'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AddExercises />
      </div>
    </>
  )
}

export default App
