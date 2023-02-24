import './SocialFooter.css'
import LogoFooter from '../../../assets/logo-footer.png'
import Instagran from '../../../assets/instagram.svg'
import Whatsapp from '../../../assets/whatsapp.svg'

function SocialFooter(){
    return(
        <div className='p'>
            <div className='social-footer'>
                <img src={LogoFooter} alt="" />
                <div className='social-media'>
                    <a href="https://www.instagram.com/oulissesalmeida/"><img src={Instagran} alt="link para instagram do Ulisses" /> oulissesalmeida</a>
                    <a href=""><img src={Whatsapp} alt="Meu Whatsapp para contato" />(38) 9999-9999</a>
                </div>
            </div>
                    <p>© 2023 Venda qualquer coisa - Todos os direitos reservados.</p>
        </div>
    )
}
export default SocialFooter