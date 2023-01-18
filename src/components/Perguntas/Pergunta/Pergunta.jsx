import Plus from '../../../assets/plus.svg'
import './Pergunta.css'

function Pergunta(){
    return(
        <div>
            <div className='pergunta'>
                <img src={Plus} alt="" />
                <p>O perpétuo pode atrapalhar o resultado do lançamento?</p>

            </div>           
        </div>
    )
}

export default Pergunta