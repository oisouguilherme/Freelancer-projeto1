import PopUp from './PopUp/PopUp'
import './sobre.css'
import SobrePoints from './SobrePoints/SobrePoints'

function Sobre(){
    return(
        <div className='sobre'>
            <div className='sobre-points'>
                <SobrePoints />
                <SobrePoints />
                <SobrePoints />
                <SobrePoints />
                <SobrePoints />
                <SobrePoints />
            </div>
            <div>
                <PopUp />
            </div>
        </div>
    )
}

export default Sobre