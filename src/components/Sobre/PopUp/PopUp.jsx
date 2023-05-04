import './PopUP.css'
import ArrowLeft from '../../../assets/icons/arrow-up-left.svg'
import Star from '../../../assets/icons/stars.svg'
function PopUp(){
    return(
        <div className='popUp'>
            <div className='img'>
                <img src={ArrowLeft} alt="" />
            </div>
            <h2>Hoje você está completamente satisfeito com o uso do WhatsApp dentro da sua empresa?</h2>
            <p>Se acha que não, esse curso é para você.</p>
            <img className='star' src={Star} alt="" />
        </div>
    )
}

export default PopUp