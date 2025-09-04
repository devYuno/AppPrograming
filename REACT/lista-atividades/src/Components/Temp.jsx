// import { useState, useEffect } from "react"

// export const Temporizador = () => {
//     const [time, setTime] = useState(new Date())
    
//       useEffect(() => {
//         const interval = setInterval(() => setTime(new Date()), 1000)
//         return () => clearInterval(interval)
//       }, [])

//     const start = () => {
//         const segundos = document.getElementById('input')
//         alert(segundos.value)
//     }

//     return (
//         <>
//             <div className="blocotemp">
//                 <h1>Temporizador</h1>
//                 <h3>Digite o tempo em segundos:</h3>
//                 <div style={{display: "flex"}}>
//                     <input type="number" id="input" />
//                     <button onClick={start} className="start">Start</button>
//                 </div>
//                 <time style={{ fontWeight: 'bold', fontSize: 40 }} dateTime={time.toISOString()}>
//                     {time.toLocaleTimeString()}
//                 </time>

//             </div>

//         </>
//     )
// }

import { useState, useEffect } from "react";

export const Temporizador = () => {
  const [segundos, setSegundos] = useState(0);
  const [contador, setContador] = useState(0);
  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    if (!rodando) return;

    if (contador <= 0) {
      setRodando(false);
      return;
    }

    const timerId = setTimeout(() => {
      setContador(contador - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [contador, rodando]);

  const start = () => {
    if (segundos > 0) {
      setContador(segundos);
      setRodando(true);
    } else {
      alert("Digite um número maior que 0");
    }
  };

  return (
    <div>
      <h1>Temporizador</h1>
      <input
        type="number"
        value={segundos}
        onChange={(e) => setSegundos(Number(e.target.value))}
        placeholder="Segundos"
      />
      <button onClick={start} disabled={rodando}>
        Start
      </button>
      <div style={{ fontWeight: "bold", fontSize: 40 }}>
        {contador} s
      </div>
    </div>
  );
};
