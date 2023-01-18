import './Header.css'
import Logo from '../../assets/logo.png'
import Arrow from '../../assets/arrow-right.svg'

function Header () {
    return(
        <div className='header'>
            <img src={Logo} alt="" />
            <div className="container">
                <div className='header-1'>
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus aliquid quae velit excepturi id assumenda culpa.</h1>
                    <p>
                        molestiae, acere Lorem ipsum dolor sit 
                        <span>laboriosam nam tempora quam iusto iste ut mollitia debitis amet consectetur </span>
                        adipisicing elit. Iure cupiditate, 
                        adipisci asperiores veritatis laudantium, cum voluptatem dolore qui blanditiis.
                    </p>
                    <img src={Arrow} alt="" />
                </div>
                <div className='header-2'>  
                    <video width="580" height="340" controls >
                        <source src="https://www.youtube.com/watch?v=ap0_hrlt4lc" type="video/mp4"/>
                    </video>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione beatae tempora 
                        nam eveniet culpa .sed neque autem. Debitis neque libero aperiam non vel ut beatae quae 
                        illo laborum accusamussed neque autem. Debitis neque libero aperiam non vel ut beatae quae 
                        illo laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default Header