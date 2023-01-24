import './buttonWpp.css'
import Whatsapp from '../../assets/whatsapp-button.svg'

function ButtonWpp(){
    return(
        <div className="buttonWpp">
            <div className='teste'>
                <a href=""><img src={Whatsapp} alt="" /></a>
                
            </div>
        </div>
    )
}

export default ButtonWpp