import { useState, useEffect } from "react"

export const Temporizador = () => {
    const [time, setTime] = useState(new Date())
    
      useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(interval)
      }, [])

    const start = () => {
        const segundos = document.getElementById('input')
        alert(segundos.value)
    }

    return (
        <>
            <div className="blocotemp">
                <h1>Temporizador</h1>
                <h3>Digite o tempo em segundos:</h3>
                <div style={{display: "flex"}}>
                    <input type="number" id="input" />
                    <button onClick={start} className="start">Start</button>
                </div>
                <time style={{ fontWeight: 'bold', fontSize: 40 }} dateTime={time.toISOString()}>
                    {time.toLocaleTimeString()}
                </time>

            </div>

        </>
    )
}