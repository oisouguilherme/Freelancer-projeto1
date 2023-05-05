import "./SobreCurso.css";
import ImagemPessoal from "../../assets/ulisses.png";

function SobreCurso() {
  return (
    <div className="sobreContain">
      <div className="sobre-curso">
        <h2>Com quem vai aprender</h2>
        <p>
          Sou Ulisses, formado em Engenharia, especialista em administração
          estratégica, tenho cursos de marketing e vendas pela ESPM, O Novo
          Mercado, RD Station e Empiricus. Trabalho com comunicação e vendas há
          8 anos.
        </p>
      </div>
      <div className="img-curso">
        <img src={ImagemPessoal} alt="" />
      </div>
    </div>
  );
}

export default SobreCurso;
