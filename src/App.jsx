import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRouter } from './router/AppRouter'
import { Navegacion } from './components/Navegacion'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navegacion/>
      <AppRouter/>
    </>
  )
}

export default App
