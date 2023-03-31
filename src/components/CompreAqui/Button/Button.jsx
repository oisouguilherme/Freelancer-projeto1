import './Button.css'

export function Button({text, func}){
  return(
    <a href="#" target='_blank'>
      <button onClick={func}
      className='button-style'>{text}</button>
    </a>
  )
}