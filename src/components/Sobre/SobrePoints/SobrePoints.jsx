import './SobrePoints.css'
import Check2 from '../../../assets/check2-all.svg'
function SobrePoints(){
    return(
        <div className='button-component'>
            <div className='button-check'>
                <img src={Check2} alt="" />
            </div>
            <div className='text-check'>
                <p> <span>✖️ Lorem ipsum, dolor</span> sit amet consectetur adipisicing elit. Est aliquid deleniti sint omnis nemo, vel repudiandae architecto.</p>
            </div>
        </div>
    )
}

export default SobrePoints