import './PopUP.css'
import ArrowLeft from '../../../assets/arrow-up-left.svg'
import Star from '../../../assets/stars.svg'
function PopUp(){
    return(
        <div className='popUp'>
            <div className='img'>
                <img src={ArrowLeft} alt="" />
            </div>
            <h2>Não é um curso de vendas para redes sociais</h2>
            <p>São técnicas e estratégias que funcionam em diversos canais e no WhatsApp</p>
            <img className='star' src={Star} alt="" />
        </div>
    )
}

export default PopUp