import './Header.css'
import Logo from '../../assets/logo.png'
import Arrow from '../../assets/arrow-right.svg'

function Header () {
    return(
        <div className='header'>
            <img src={Logo} alt="" />
            <div className="container">
                <div className='header-1'>
                    <h1>
                        O WhatsApp está se tornando a maior ferramenta de vendas do mercado e chegou a hora de você aprender a usá-lo para aumentar as suas vendas.
                    </h1>
                    <p>
                        Nesse curso você vai <span>aprender diversas técnicas de vendas valiosas </span>  
                        que podem alavancar os seus resultados nas vendas pelo WhatsApp. Aulas diretas e com exemplos para que internalize o conteúdo ensinado.
                    </p>
                    <img src={Arrow} alt="" />
                </div>
                <div className='header-2'>  
                <iframe width="100%" height="300" src="https://www.youtube.com/embed/WC2ByB6mngg" title="Ainda tem dúvidas se o VQC é para você? Assista!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p>
                        Se você chegou até essa página é porque tem interesse em aprender a vender mais pelo WhatsApp. Deu um passo importante, mas não é o suficiente precisa fazer sua inscrição, se ainda está com dúvida se esse curso é para você, peço que assista apenas os 3 primeiros minutos desse vídeo, depois disso, pode decidir se irá dar o passo seguinte e fazer a sua inscrição ou deixar a página.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header