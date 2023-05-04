import pagamento from "../../assets/icons/payments.svg";
import './BoxCompra.css'

export function BoxCompra() {
  return (
    <section id="boxCompra" className="boxCompra-container">
      <div className="box-compra">
        <p className="title-compra">
          E qual o <span>valor?</span>{" "}
        </p>
        <p>
          Tudo isso por um investimento
          <br /> de:
        </p>
        <p className="risk">R$ 497,00</p>
        <p>Por apenas:</p>
        <p className="preco">
          <span>2x </span>
          R$ 97,00
        </p>
        <div className="comprar">
          <a className="botao-compra" href="https://pay.kiwify.com.br/QFqPUJI" target="_blank">
            Comprar agora
          </a>
          <img src={pagamento} alt="" />
        </div>
      </div>
    </section>
  );
}
