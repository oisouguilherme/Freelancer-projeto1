import './CompreAqui.css'
import Payment from '../../assets/icons/payments.svg'
import { Button } from './Button/Button'

function CompreAqui(){
    return(
        <div className='button-compra'>
            <p>
                <span>Clique no botão abaixo</span> e dê o primeiro passo para ter sucesso em vendas pelo WhatsApp
            </p>
            <Button text={"Fazer inscrição"}/>
            <img src={Payment} alt="" />
        </div>
    )
}

export default CompreAqui