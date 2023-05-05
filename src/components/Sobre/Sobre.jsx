import "./sobre.css";
import SobrePoints from "./SobrePoints/SobrePoints";

function Sobre() {
  return (
    <div className="sobre">
      <div className="sobre-title">
        <h2>
          Hoje você está completamente satisfeito com o uso do WhatsApp dentro
          da sua empresa?
        </h2>
        <p>Se acha que não, esse curso é para você.</p>
      </div>
      <div className="sobre-points">
        <SobrePoints
          textNeg={"Você não vai aprender a vender em rede social"}
          text={`, vai aprender técnicas que funcionam em qualquer canal, com foco no WhatsApp.`}
        />
        <SobrePoints
          textNeg={"Não é só negociação"}
          text={
            ", vai aprender técnicas que te ajudarão a chegar no “sim” do seu lead através dos gatilhos mentais."
          }
        />
        <SobrePoints
          textNeg={"Não é só negociação no WhatsApp"}
          text={", é uma série de temas que todo vendedor precisa dominar"}
        />
        <SobrePoints
          textNeg={"Não seja só uma pessoa que envia proposta"}
          text={
            ", você vai aprender diversas formas de abordar o seu possível cliente"
          }
        />
        <SobrePoints
          textNeg={"Não é passo a passo de vendas no WhatsApp, "}
          text={
            "você irá aprender a criar o seu processo com base na realidade ou do seu negócio"
          }
        />
      </div>
    </div>
  );
}

export default Sobre;
