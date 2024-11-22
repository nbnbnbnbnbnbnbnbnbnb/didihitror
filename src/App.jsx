import { useState } from 'react'
import ProgressiveTimer from './ProgressiveTimer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='message'>
        <h1>YES!!</h1>
        <div className="card">
          <ProgressiveTimer />
          <video controls style={{ width: '644px', height: '574px' }}>
            <source src="./public/Medal_M4iqylRF3D.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}

export default App
