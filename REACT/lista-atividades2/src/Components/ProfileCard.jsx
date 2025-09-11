import "./style.css"

export const ProfileCard = ({nome, idade, profissao, cor}) =>
{
    return (
        <div className='card space' style={{backgroundColor: cor}}>
            <div className="conteudo start">
                <div className="conteudo start">
                    <h2 className="title margin-menos">Bosch</h2>
                </div>
                <div className="conteudo start">
                    <h5 className="title">Nome:  {nome}</h5>
                    <h5 className="title">Idade:  {idade}</h5>
                    <h5 className="title">Profissão:  {profissao}</h5>
                </div>
            </div>  
            <div className="container-foto start">
                <div className="foto">Foto</div>
            </div>    
        </div>
    )
}