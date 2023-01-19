import './SobrePoints.css'
import Check2 from '../../../assets/check2-all.svg'
function SobrePoints({textNeg,text}){
    return(
        <div className='button-component'>
            <div className='button-check'>
                <img src={Check2} alt="" />
            </div>
            <div className='text-check'>
                <p><span>{textNeg}</span>{text}</p>
            </div>
        </div>
    )
}

export default SobrePoints