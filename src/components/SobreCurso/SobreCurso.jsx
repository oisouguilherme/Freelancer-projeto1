import './SobreCurso.css'
import ImagemPessoal from '../../assets/ulisses.jpg'

function SobreCurso(){
    return(
        <div className='sobreContain'>
            <div className="sobre-curso">
                <h2>De onde veio o <br /> VQC WhatsApp ?</h2>
                <p>
                    <strong>Você em algum momento sentiu que não estava preparado para a função que te 
                    colocaram? </strong>
                    Se sim, temos uma ligação, porque compartilhamos de um mesmo sentimento, mesmo que tenhamos histórias diferentes. Vou te contar porque me senti assim, no meu primeiro emprego, fui contratado para uma função, não era de vendedor ou como gostam de chamar, comercial.
                </p>
                <p>
                    Porém, esta me foi dada assim que o cargo ficou vago, eu sem saber técnicas de vendas assumi a função, tinha apenas a coragem, vontade de aprender e queria ganhar um melhor salário e chance de crescer internamente na empresa. No início só mostraram qual era o serviço a ser vendido, mas as técnicas e processos ficaram de lado. Aprendi na prática com os erros, em sua maioria, e também com os poucos acertos a vender, negociar e relacionar com os clientes, principalmente pelo WhatsApp.
                </p>
                <p>
                    Com o passar dos anos, decidi que queria mais. 
                    Não sei se já notou, mas grande parte dos empreendedores atuais começaram a vida empreendedora vendendo. A lista é extensa, vou te dar alguns nomes; Flávio Augusto, Geraldo Rufino, Alexandre Costa e Robison Shiba. 
                    <strong> Conhece algum desses nomes?</strong>
                </p>
                <p>
                    Como disse, queria mais, deixei a empresa a qual fazia parte e fundei meu primeiro negócio, uma agência de marketing digital para negócios locais, hoje o termo é conhecido, há 4 anos atrás no interior de Minas Gerais os empresários mal sabiam o que eram marketing digital. Não desisti.
                </p>
                <p>
                    Com a habilidade em vendas que desenvolvi pude fazer o meu negócio alavancar e ajudar empresários de vários seguimentos a aumentarem as suas vendas. Teve um caso – se preferir, leia case - que sempre gosto de lembrar, em uma reinauguração nós – meu time - ajudamos um empresário do seguimento de varejo a vender em 3 dias o que costumeiramente faria em 30 dias.
                </p>
                <p>
                    Como disse Grant Cardone em seu livro Venda ou Seja Vendido; <strong>“não importa qual 
                    a sua profissão, para ser bem-sucedido é preciso aprender a se vender.” </strong> 
                    Assim como Grant também acredito que para ter sucesso é preciso saber vender.
                    Sempre que olho a minha história percebo que vender meus sonhos, serviços e 
                    projetos mudou a minha vida. Por isso, decidi dar um novo passo e ajudar mais 
                    pessoas como você a mudar de vida através das vendas, assim criei o 
                    <strong> Venda Qualquer Coisa.</strong> 
                </p>
                
            </div>
            <div className='img-curso'>
                <img src={ImagemPessoal} alt="" />
                <p>
                Como disse Grant Cardone em seu livro Venda ou Seja Vendido; 
                “não importa qual a sua profissão, para ser bem-sucedido é 
                preciso aprender a se vender.”
                </p>
            </div>
        </div>
    )
}

export default SobreCurso