import './CompreAqui.css'
import Payment from '../../assets/payments.svg'

function CompreAqui(){
    return(
        <div className='button-compra'>
            <p>
                <span>Clique no botão abaixo</span> e dê o primeiro passo 
                para ter sucesso em vendas.
            </p>
            <button>Fazer inscrição</button>
            <img src={Payment} alt="" />
        </div>
    )
}

export default CompreAqui