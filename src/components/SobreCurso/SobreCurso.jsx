import "./SobreCurso.css";
import ImagemPessoal from "../../assets/ulisses.jpeg";

function SobreCurso() {
  return (
    <div className="sobreContain">
      <div className="sobre-curso">
        <h2>
          De onde veio o <br /> VQC WhatsApp ?
        </h2>
        <p>
          Se você ainda não vende pelo WhatsApp, em pouco tempo ficará para
          trás. Isso porque o potencial da ferramenta em gerar vendas é imenso.
          Hoje, no Brasil são 147 milhões de usuários de todas as idades.
          Imagine se cada um deles fosse um potencial cliente seu!
        </p>
      </div>
      <div className="img-curso">
        <img src={ImagemPessoal} alt="" />
      </div>
    </div>
  );
}

export default SobreCurso;
