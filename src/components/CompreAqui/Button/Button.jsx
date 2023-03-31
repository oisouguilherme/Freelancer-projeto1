import './Button.css'

export function Button({text}){
  return(
    <a href="#" target='_blank'>
      <button className='button-style'>{text}</button>
    </a>
  )
}