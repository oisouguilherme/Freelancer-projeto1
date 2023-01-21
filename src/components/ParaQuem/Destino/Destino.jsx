import './Destino.css'

function Destino({text}){
    return(
        <div className='destino'>
            <p>{text}</p>
            <div className="linha-horizontal"></div>
        </div>
    )
}

export default Destino