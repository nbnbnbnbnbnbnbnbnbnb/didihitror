import { useState } from 'react'
import ProgressiveTimer from './ProgressiveTimer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='message'>
        <h1>NO</h1>
        <div className="card">
          <ProgressiveTimer />
        </div>
      </div>
    </>
  )
}

export default App
