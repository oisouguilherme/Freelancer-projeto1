import Destino from './Destino/Destino'
import './ParaQuem.css'
import Arrow from '../../assets/arrow-down.svg'

function ParaQuem(){
    return(
        <div className='container-destino'>
            <div >
                <div className='text-container'>
                    <h2>A quem se destina</h2>
                    <img src={Arrow} alt="" />
                </div>
                <div className='balls'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                </div>
            </div>
            <div className='destino'>
                <Destino />
                <Destino />
                <Destino />
                <Destino />
                <Destino />
            </div>
        </div>
    )
}

export default ParaQuem