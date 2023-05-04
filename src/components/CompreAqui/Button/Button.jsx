import { Link } from 'react-scroll'
import './Button.css'

export function Button({text, func}){
  return(
    <Link to="boxCompra" smooth={true} target='_blank'>
      <button onClick={func}
      className='button-style'>{text}</button>
    </Link>
  )
}