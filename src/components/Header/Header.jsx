import "./Header.css";
import Logo from "../../assets/logo.png";
import Arrow from "../../assets/icons/arrow-right.svg";
import print1 from '../../assets/print-1.jpeg'
import print2 from '../../assets/print-2.jpeg'

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="" />
      <div className="container">
        <div className="main-1">
          <h1>
            Aumente as suas vendas em até 20% através do WhatsApp, para isso
            você precisa aprender a vender usando o aplicativo.
          </h1>

          <iframe
            width="80%"
            height="500"
            src="https://www.youtube.com/embed/WC2ByB6mngg"
            title="Ainda tem dúvidas se o VQC é para você? Assista!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2>
            Recentemente uma pesquisa apontou que em alguns seguimentos as
            vendas por WhatsApp convertem até 20% a mais do que os meios
            tradicionais do e-commerce.
          </h2>

          <div className="prints">
            <img src={print1} alt="print noticia" />
            <img src={print2} alt="print noticia" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
