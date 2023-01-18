import Pergunta from './Pergunta/Pergunta'
import './Perguntas.css'

function Perguntas(){
    return(
        <div className='perguntas'>
            <h2>Q&A de Valor</h2>
            <Pergunta />
            <Pergunta />
            <Pergunta />
            <Pergunta />
            <Pergunta />
        </div>
    )
}

export default Perguntas