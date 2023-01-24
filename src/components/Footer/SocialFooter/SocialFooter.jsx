import './SocialFooter.css'
import LogoFooter from '../../../assets/logo-footer.png'
import Instagran from '../../../assets/instagram.svg'
import Linkedin from '../../../assets/linkedin.svg'
import Facebook from '../../../assets/facebook.svg'
import Whatsapp from '../../../assets/whatsapp.svg'

function SocialFooter(){
    return(
        <div className='social-footer'>
            <img src={LogoFooter} alt="" />
            <div className='social-media'>
                <a href=""><img src={Instagran} alt="" /></a>
                <a href=""><img src={Linkedin} alt="" /></a>
                <a href=""><img src={Facebook} alt="" /></a>
                <a href=""><img src={Whatsapp} alt="" /></a>
            </div>
        </div>
    )
}
export default SocialFooter