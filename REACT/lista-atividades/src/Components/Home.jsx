import './style.css'

export const Home = () => {
    return (
        <>
            <div className="home">
                <h1>Atividades</h1>
                <ol style={{
                     fontWeight: 'bold',
                     fontSize: 20,
                     listStylePosition: 'outside',
                     paddingLeft: 40
                }}>
                    <li>Relógio digital --------- /relogio   </li>
                    <li>Temporizador --- /temporizador</li>
                    <li>Contador ------------- /contador</li>
                    <li>Alterar Titulo ----------- /alterar</li>
                </ol>
            </div>
        </>
    )
}