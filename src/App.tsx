import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddExercises from './sections/AddExercises'
import AppLayout from './components/AppLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppLayout>
      <AddExercises />
    </AppLayout>
  )
}

export default App
