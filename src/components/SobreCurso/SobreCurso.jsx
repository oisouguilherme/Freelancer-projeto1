import './SobreCurso.css'
import ImagemPessoal from '../../assets/imagem-test.jpg'

function SobreCurso(){
    return(
        <div className='sobreContain'>
            <div className="sobre-curso">
                <h2>De onde veio o <br /> VTD?</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus, facere id! Velit sit repudiandae ipsum, sapiente 
                    perspiciatis rerum in magnam quo adipisci optio architecto 
                    eius quisquam iure, aliquid accusamus reprehenderit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus, facere id! Velit sit repudiandae ipsum, sapiente 
                    perspiciatis rerum in magnam quo adipisci optio architecto 
                    eius quisquam iure, aliquid accusamus reprehenderit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus, facere id! Velit sit repudiandae ipsum, sapiente 
                    perspiciatis rerum in magnam quo adipisci optio architecto 
                    eius quisquam iure, aliquid accusamus reprehenderit.
                </p>
                
            </div>
            <div className='img-curso'>
                <img src={ImagemPessoal} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus, facere id! Velit sit repudiandae ipsum, sapiente 
                    perspiciatis.
                </p>
            </div>
        </div>
    )
}

export default SobreCurso