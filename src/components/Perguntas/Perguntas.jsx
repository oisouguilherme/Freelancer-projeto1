import Pergunta from './Pergunta/Pergunta'
import './Perguntas.css'

function Perguntas(){
    return(
        <div className='perguntas'>
            <h2>Perguntas frequentes</h2>
            <Pergunta pergunta={"Como são as aulas?"} 
            resposta={"As aulas são gravadas em alta qualidade para que você consiga ver no seu tempo."}/>
            <Pergunta pergunta={"Por quanto tempo terei acesso?"} 
            resposta={"Você terá 1 ano de acesso ao curso."}/>
            <Pergunta pergunta={"Como posso tirar minhas dúvidas?"} 
            resposta={"Dentro da plataforma nós iremos disponibilizar um espaço para que tire suas dúvidas"}/>
            <Pergunta pergunta={"Como saber se o curso é para mim?"} 
            resposta={"Se precisa que mais pessoas contratem seu serviço ou compre seu produto, o VQC é para você."}/>
            <Pergunta pergunta={"Tem algum material extra?"} 
            resposta={"Algumas aulas terão material de apoio para que solidifique todo o conhecimento."}/>
            
        </div>
    )
}

export default Perguntas