import './SocialFooter.css'
import LogoFooter from '../../../assets/logo.png'
import Instagran from '../../../assets/icons/instagram.svg'
import YouTube from '../../../assets/icons/youtube.svg'

function SocialFooter(){
    return(
        <div className='p'>
            <div className='social-footer'>
                <img src={LogoFooter} alt="" />
                <div className='social-media'>
                    <a href="https://www.instagram.com/oulissesalmeida/" target={'_blank'}><img src={Instagran} alt="link para instagram do Ulisses" /> oulissesalmeida</a>
                    <a href="https://www.youtube.com/@oulissesalmeida"><img src={YouTube} alt="Meu canal no YouTube" />Ulisses Almeida</a>
                </div>
            </div>
                    <p>© 2023 Venda qualquer coisa - Todos os direitos reservados.</p>
        </div>
    )
}
export default SocialFooter