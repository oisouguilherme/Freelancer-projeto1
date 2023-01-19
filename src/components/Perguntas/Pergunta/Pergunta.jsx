import Plus from '../../../assets/plus.svg'
import './Pergunta.css'

function Pergunta(){
    return(
        <div>
            <div className='pergunta'>
                    <img src={Plus} alt="" />
                <section>
                    <details>
                        <summary>O perpétuo pode atrapalhar o resultado do lançamento?</summary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis 
                            facere quisquam similique cum laudantium dolorem vitae accusamus iste 
                            corrupti atque possimus voluptatum placeat, illum, deleniti fuga rerum 
                            modi est aliquid.
                        </p>
                    </details>
                </section>
            </div>           
        </div>
    )
}

export default Pergunta