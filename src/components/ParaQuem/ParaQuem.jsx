import Destino from './Destino/Destino'
import './ParaQuem.css'
import Arrow from '../../assets/icons/arrow-down.svg'

function ParaQuem(){
    return(
        <div className='container-geral'>
            <h2>Se você ainda não vende pelo WhatsApp, em pouco tempo ficará para trás. Isso porque o potencial da ferramenta em gerar vendas é imenso. Hoje, no Brasil são 147 milhões de usuários de todas as idades. Imagine se cada um deles fosse um potencial cliente seu!</h2>
            <div className='container-destino'> 
                <div>
                    <div className='text-container'>
                        <h2>São muitas as vantagens</h2>
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
                    <Destino text={"147 milhões de usuários"} />
                    <Destino text={"Transferência dentro do aplicativo"} />
                    <Destino text={"Mensagens instantâneas"} />
                    <Destino text={"Prospecção de mais clientes"} />
                    <Destino text={"Grupos, Listas e comunidade exclusiva"} />
                </div>

            </div>
        </div>
    )
}

export default ParaQuem