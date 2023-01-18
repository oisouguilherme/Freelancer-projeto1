import './CompreAqui.css'
import Payment from '../../assets/payments.svg'

function CompreAqui(){
    return(
        <div className='button-compra'>
            <p>
                <span>Clique no botão abaixo</span> e dê o primeiro passo para a criação de um
                negócio que vende em escala, com alta margem de lucro e que tende a
                crescer exponencialmente ao longo tempo.
            </p>
            <button>Fazer inscrição</button>
            <img src={Payment} alt="" />
        </div>
    )
}

export default CompreAqui