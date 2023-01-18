import './PopUP.css'
import ArrowLeft from '../../../assets/arrow-up-left.svg'
import Star from '../../../assets/stars.svg'
function PopUp(){
    return(
        <div className='popUp'>
            <div className='img'>
                <img src={ArrowLeft} alt="" />
            </div>
            <h2>Isso não é um curso comum.</h2>
            <p>É uma estratégia completa, mas não complexa</p>
            <img className='star' src={Star} alt="" />
        </div>
    )
}

export default PopUp