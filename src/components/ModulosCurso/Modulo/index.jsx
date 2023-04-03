import './Modulo.css'
import { ItemLista } from '../Modulo/Itemlista';

export function Modulo({modulo, title, children, children2, children3, children4, children5}){
  return(
    <div className='modulo-container'>
      <p >{modulo}</p>
      <p>{title}</p>
      <ul>
        {children}
        {children2}
        {children3}
        {children4}
        {children5}
      </ul>
    </div>
  )
}