import Plus from '../../../assets/plus.svg'
import './Pergunta.css'

function Pergunta({pergunta, resposta}){
    return(
        <div>
            <div className='pergunta'>
                    <img src={Plus} alt="" />
                <section>
                    <details>
                        <summary>{pergunta}</summary>
                        <p>
                            {resposta}
                        </p>
                    </details>
                </section>
            </div>           
        </div>
    )
}

export default Pergunta