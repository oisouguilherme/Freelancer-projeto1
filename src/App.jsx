import Logo from './assets/logo.png'
import './App.css'
import './App.css'
import Header from './components/Header/Header'
import BoxFunction from './components/BoxFunction/BoxFunction'
import Sobre from './components/Sobre/Sobre'
import SobreCurso from './components/SobreCurso/SobreCurso'
import ParaQuem from './components/ParaQuem/ParaQuem'
import Perguntas from './components/Perguntas/Perguntas'
import CompreAqui from './components/CompreAqui/CompreAqui'
import Footer from './components/Footer/Footer'
import ButtonWpp from './components/ButtonWpp/ButtonWpp'

function App() {

  return (
    <div className="App">
      <Header />
      <BoxFunction />
      <Sobre />
      <SobreCurso/>
      <ParaQuem/>
      <CompreAqui />
      <Perguntas/>
      <Footer />
      <ButtonWpp/>
    </div>
  )
}

export default App
