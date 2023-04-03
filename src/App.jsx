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
import { BotaoFixo } from './components/BotaoFixo/BotaoFixo'
import { ModulosCurso } from './components/ModulosCurso'

function App() {
  return (
    <div className="App">
      <BotaoFixo />
      <Header />
      <BoxFunction />
      <Sobre />
      <SobreCurso/>
      <ParaQuem/>
      <ModulosCurso />
      <CompreAqui />
      <Perguntas/>
      <Footer />
      <ButtonWpp/>
    </div>
  )
}

export default App
