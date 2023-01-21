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
                        Chegou o momento de você alcançar um novo nível em sua carreira, para isso, 
                        precisa aprender a vender, essa é a sua melhor oportunidade.
                    </h1>
                    <p>
                        Nesse curso você vai <span>aprender diversas técnicas de vendas valiosas </span>  
                          que podem alavancar os seus resultados, seja dentro do seu 
                        negócio ou como vendedor contratado. Aulas diretas e com exemplos para 
                        que internalize o conteúdo ensinado.
                    </p>
                    <img src={Arrow} alt="" />
                </div>
                <div className='header-2'>  
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/oSixqq-Fi-I" title="CELLBIT SOBRE A SÉRIE THE LAST OF US VIRAR MODINHA!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p>
                        Se você chegou até essa página é porque tem interesse em aprender a vender. 
                        Deu um passo importante, mas não é o suficiente precisa fazer sua inscrição, 
                        se ainda está com dúvida se esse curso é para você, peço que assista apenas 
                        os 3 primeiros minutos desse vídeo, depois disso, pode decidir se irá dar o 
                        passo seguinte e fazer a sua inscrição ou deixar a página.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header