import PopUp from './PopUp/PopUp'
import './sobre.css'
import SobrePoints from './SobrePoints/SobrePoints'

function Sobre(){
    return(
        <div className='sobre'>
            <div className='sobre-points'>
                <SobrePoints 
                textNeg={"Você não vai aprender a vender em rede social"}
                text={`, vai aprender técnicas que funcionam em qualquer canal, presencial ou on-line.`} />
                <SobrePoints
                textNeg={"Não é só negociação"}
                text={", vai aprender técnicas que te ajudarão a chegar no “sim” do seu lead"} />
                <SobrePoints 
                textNeg={"Não é só gatilhos mentais"}
                text={", é uma série de temas que todo vendedor precisa dominar"} />
                <SobrePoints
                textNeg={"Não seja só uma pessoa que envia proposta"}
                text={", você vai aprender diversas formas de abordar o seu possível cliente"} />
                <SobrePoints
                textNeg={"Não é passo a passo"}
                text={", você irá aprender a criar o seu processo para com base na realidade ou do seu negócio"} />            
            </div>
            <div>
                <PopUp />
            </div>
        </div>
    )
}

export default Sobre