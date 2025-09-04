import { useState, useEffect } from 'react'
import './style.css'

export const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
        <div className='bloco'>
            <h1>Relógio:</h1>
            <time style={{ fontWeight: 'bold', fontSize: 40 }} dateTime={time.toISOString()}>
                {time.toLocaleTimeString()}
            </time>
        </div>
    </>
  )
}
